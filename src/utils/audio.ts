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

export function stopAgroDoctorSpeech() {
  if (activeWatchdog) {
    clearTimeout(activeWatchdog);
    activeWatchdog = null;
  }
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

export function speakAgroDoctorText(text: string, options: SpeechOptions = {}) {
  const { lang = 'HI', onStart, onEnd } = options;
  const isHindi = lang === 'HI';

  // 1. Stop any currently active speech queues first to avoid stuck buffers
  stopAgroDoctorSpeech();

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

  let hasStarted = false;

  // 2. Try native window.speechSynthesis
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    try {
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      }

      const utterance = new SpeechSynthesisUtterance(cleanText);
      // Force speech synthesis voice language to hi-IN with fallback to en-IN
      utterance.lang = isHindi ? 'hi-IN' : 'en-IN';
      utterance.rate = isHindi ? 0.92 : 0.98;
      utterance.pitch = 1.0;

      // Intelligent Indian voice selection
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
        hasStarted = true;
        if (activeWatchdog) clearTimeout(activeWatchdog);
        if (onStart) onStart();
      };

      utterance.onend = () => {
        if (activeWatchdog) clearTimeout(activeWatchdog);
        activeUtterance = null;
        if (onEnd) onEnd();
      };

      utterance.onerror = (e) => {
        if (activeWatchdog) clearTimeout(activeWatchdog);
        activeUtterance = null;
        // If canceled intentionally, do not treat as failure
        if (e.error === 'canceled' || e.error === 'interrupted') {
          if (onEnd) onEnd();
          return;
        }
        tryFallbacks();
      };

      activeUtterance = utterance;

      // Android WebView watchdog: if speech hasn't emitted onstart within 900ms, trigger fallbacks
      activeWatchdog = setTimeout(() => {
        if (!hasStarted) {
          console.warn('[AgroSave] SpeechSynthesis did not start within 900ms in WebView, engaging fallback engine...');
          tryFallbacks();
        }
      }, 900);

      window.speechSynthesis.speak(utterance);
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
    if (activeWatchdog) {
      clearTimeout(activeWatchdog);
      activeWatchdog = null;
    }

    // Fallback A: ResponsiveVoice API (works in Android WebViews)
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
              // Final fallback: Web Audio synthesized acoustic sequence
              playAgroDoctorAudioFallback();
              if (onEnd) onEnd();
            }
          }
        );
        return;
      } catch {
        // Continue to Web Audio fallback
      }
    }

    // Fallback B: Web Audio acoustic feedback so speaker activates in Android WebView
    playAgroDoctorAudioFallback();
    if (onStart) onStart();
    setTimeout(() => {
      if (onEnd) onEnd();
    }, 1800);
  }
}
