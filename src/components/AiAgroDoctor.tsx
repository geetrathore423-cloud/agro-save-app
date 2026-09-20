import React, { useState, useEffect, useRef } from 'react';
import { 
  Bot, 
  Sparkles, 
  Search, 
  Mic, 
  MicOff, 
  Volume2, 
  Square, 
  Check, 
  ArrowRight,
  ShieldAlert,
  Sliders
} from 'lucide-react';
import { AiDoctorRemedy } from '../types';
import { COMPREHENSIVE_AGRO_REMEDIES, diagnoseAgroQuery } from '../utils/aiDoctorEngine';

interface AiAgroDoctorProps {
  lang: 'EN' | 'HI';
  effectiveMode?: string;
  onSetHardwareMode?: (mode: 'CROP' | 'WEED' | 'crop' | 'weed') => void;
  onStatusChange?: (status: string) => void;
}

export const AiAgroDoctor: React.FC<AiAgroDoctorProps> = ({
  lang,
  effectiveMode = 'crop',
  onSetHardwareMode,
  onStatusChange
}) => {
  const [doctorQuery, setDoctorQuery] = useState('');
  const [activeRemedy, setActiveRemedy] = useState<AiDoctorRemedy>(() => COMPREHENSIVE_AGRO_REMEDIES[0]);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isVoice2VoiceActive, setIsVoice2VoiceActive] = useState(true);
  const [lastTranscribed, setLastTranscribed] = useState<string>('');

  // Persistent utterance ref to avoid Chrome garbage collection bug
  const activeUtteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const recognitionRef = useRef<any>(null);

  // Preload and monitor available voices
  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.getVoices();
      const handleVoicesChanged = () => {
        window.speechSynthesis.getVoices();
      };
      window.speechSynthesis.onvoiceschanged = handleVoicesChanged;

      return () => {
        if (window.speechSynthesis.speaking) {
          window.speechSynthesis.cancel();
        }
      };
    }
  }, []);

  // Stop current active speech playback cleanly
  const stopSpeaking = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    activeUtteranceRef.current = null;
    setIsSpeaking(false);
  };

  // Play auditory tone chime for immediate feedback
  const playAudioCue = (freq = 600, durationMs = 120) => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + durationMs / 1000);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + durationMs / 1000);
    } catch {
      // AudioContext unavailable or blocked
    }
  };

  // Full Text-to-Speech (TTS) Voice Engine
  const speakText = (text: string) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      if (onStatusChange) onStatusChange('Speech synthesis is not supported in this browser');
      return;
    }

    try {
      // If currently speaking, toggle off immediately
      if (window.speechSynthesis.speaking && isSpeaking) {
        stopSpeaking();
        return;
      }

      // Cancel previous playback
      window.speechSynthesis.cancel();
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      }

      playAudioCue(540, 90);

      // Clean speech text for natural human pronunciation
      const cleanText = text
        .replace(/[*#_`~]/g, ' ')
        .replace(/[🌾🟡🐛🧪🪰🌿🍂🌽💡⚠️✓⚡🎯💧⏱️]/gu, '')
        .replace(/\s+/g, ' ')
        .trim();

      if (!cleanText) return;

      // Chrome async cancel fix: start speech after short delay
      setTimeout(() => {
        try {
          const utterance = new SpeechSynthesisUtterance(cleanText);
          const isHindi = lang === 'HI';
          utterance.lang = isHindi ? 'hi-IN' : 'en-IN';
          utterance.rate = isHindi ? 0.92 : 0.96;
          utterance.pitch = 1.0;

          // Intelligent voice selection prioritizing Indian languages
          const voices = window.speechSynthesis.getVoices();
          if (voices && voices.length > 0) {
            if (isHindi) {
              const hiVoice = voices.find(v => v.lang === 'hi-IN' || v.lang.startsWith('hi') || v.name.toLowerCase().includes('hindi')) ||
                              voices.find(v => v.lang.includes('IN'));
              if (hiVoice) utterance.voice = hiVoice;
            } else {
              const enVoice = voices.find(v => v.lang === 'en-IN' || v.name.toLowerCase().includes('india')) ||
                              voices.find(v => v.lang.startsWith('en'));
              if (enVoice) utterance.voice = enVoice;
            }
          }

          utterance.onstart = () => {
            setIsSpeaking(true);
            if (onStatusChange) {
              onStatusChange(lang === 'HI' ? 'वॉइस सहायक बोल रहा है...' : 'Voice Assistant speaking...');
            }
          };

          utterance.onend = () => {
            setIsSpeaking(false);
            activeUtteranceRef.current = null;
          };

          utterance.onerror = (event) => {
            // Only warn if not intentionally canceled
            if (event.error !== 'canceled' && event.error !== 'interrupted') {
              console.warn('Speech synthesis error:', event);
            }
            setIsSpeaking(false);
            activeUtteranceRef.current = null;
          };

          activeUtteranceRef.current = utterance;
          window.speechSynthesis.speak(utterance);
        } catch (err) {
          console.warn('Speak error inside timeout:', err);
          setIsSpeaking(false);
        }
      }, 50);

    } catch (err) {
      console.warn('Speech synthesis exception:', err);
      setIsSpeaking(false);
    }
  };

  // Trigger Speech-to-Text (STT) Voice Recognition
  const toggleListening = () => {
    if (isListening) {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch {
          // ignore
        }
      }
      setIsListening(false);
      return;
    }

    const SpeechRecognition = (window as unknown as { SpeechRecognition?: any }).SpeechRecognition ||
                              (window as unknown as { webkitSpeechRecognition?: any }).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      // Fallback for browsers / sandboxes without Web Speech API
      const fallbackQuery = lang === 'HI' ? 'गेहूं में गुल्ली डंडा' : 'Phalaris weed wheat';
      setDoctorQuery(fallbackQuery);
      handleAskDoctor(fallbackQuery, true);
      if (onStatusChange) {
        onStatusChange(lang === 'HI' ? 'माइक्रोफोन असमर्थ: डिफ़ॉल्ट सवाल चुना गया' : 'Mic unavailable: Loaded sample query');
      }
      return;
    }

    try {
      stopSpeaking();
      playAudioCue(880, 150);

      const recognition = new SpeechRecognition();
      recognitionRef.current = recognition;
      recognition.lang = lang === 'HI' ? 'hi-IN' : 'en-IN';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onstart = () => {
        setIsListening(true);
        if (onStatusChange) {
          onStatusChange(lang === 'HI' ? 'बोलिए, मैं सुन रहा हूँ...' : 'Listening, speak now...');
        }
      };

      recognition.onresult = (event: any) => {
        if (event.results && event.results[0] && event.results[0][0]) {
          const transcript = event.results[0][0].transcript;
          setDoctorQuery(transcript);
          setLastTranscribed(transcript);
          playAudioCue(660, 100);
          handleAskDoctor(transcript, true);
        }
      };

      recognition.onerror = (err: any) => {
        console.warn('Speech recognition error:', err);
        setIsListening(false);
        if (onStatusChange) {
          onStatusChange(lang === 'HI' ? 'माइक एक्सेस अस्वीकृत या आवाज नहीं मिली' : 'Mic access denied or no speech detected');
        }
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    } catch (err) {
      console.warn('Recognition start exception:', err);
      setIsListening(false);
    }
  };

  // Perform dynamic diagnosis & update prescription card
  const handleAskDoctor = (overrideQuery?: string, autoSpeak = false) => {
    const q = (overrideQuery !== undefined ? overrideQuery : doctorQuery).trim();
    if (!q) return;

    const matchedRemedy = diagnoseAgroQuery(q, lang);
    setActiveRemedy(matchedRemedy);

    if (onStatusChange) {
      onStatusChange(
        lang === 'HI'
          ? `सलाह: ${matchedRemedy.questionHi.slice(0, 32)}...`
          : `Rx: ${matchedRemedy.questionEn.slice(0, 32)}...`
      );
    }

    if (autoSpeak || isVoice2VoiceActive) {
      const textToRead = lang === 'HI'
        ? `${matchedRemedy.questionHi}। ${matchedRemedy.answerHi}। संस्तुत रसायन: ${matchedRemedy.recommendedChemical}। मात्रा: ${matchedRemedy.recommendedDosage}।`
        : `${matchedRemedy.questionEn}. ${matchedRemedy.answerEn}. Recommended chemical: ${matchedRemedy.recommendedChemical}. Dosage: ${matchedRemedy.recommendedDosage}.`;
      speakText(textToRead);
    }
  };

  // Handle 1-click Hardware Mode sync
  const handleTriggerHardwareMode = (targetMode: 'WEED' | 'CROP') => {
    playAudioCue(750, 120);
    if (onSetHardwareMode) {
      onSetHardwareMode(targetMode);
    }
    if (onStatusChange) {
      onStatusChange(
        lang === 'HI'
          ? `हार्डवेयर मोड ${targetMode === 'WEED' ? '1 (खरपतवार)' : '2 (फसल पोषण)'} सेट किया गया`
          : `Hardware Mode ${targetMode === 'WEED' ? '1 (Weed)' : '2 (Crop)'} configured`
      );
    }
  };

  const isModeSynced = 
    (activeRemedy.suggestedMode === 'WEED' && effectiveMode.toLowerCase() === 'weed') ||
    (activeRemedy.suggestedMode === 'CROP' && effectiveMode.toLowerCase() === 'crop');

  return (
    <div id="ai-agro-doctor-card" className="bg-gradient-to-br from-emerald-50 via-white to-emerald-50/60 rounded-xl p-3 shadow-sm border border-emerald-900/15">
      {/* Header Bar */}
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center space-x-1.5 font-bold text-[#1B5E20] text-xs">
          <Bot className="w-4 h-4 text-emerald-700 shrink-0" />
          <span>{lang === 'HI' ? 'एआई एग्रो-डॉक्टर व वॉयस सहायक' : 'AI Agro-Doctor & Voice Assistant'}</span>
        </div>
        
        {/* Interactive Voice 2 Voice Toggle / Active Speaking Status */}
        <button
          id="btn-voice-2-voice-toggle"
          type="button"
          onClick={() => {
            if (isSpeaking) {
              stopSpeaking();
            } else if (activeRemedy) {
              const textToRead = lang === 'HI' 
                ? `${activeRemedy.questionHi}। ${activeRemedy.answerHi}। संस्तुत रसायन: ${activeRemedy.recommendedChemical}। मात्रा: ${activeRemedy.recommendedDosage}।`
                : `${activeRemedy.questionEn}. ${activeRemedy.answerEn}. Recommended chemical: ${activeRemedy.recommendedChemical}. Dosage: ${activeRemedy.recommendedDosage}.`;
              speakText(textToRead);
            }
          }}
          className={`flex items-center space-x-1.5 px-2 py-0.5 rounded-full text-[9px] font-bold transition-all border shadow-2xs ${
            isSpeaking 
              ? 'bg-amber-100 text-amber-900 border-amber-300 animate-pulse'
              : isListening
              ? 'bg-red-100 text-red-900 border-red-300 animate-pulse'
              : 'bg-emerald-100/90 text-emerald-900 border-emerald-300 hover:bg-emerald-200'
          }`}
          title={isSpeaking ? (lang === 'HI' ? 'ऑडियो रोकें' : 'Stop Audio') : (lang === 'HI' ? 'वॉइस में सुनें' : 'Readout with Voice')}
        >
          {isSpeaking ? (
            <div className="flex items-center space-x-1 text-amber-700">
              <span className="inline-block w-1 h-2 bg-amber-500 rounded animate-pulse" />
              <span className="inline-block w-1 h-3.5 bg-amber-600 rounded animate-bounce" />
              <span className="inline-block w-1 h-1.5 bg-amber-500 rounded animate-pulse" />
              <span className="ml-0.5">{lang === 'HI' ? 'रोकें (Stop)' : 'Stop Audio'}</span>
            </div>
          ) : isListening ? (
            <div className="flex items-center space-x-1 text-red-700">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-ping" />
              <span>{lang === 'HI' ? 'सुन रहा हूँ...' : 'Listening...'}</span>
            </div>
          ) : (
            <>
              <Sparkles className="w-2.5 h-2.5 text-amber-600" />
              <span>Voice 2 Voice</span>
            </>
          )}
        </button>
      </div>

      <p className="text-[10px] text-neutral-600 mb-2 leading-tight">
        {lang === 'HI' 
          ? 'फसल रोग, कीट, खरपतवार या कीटनाशक खुराक की तुरंत सलाह व वॉइस उत्तर पाएं' 
          : 'Instant expert diagnosis & pesticide prescriptions for weeds, pests, and crops'}
      </p>

      {/* Search Input Bar with Speech Mic & Ask Button */}
      <div className="flex items-center space-x-1.5 mb-2">
        <div className="relative flex-1">
          <input
            id="doctor-query-input"
            type="text"
            value={doctorQuery}
            onChange={(e) => setDoctorQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleAskDoctor();
            }}
            placeholder={lang === 'HI' ? 'रोग या खरपतवार का नाम लिखें...' : 'Ask disease, pest, or weed...'}
            className="w-full pl-7 pr-2 py-1.5 text-xs bg-white border border-emerald-700/30 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-700 text-neutral-800 placeholder:text-neutral-400 shadow-2xs"
          />
          <Search className="w-3.5 h-3.5 text-neutral-400 absolute left-2 top-2" />
        </div>

        {/* Voice Mic Button */}
        <button
          id="btn-voice-mic"
          type="button"
          onClick={toggleListening}
          className={`p-1.5 rounded-lg border transition-all active:scale-95 flex items-center justify-center shadow-xs ${
            isListening 
              ? 'bg-red-600 border-red-700 text-white animate-pulse ring-2 ring-red-400' 
              : 'bg-[#1B5E20] border-[#1B5E20] text-white hover:bg-[#2E7D32]'
          }`}
          title={lang === 'HI' ? 'बोलकर पूछें (Voice Mic)' : 'Ask with Voice Mic'}
        >
          {isListening ? <MicOff className="w-3.5 h-3.5" /> : <Mic className="w-3.5 h-3.5" />}
        </button>

        {/* Ask Button */}
        <button
          id="btn-doctor-ask"
          type="button"
          onClick={() => handleAskDoctor()}
          className="px-2.5 py-1.5 bg-[#2E7D32] hover:bg-[#1B5E20] text-white text-[11px] font-bold rounded-lg transition-all active:scale-95 shadow-xs whitespace-nowrap"
        >
          {lang === 'HI' ? 'पूछें' : 'Ask'}
        </button>
      </div>

      {/* Quick Tag Suggestions */}
      <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 scrollbar-none text-[10px]">
        <button
          id="tag-gulli-danda"
          type="button"
          onClick={() => {
            const q = lang === 'HI' ? 'गुल्ली डंडा' : 'Phalaris weed';
            setDoctorQuery(q);
            handleAskDoctor(q, true);
          }}
          className="whitespace-nowrap px-2 py-0.5 rounded-full border border-emerald-300 bg-white text-emerald-800 hover:bg-emerald-50 active:scale-95 transition-all shadow-2xs font-medium"
        >
          🌾 {lang === 'HI' ? 'गुल्ली डंडा' : 'Phalaris Weed'}
        </button>

        <button
          id="tag-yellow-rust"
          type="button"
          onClick={() => {
            const q = lang === 'HI' ? 'पीला रतुआ गेहूं' : 'Wheat Yellow Rust';
            setDoctorQuery(q);
            handleAskDoctor(q, true);
          }}
          className="whitespace-nowrap px-2 py-0.5 rounded-full border border-emerald-300 bg-white text-emerald-800 hover:bg-emerald-50 active:scale-95 transition-all shadow-2xs font-medium"
        >
          🟡 {lang === 'HI' ? 'पीला रतुआ' : 'Yellow Rust'}
        </button>

        <button
          id="tag-pink-bollworm"
          type="button"
          onClick={() => {
            const q = lang === 'HI' ? 'गुलाबी सुंडी कपास' : 'Pink bollworm cotton';
            setDoctorQuery(q);
            handleAskDoctor(q, true);
          }}
          className="whitespace-nowrap px-2 py-0.5 rounded-full border border-emerald-300 bg-white text-emerald-800 hover:bg-emerald-50 active:scale-95 transition-all shadow-2xs font-medium"
        >
          🐛 {lang === 'HI' ? 'गुलाबी सुंडी' : 'Bollworm'}
        </button>

        <button
          id="tag-nano-urea"
          type="button"
          onClick={() => {
            const q = lang === 'HI' ? 'नेनो यूरिया छिड़काव' : 'Nano urea spray dose';
            setDoctorQuery(q);
            handleAskDoctor(q, true);
          }}
          className="whitespace-nowrap px-2 py-0.5 rounded-full border border-emerald-300 bg-white text-emerald-800 hover:bg-emerald-50 active:scale-95 transition-all shadow-2xs font-medium"
        >
          🧪 {lang === 'HI' ? 'नेनो यूरिया' : 'Nano Urea'}
        </button>

        <button
          id="tag-whitefly"
          type="button"
          onClick={() => {
            const q = lang === 'HI' ? 'सफेद मक्खी नियंत्रण' : 'Whitefly control';
            setDoctorQuery(q);
            handleAskDoctor(q, true);
          }}
          className="whitespace-nowrap px-2 py-0.5 rounded-full border border-emerald-300 bg-white text-emerald-800 hover:bg-emerald-50 active:scale-95 transition-all shadow-2xs font-medium"
        >
          🪰 {lang === 'HI' ? 'सफेद मक्खी' : 'Whitefly'}
        </button>

        <button
          id="tag-motha-weed"
          type="button"
          onClick={() => {
            const q = lang === 'HI' ? 'मोथा घास' : 'Motha Nutsedge weed';
            setDoctorQuery(q);
            handleAskDoctor(q, true);
          }}
          className="whitespace-nowrap px-2 py-0.5 rounded-full border border-emerald-300 bg-white text-emerald-800 hover:bg-emerald-50 active:scale-95 transition-all shadow-2xs font-medium"
        >
          🌿 {lang === 'HI' ? 'मोथा घास' : 'Nutsedge'}
        </button>

        <button
          id="tag-bathua-weed"
          type="button"
          onClick={() => {
            const q = lang === 'HI' ? 'बथुआ खरपतवार' : 'Bathua weed control';
            setDoctorQuery(q);
            handleAskDoctor(q, true);
          }}
          className="whitespace-nowrap px-2 py-0.5 rounded-full border border-emerald-300 bg-white text-emerald-800 hover:bg-emerald-50 active:scale-95 transition-all shadow-2xs font-medium"
        >
          🍂 {lang === 'HI' ? 'बथुआ' : 'Bathua'}
        </button>

        <button
          id="tag-armyworm"
          type="button"
          onClick={() => {
            const q = lang === 'HI' ? 'मक्का फॉल आर्मीवर्म' : 'Fall Armyworm Maize';
            setDoctorQuery(q);
            handleAskDoctor(q, true);
          }}
          className="whitespace-nowrap px-2 py-0.5 rounded-full border border-emerald-300 bg-white text-emerald-800 hover:bg-emerald-50 active:scale-95 transition-all shadow-2xs font-medium"
        >
          🌽 {lang === 'HI' ? 'आर्मीवर्म' : 'Armyworm'}
        </button>
      </div>

      {/* Diagnostic Prescription Card */}
      {activeRemedy && (
        <div id="doctor-prescription-card" className="mt-2.5 bg-white border border-emerald-200 rounded-lg p-2.5 shadow-xs">
          {/* Prescription Title & Voice Action Button */}
          <div className="flex items-start justify-between gap-1 mb-1.5 pb-1 border-b border-emerald-100">
            <span className="text-[11px] font-bold text-[#1B5E20] leading-snug">
              {lang === 'HI' ? activeRemedy.questionHi : activeRemedy.questionEn}
            </span>
            
            {/* Readout / Play Voice Button with animated Equalizer */}
            <button
              id="btn-play-voice-readout"
              type="button"
              onClick={() => {
                if (isSpeaking) {
                  stopSpeaking();
                } else {
                  const textToRead = lang === 'HI' 
                    ? `${activeRemedy.questionHi}। ${activeRemedy.answerHi}। संस्तुत रसायन: ${activeRemedy.recommendedChemical}। मात्रा: ${activeRemedy.recommendedDosage}।`
                    : `${activeRemedy.questionEn}. ${activeRemedy.answerEn}. Recommended chemical: ${activeRemedy.recommendedChemical}. Dosage: ${activeRemedy.recommendedDosage}.`;
                  speakText(textToRead);
                }
              }}
              className={`shrink-0 flex items-center space-x-1.5 px-2 py-0.5 rounded text-[10px] font-bold border transition-all active:scale-95 shadow-2xs ${
                isSpeaking
                  ? 'bg-amber-500 border-amber-600 text-white'
                  : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border-emerald-200'
              }`}
              title={isSpeaking ? (lang === 'HI' ? 'ऑडियो रोकें' : 'Stop Audio') : (lang === 'HI' ? 'सुनाएँ (Listen)' : 'Listen with TTS')}
            >
              {isSpeaking ? (
                <>
                  <div className="flex items-center space-x-0.5">
                    <span className="w-0.5 h-2 bg-white rounded animate-pulse" />
                    <span className="w-0.5 h-3 bg-white rounded animate-bounce" />
                    <span className="w-0.5 h-1.5 bg-white rounded animate-pulse" />
                  </div>
                  <span>{lang === 'HI' ? 'रोकें' : 'Stop'}</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-3 h-3 text-emerald-700" />
                  <span>{lang === 'HI' ? 'सुनाएँ' : 'Listen'}</span>
                </>
              )}
            </button>
          </div>

          {/* Description & Treatment Explanation */}
          <p className="text-[10px] text-neutral-700 leading-relaxed mb-2">
            {lang === 'HI' ? activeRemedy.answerHi : activeRemedy.answerEn}
          </p>

          {/* 4-Box Technical Application Matrix */}
          <div className="grid grid-cols-2 gap-1.5 mb-2 text-[10px]">
            <div className="bg-emerald-50/80 border border-emerald-200 rounded p-1.5">
              <div className="text-[9px] text-emerald-700 font-bold uppercase tracking-wider mb-0.5">
                🧪 {lang === 'HI' ? 'संस्तुत रसायन' : 'Chemical'}
              </div>
              <div className="font-semibold text-emerald-950 truncate">
                {activeRemedy.recommendedChemical}
              </div>
            </div>

            <div className="bg-emerald-50/80 border border-emerald-200 rounded p-1.5">
              <div className="text-[9px] text-emerald-700 font-bold uppercase tracking-wider mb-0.5">
                💧 {lang === 'HI' ? 'मात्रा व पानी' : 'Dose & Water'}
              </div>
              <div className="font-semibold text-emerald-950 font-mono">
                {activeRemedy.recommendedDosage}
              </div>
            </div>

            <div className="bg-emerald-50/80 border border-emerald-200 rounded p-1.5">
              <div className="text-[9px] text-emerald-700 font-bold uppercase tracking-wider mb-0.5">
                🎯 {lang === 'HI' ? 'नोज़ल का प्रकार' : 'Nozzle Type'}
              </div>
              <div className="font-semibold text-emerald-950">
                {activeRemedy.nozzleType || (activeRemedy.suggestedMode === 'WEED' ? 'फ्लैट फैन (Flat Fan 110°)' : 'हॉलो कोन (Hollow Cone)')}
              </div>
            </div>

            <div className="bg-emerald-50/80 border border-emerald-200 rounded p-1.5">
              <div className="text-[9px] text-emerald-700 font-bold uppercase tracking-wider mb-0.5">
                ⏱️ {lang === 'HI' ? 'स्प्रे का समय' : 'Spray Timing'}
              </div>
              <div className="font-semibold text-emerald-950">
                {activeRemedy.sprayTiming || (lang === 'HI' ? 'सुबह या शाम के समय' : 'Morning or late evening')}
              </div>
            </div>
          </div>

          {/* Mode Tip Callout */}
          <div className="text-[10px] text-[#1B5E20] font-medium bg-amber-50/90 border border-amber-200 rounded px-2 py-1.5 mb-1.5">
            💡 {lang === 'HI' ? activeRemedy.modeTipHi : activeRemedy.modeTipEn}
          </div>

          {/* 1-Click Hardware Mode Auto-Sync Switcher */}
          {activeRemedy.suggestedMode && (
            <div className="pt-1.5 border-t border-emerald-100 flex items-center justify-between gap-1">
              <div className="text-[10px] text-emerald-900 font-semibold truncate">
                {activeRemedy.suggestedMode === 'WEED' 
                  ? (lang === 'HI' ? '🎯 अनुशंसित: मोड 1 (खरपतवार मारक)' : '🎯 Target: Mode 1 (Weedicide)')
                  : (lang === 'HI' ? '🌱 अनुशंसित: मोड 2 (फसल पर्णीय पोषण)' : '🌱 Target: Mode 2 (Crop Foliar)')}
              </div>
              <button
                id="btn-sync-hardware-mode"
                type="button"
                onClick={() => handleTriggerHardwareMode(activeRemedy.suggestedMode === 'WEED' ? 'WEED' : 'CROP')}
                className={`shrink-0 px-2 py-1 text-[9px] font-bold rounded shadow-xs transition-all active:scale-95 text-white ${
                  isModeSynced
                    ? 'bg-[#1B5E20] ring-1 ring-emerald-400'
                    : 'bg-[#2E7D32] hover:bg-[#1B5E20]'
                }`}
              >
                {activeRemedy.suggestedMode === 'WEED'
                  ? (isModeSynced ? (lang === 'HI' ? '✓ मोड 1 सक्रिय है' : '✓ Mode 1 Active') : (lang === 'HI' ? '⚡ AGRO SAVE मोड 1 सेट करें' : '⚡ Set Mode 1'))
                  : (isModeSynced ? (lang === 'HI' ? '✓ मोड 2 सक्रिय है' : '✓ Mode 2 Active') : (lang === 'HI' ? '⚡ AGRO SAVE मोड 2 सेट करें' : '⚡ Set Mode 2'))
                }
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AiAgroDoctor;
