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
