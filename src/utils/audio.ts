import { TextToSpeech } from '@capacitor-community/text-to-speech';
import { Capacitor } from '@capacitor/core';

// Web Audio API spray sound synthesizer for realistic haptic feedback

let audioCtx: AudioContext | null = null;
let noiseNode: AudioBufferSourceNode | null = null;
let gainNode: GainNode | null = null;

export function startSpraySound() {
  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;
    
    if (!audioCtx || audioCtx.state === 'suspended') {
      audioCtx = new AudioContextClass();
    }
    
    if (noiseNode) {
      stopSpraySound();
    }

    const bufferSize = audioCtx.sampleRate * 2;
    const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    noiseNode = audioCtx.createBufferSource();
    noiseNode.buffer = buffer;
    noiseNode.loop = true;

    // Filter to simulate high-pressure mist hiss
    const bandpass = audioCtx.createBiquadFilter();
    bandpass.type = 'bandpass';
    bandpass.frequency.value = 3500;
    bandpass.Q.value = 1.2;

    gainNode = audioCtx.createGain();
    gainNode.gain.setValueAtTime(0.01, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.18, audioCtx.currentTime + 0.05);

    noiseNode.connect(bandpass);
    bandpass.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    noiseNode.start();
  } catch {
    // AudioContext blocked or not supported
  }
}

export function stopSpraySound() {
  try {
    if (gainNode && audioCtx) {
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.08);
      setTimeout(() => {
        if (noiseNode) {
          try { noiseNode.stop(); } catch {}
          noiseNode.disconnect();
          noiseNode = null;
        }
      }, 100);
    }
  } catch {
    // Graceful fallback
  }
}

// ==========================================
// ROBUST TEXT-TO-SPEECH (TTS) & VOICE ENGINE
// FOR ANDROID WEBVIEW APK & BROWSERS
// ==========================================

export interface SpeechOptions {
  lang?: 'HI' | 'EN';
  onStart?: () => void;
  onEnd?: () => void;
  onError?: (err?: any) => void;
}

let activeUtterance: SpeechSynthesisUtterance | null = null;
let activeWatchdog: any = null;

export async function stopAgroDoctorSpeech() {
  if (activeWatchdog) {
    clearTimeout(activeWatchdog);
    activeWatchdog = null;
  }
  
  // 1. Native Capacitor TextToSpeech stop
  if (Capacitor.isNativePlatform()) {
    try {
      await TextToSpeech.stop();
    } catch {}
  }

  // 2. Web Speech API fallback stop
  if (typeof window !== 'undefined') {
    if ('speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
      } catch {}
    }
    const rv = (window as unknown as { responsiveVoice?: { stop: () => void } }).responsiveVoice;
    if (rv && typeof rv.stop === 'function') {
      try {
        rv.stop();
      } catch {}
    }
  }
  activeUtterance = null;
}

export function playAgroDoctorAudioFallback(freqs: number[] = [523.25, 659.25, 783.99, 1046.50]) {
  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    if (ctx.state === 'suspended') {
      ctx.resume();
    }
    const now = ctx.currentTime;
    freqs.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.12);
      gain.gain.setValueAtTime(0.12, now + idx * 0.12);
      gain.gain.exponentialRampToValueAtTime(0.001, now + (idx + 1) * 0.12);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + idx * 0.12);
      osc.stop(now + (idx + 1) * 0.12);
    });
  } catch {}
}

export async function speakAgroDoctorText(text: string, options: SpeechOptions = {}) {
  const { lang = 'HI', onStart, onEnd, onError } = options;
  const isHindi = lang === 'HI';

  // 1. Cancel stuck speech queues
  await stopAgroDoctorSpeech();

  // Strip Markdown, emojis and special agro symbols for crisp pronunciation
  const cleanText = text
    .replace(/[*#_`~]/g, ' ')
    .replace(/[🌾🟡🐛🧪🪰🌿🍂🌽💡⚠️✓⚡🎯💧⏱️]/gu, '')
    .replace(/\s+/g, ' ')
    .trim();

  if (!cleanText) {
    if (onEnd) onEnd();
    return;
  }

  // 2. NATIVE CAPACITOR TEXT-TO-SPEECH FOR ANDROID
  if (Capacitor.isNativePlatform()) {
    try {
      if (onStart) onStart();
      await TextToSpeech.speak({
        text: cleanText,
        lang: isHindi ? 'hi-IN' : 'en-IN',
        rate: 1.0,
        pitch: 1.0,
        volume: 1.0,
        category: 'ambient',
      });
      if (onEnd) onEnd();
      return;
    } catch (nativeErr) {
      console.warn('[AgroSave] Native TextToSpeech exception:', nativeErr);
      // Fallback to web implementation if native fails
    }
  }

  // 2. Native window.speechSynthesis for Android WebView & Modern Browsers
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    try {
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      }

      const utterance = new SpeechSynthesisUtterance(cleanText);

      // Voice selection: Hindi -> Indian English -> US English fallback
      const voices = window.speechSynthesis.getVoices();
      let selectedVoice: SpeechSynthesisVoice | null = null;
      let selectedLang = 'en-US';

      if (isHindi) {
        // Step A: Search for Hindi voice
        selectedVoice = voices.find(v => 
          v.lang.toLowerCase().includes('hi-in') || 
          v.lang.toLowerCase().startsWith('hi') || 
          v.name.toLowerCase().includes('hindi')
        ) || null;

        if (selectedVoice) {
          selectedLang = selectedVoice.lang || 'hi-IN';
        } else {
          // Step B: Search for Indian English voice
          selectedVoice = voices.find(v => 
            v.lang.toLowerCase().includes('en-in') || 
            v.name.toLowerCase().includes('india')
          ) || null;

          if (selectedVoice) {
            selectedLang = selectedVoice.lang || 'en-IN';
          } else {
            // Step C: Fallback to standard English
            selectedVoice = voices.find(v => 
              v.lang.toLowerCase().includes('en-us') || 
              v.lang.toLowerCase().startsWith('en')
            ) || voices[0] || null;
            selectedLang = selectedVoice?.lang || 'en-US';
          }
        }
      } else {
        // English mode
        selectedVoice = voices.find(v => 
          v.lang.toLowerCase().includes('en-in') || 
          v.name.toLowerCase().includes('india')
        ) || voices.find(v => 
          v.lang.toLowerCase().includes('en-us') || 
          v.lang.toLowerCase().startsWith('en')
        ) || voices[0] || null;
        selectedLang = selectedVoice?.lang || 'en-US';
      }

      if (selectedVoice) {
        utterance.voice = selectedVoice;
        utterance.lang = selectedLang;
      } else {
        utterance.lang = selectedLang;
      }

      // Rate 0.9 and pitch 1.0 for clear reading across all voices
      utterance.rate = 0.9;
      utterance.pitch = 1.0;

      utterance.onstart = () => {
        if (onStart) onStart();
      };

      utterance.onend = () => {
        activeUtterance = null;
        try {
          (window as unknown as { __activeSpeechUtterance?: unknown }).__activeSpeechUtterance = null;
        } catch {}
        if (onEnd) onEnd();
      };

      utterance.onerror = (e) => {
        activeUtterance = null;
        try {
          (window as unknown as { __activeSpeechUtterance?: unknown }).__activeSpeechUtterance = null;
        } catch {}
        if (e.error === 'canceled' || e.error === 'interrupted') {
          if (onEnd) onEnd();
          return;
        }
        if (onError) onError(e);
        tryFallbacks();
      };

      // Store in references to prevent Chromium garbage-collection bug
      activeUtterance = utterance;
      try {
        (window as unknown as { __activeSpeechUtterance?: unknown }).__activeSpeechUtterance = utterance;
      } catch {}

      // 3. Direct synchronous trigger
      window.speechSynthesis.speak(utterance);

      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      }
      return;
    } catch (err) {
      console.warn('[AgroSave] SpeechSynthesis exception:', err);
      tryFallbacks();
      return;
    }
  } else {
    tryFallbacks();
  }

  function tryFallbacks() {
    // Fallback: ResponsiveVoice if available
    const rv = (window as unknown as { 
      responsiveVoice?: { 
        speak: (text: string, voice: string, callbacks: any) => void;
        voiceSupport: () => boolean;
      } 
    }).responsiveVoice;

    if (rv && typeof rv.speak === 'function') {
      try {
        if (onStart) onStart();
        rv.speak(
          cleanText, 
          isHindi ? 'Hindi Female' : 'Indian English Female', 
          {
            onstart: () => {
              if (onStart) onStart();
            },
            onend: () => {
              if (onEnd) onEnd();
            },
            onerror: () => {
              playAgroDoctorAudioFallback();
              if (onEnd) onEnd();
            }
          }
        );
        return;
      } catch {}
    }

    // Acoustic chime fallback
    playAgroDoctorAudioFallback();
    if (onStart) onStart();
    setTimeout(() => {
      if (onEnd) onEnd();
    }, 1800);
  }
}
