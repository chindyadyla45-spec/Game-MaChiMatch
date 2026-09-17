/**
 * Audio Synthesizer using Web Audio API
 * 100% reliable, zero external MP3 dependencies, works on all desktop browsers.
 */

class SoundEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private sfxGain: GainNode | null = null;
  private bgmGain: GainNode | null = null;
  private isMuted: boolean = false;
  private isBgmPlaying: boolean = false;
  private bgmTimer: number | null = null;
  private bgmStep: number = 0;

  constructor() {
    // Default unmuted unless explicitly set to 'true' in storage
    const savedMute = localStorage.getItem('machimath_sound_muted');
    this.isMuted = savedMute === 'true';
  }

  /**
   * Initializes or unlocks the Web Audio AudioContext upon user gesture.
   */
  public ensureUnlocked(): AudioContext | null {
    try {
      if (!this.ctx) {
        const AudioCtxClass =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (!AudioCtxClass) return null;
        this.ctx = new AudioCtxClass();

        // Master Gain Node
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : 1, this.ctx.currentTime);
        this.masterGain.connect(this.ctx.destination);

        // SFX Gain Bus
        this.sfxGain = this.ctx.createGain();
        this.sfxGain.gain.setValueAtTime(1, this.ctx.currentTime);
        this.sfxGain.connect(this.masterGain);

        // BGM Gain Bus (balanced volume so SFX stands out)
        this.bgmGain = this.ctx.createGain();
        this.bgmGain.gain.setValueAtTime(0.2, this.ctx.currentTime);
        this.bgmGain.connect(this.masterGain);
      }

      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }

      return this.ctx;
    } catch {
      return null;
    }
  }

  /**
   * Toggle Mute state with instant audio gain switching.
   */
  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    localStorage.setItem('machimath_sound_muted', String(this.isMuted));

    if (this.ctx && this.masterGain) {
      const now = this.ctx.currentTime;
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : 1, now);
    }

    if (!this.isMuted) {
      this.ensureUnlocked();
      if (this.isBgmPlaying) {
        this.startBgm();
      }
    }
    return this.isMuted;
  }

  public getMuted(): boolean {
    return this.isMuted;
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
    localStorage.setItem('machimath_sound_muted', String(this.isMuted));
    if (this.ctx && this.masterGain) {
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : 1, this.ctx.currentTime);
    }
  }

  /**
   * 🔊 Efek Suara: Tombol diklik
   */
  public playClick() {
    const ctx = this.ensureUnlocked();
    if (!ctx || this.isMuted || !this.sfxGain) return;
    try {
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(420, now + 0.05);

      gain.gain.setValueAtTime(0.35, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

      osc.connect(gain);
      gain.connect(this.sfxGain);
      osc.start(now);
      osc.stop(now + 0.05);
    } catch {}
  }

  /**
   * 🔊 Efek Suara: Karakter melangkah
   */
  public playStep() {
    const ctx = this.ensureUnlocked();
    if (!ctx || this.isMuted || !this.sfxGain) return;
    try {
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(200, now);
      osc.frequency.exponentialRampToValueAtTime(100, now + 0.06);

      gain.gain.setValueAtTime(0.28, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);

      osc.connect(gain);
      gain.connect(this.sfxGain);
      osc.start(now);
      osc.stop(now + 0.06);
    } catch {}
  }

  /**
   * 🔊 Efek Suara: Kotak berhasil didorong
   */
  public playPush() {
    const ctx = this.ensureUnlocked();
    if (!ctx || this.isMuted || !this.sfxGain) return;
    try {
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const filter = ctx.createBiquadFilter();
      const gain = ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(140, now);
      osc.frequency.exponentialRampToValueAtTime(55, now + 0.15);

      // Lowpass filter untuk memberi bobot berat pada dorongan balok
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(320, now);

      gain.gain.setValueAtTime(0.45, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.sfxGain);
      osc.start(now);
      osc.stop(now + 0.15);
    } catch {}
  }

  /**
   * 🔊 Efek Suara: Jawaban Benar (Arpeggio nada mayor cerah)
   */
  public playMatch() {
    const ctx = this.ensureUnlocked();
    if (!ctx || this.isMuted || !this.sfxGain) return;
    try {
      const now = ctx.currentTime;
      // Kunci nada C5 - E5 - G5 - C6
      const freqs = [523.25, 659.25, 783.99, 1046.5];
      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'triangle';
        const start = now + idx * 0.07;
        osc.frequency.setValueAtTime(freq, start);

        gain.gain.setValueAtTime(0.38, start);
        gain.gain.exponentialRampToValueAtTime(0.001, start + 0.26);

        osc.connect(gain);
        gain.connect(this.sfxGain!);
        osc.start(start);
        osc.stop(start + 0.26);
      });
    } catch {}
  }

  public playCorrect() {
    this.playMatch();
  }

  /**
   * 🔊 Efek Suara: Jawaban Salah (Nada disonan menurun)
   */
  public playWrong() {
    const ctx = this.ensureUnlocked();
    if (!ctx || this.isMuted || !this.sfxGain) return;
    try {
      const now = ctx.currentTime;
      const dissonantFreqs = [233.08, 220.0]; // Bb3 dan A3 (benturan nada disonan)
      dissonantFreqs.forEach((freq) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(freq, now);
        osc.frequency.linearRampToValueAtTime(freq * 0.65, now + 0.28);

        gain.gain.setValueAtTime(0.32, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);

        osc.connect(gain);
        gain.connect(this.sfxGain!);
        osc.start(now);
        osc.stop(now + 0.28);
      });
    } catch {}
  }

  /**
   * 🔊 Efek Suara: Level Berhasil Selesai (Fanfare kemenangan ceria)
   */
  public playVictory() {
    const ctx = this.ensureUnlocked();
    if (!ctx || this.isMuted || !this.sfxGain) return;
    try {
      const now = ctx.currentTime;
      const melody = [
        { f: 523.25, d: 0.12, t: 0.0 }, // C5
        { f: 659.25, d: 0.12, t: 0.12 }, // E5
        { f: 783.99, d: 0.12, t: 0.24 }, // G5
        { f: 1046.5, d: 0.35, t: 0.36 }, // C6
        { f: 880.0, d: 0.15, t: 0.72 }, // A5
        { f: 1046.5, d: 0.6, t: 0.88 }, // C6
      ];

      melody.forEach(({ f, d, t }) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'triangle';
        const noteStart = now + t;
        osc.frequency.setValueAtTime(f, noteStart);

        gain.gain.setValueAtTime(0.4, noteStart);
        gain.gain.exponentialRampToValueAtTime(0.001, noteStart + d);

        osc.connect(gain);
        gain.connect(this.sfxGain!);
        osc.start(noteStart);
        osc.stop(noteStart + d);
      });
    } catch {}
  }

  public playWin() {
    this.playVictory();
  }

  /**
   * 🔊 Efek Suara: Waktu Habis / Game Over (Nada sedih menurun)
   */
  public playGameOver() {
    const ctx = this.ensureUnlocked();
    if (!ctx || this.isMuted || !this.sfxGain) return;
    try {
      const now = ctx.currentTime;
      const notes = [
        { f: 392.0, d: 0.28, t: 0.0 }, // G4
        { f: 369.99, d: 0.28, t: 0.26 }, // F#4
        { f: 349.23, d: 0.32, t: 0.52 }, // F4
        { f: 311.13, d: 0.65, t: 0.82 }, // Eb4
      ];

      notes.forEach(({ f, d, t }) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sawtooth';
        const noteStart = now + t;
        osc.frequency.setValueAtTime(f, noteStart);

        gain.gain.setValueAtTime(0.35, noteStart);
        gain.gain.exponentialRampToValueAtTime(0.001, noteStart + d);

        osc.connect(gain);
        gain.connect(this.sfxGain!);
        osc.start(noteStart);
        osc.stop(noteStart + d);
      });
    } catch {}
  }

  /**
   * 🔊 Efek Suara: Undo langkah
   */
  public playUndo() {
    const ctx = this.ensureUnlocked();
    if (!ctx || this.isMuted || !this.sfxGain) return;
    try {
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.exponentialRampToValueAtTime(460, now + 0.1);

      gain.gain.setValueAtTime(0.28, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);

      osc.connect(gain);
      gain.connect(this.sfxGain);
      osc.start(now);
      osc.stop(now + 0.1);
    } catch {}
  }

  /**
   * 🎵 Background Music (BGM Chiptune Sederhana Berulang)
   * Dimulai setelah interaksi tombol pengguna untuk memenuhi aturan autoplay browser.
   */
  public startBgm() {
    this.isBgmPlaying = true;
    if (this.bgmTimer !== null) return; // sudah berjalan

    const ctx = this.ensureUnlocked();
    if (!ctx) return;

    // Melodi ceria pentatonik C mayor (16 langkah per putaran)
    const melody = [
      261.63, 329.63, 392.0, 523.25, // C4, E4, G4, C5
      440.0, 392.0, 329.63, 293.66, // A4, G4, E4, D4
      261.63, 329.63, 392.0, 440.0, // C4, E4, G4, A4
      523.25, 493.88, 392.0, 329.63, // C5, B4, G4, E4
    ];

    const bass = [
      130.81, 130.81, 130.81, 130.81, // C3
      174.61, 174.61, 174.61, 174.61, // F3
      196.0, 196.0, 196.0, 196.0, // G3
      130.81, 130.81, 196.0, 130.81, // C3, C3, G3, C3
    ];

    const stepDuration = 220; // ms per langkah

    this.bgmTimer = window.setInterval(() => {
      if (!this.isBgmPlaying || this.isMuted) return;
      const actx = this.ensureUnlocked();
      if (!actx || !this.bgmGain || actx.state !== 'running') return;

      try {
        const now = actx.currentTime;
        const noteFreq = melody[this.bgmStep % melody.length];
        const bassFreq = bass[this.bgmStep % bass.length];

        // Melodi utama (sine lembut)
        const leadOsc = actx.createOscillator();
        const leadGain = actx.createGain();
        leadOsc.type = 'sine';
        leadOsc.frequency.setValueAtTime(noteFreq, now);

        leadGain.gain.setValueAtTime(0.07, now);
        leadGain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);

        leadOsc.connect(leadGain);
        leadGain.connect(this.bgmGain);
        leadOsc.start(now);
        leadOsc.stop(now + 0.18);

        // Nada bass setiap 2 ketukan
        if (this.bgmStep % 2 === 0) {
          const bassOsc = actx.createOscillator();
          const bassGain = actx.createGain();
          bassOsc.type = 'triangle';
          bassOsc.frequency.setValueAtTime(bassFreq, now);

          bassGain.gain.setValueAtTime(0.08, now);
          bassGain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

          bassOsc.connect(bassGain);
          bassGain.connect(this.bgmGain);
          bassOsc.start(now);
          bassOsc.stop(now + 0.35);
        }

        this.bgmStep++;
      } catch {}
    }, stepDuration);
  }

  public stopBgm() {
    this.isBgmPlaying = false;
    if (this.bgmTimer !== null) {
      window.clearInterval(this.bgmTimer);
      this.bgmTimer = null;
    }
  }

  public pauseBgm() {
    if (this.ctx && this.bgmGain) {
      this.bgmGain.gain.setValueAtTime(0, this.ctx.currentTime);
    }
  }

  public resumeBgm() {
    if (this.ctx && this.bgmGain && !this.isMuted) {
      this.bgmGain.gain.setValueAtTime(0.2, this.ctx.currentTime);
    }
  }
}

export const sound = new SoundEngine();
