"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Volume2, VolumeX, Play, Pause, Sparkles } from "lucide-react";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.45);

  // Web Audio Synthesizer ref for zero-network romantic harmonic ambient fallback
  const audioCtxRef = useRef<AudioContext | null>(null);
  const synthTimerRef = useRef<NodeJS.Timeout | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  // HTML5 audio element for custom user audio file
  const audioElementRef = useRef<HTMLAudioElement | null>(null);

  // Canon in D / Romantic Harp Arpeggio frequencies (warm gentle sinusoidal tones)
  const romanticChords = [
    [293.66, 369.99, 440.0, 587.33], // D major
    [220.0, 277.18, 329.63, 440.0],  // A major
    [246.94, 293.66, 369.99, 493.88], // B minor
    [185.0, 220.0, 277.18, 369.99],  // F# minor
    [196.0, 246.94, 293.66, 392.0],  // G major
    [146.83, 220.0, 293.66, 440.0],  // D major
    [196.0, 246.94, 293.66, 392.0],  // G major
    [220.0, 277.18, 329.63, 440.0],  // A major
  ];

  // Play romantic chime using Web Audio
  const playRomanticNote = useCallback((freq: number, duration: number = 2.4) => {
    try {
      const ctx = audioCtxRef.current;
      if (!ctx || ctx.state === "suspended") return;

      const osc = ctx.createOscillator();
      const noteGain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      const masterGain = gainNodeRef.current ? gainNodeRef.current.gain.value : 0.3;
      noteGain.gain.setValueAtTime(0.001, ctx.currentTime);
      noteGain.gain.exponentialRampToValueAtTime(masterGain * 0.18, ctx.currentTime + 0.15);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

      osc.connect(noteGain);
      noteGain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch {
      // Audio context error ignore
    }
  }, []);

  const startProceduralMusic = useCallback(() => {
    try {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
        gainNodeRef.current = audioCtxRef.current.createGain();
        gainNodeRef.current.gain.value = volume;
      }
      if (audioCtxRef.current.state === "suspended") {
        audioCtxRef.current.resume();
      }

      let chordIndex = 0;
      let noteIndex = 0;

      if (synthTimerRef.current) clearInterval(synthTimerRef.current);

      synthTimerRef.current = setInterval(() => {
        const chord = romanticChords[chordIndex];
        const note = chord[noteIndex];
        playRomanticNote(note, 2.2);

        noteIndex++;
        if (noteIndex >= chord.length) {
          noteIndex = 0;
          chordIndex = (chordIndex + 1) % romanticChords.length;
        }
      }, 700);

      setIsPlaying(true);
    } catch {
      // Fallback
    }
  }, [playRomanticNote, volume]);

  const stopProceduralMusic = useCallback(() => {
    if (synthTimerRef.current) {
      clearInterval(synthTimerRef.current);
      synthTimerRef.current = null;
    }
  }, []);

  // Primary function to start playing and loop continuously
  const startPlaying = useCallback(() => {
    const audio = audioElementRef.current;
    if (audio) {
      audio.loop = true;
      audio.volume = volume;

      // Handle loop manually as well to ensure it stays on repeat indefinitely
      audio.onended = () => {
        audio.currentTime = 0;
        audio.play().catch(() => {});
      };

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            // If browser autoplay policy requires user gesture, procedural synthesizer or user interaction will trigger it
            startProceduralMusic();
          });
      }
    } else {
      startProceduralMusic();
    }
  }, [startProceduralMusic, volume]);

  const stopPlaying = useCallback(() => {
    if (audioElementRef.current && !audioElementRef.current.paused) {
      audioElementRef.current.pause();
    }
    stopProceduralMusic();
    setIsPlaying(false);
  }, [stopProceduralMusic]);

  // Autoplay on mount + global interaction unlock for strict browser autoplay policies
  useEffect(() => {
    // 1. Immediately attempt autoplay on mount
    startPlaying();

    // 2. Browser Autoplay Policies (Chrome, Safari, iOS, Edge) require a user gesture
    // If the browser blocks initial unprompted autoplay, these one-time passive listeners
    // instantly fire upon the user's very first scroll, click, touch, or keypress!
    const unlockAudio = () => {
      startPlaying();
      cleanupListeners();
    };

    const cleanupListeners = () => {
      window.removeEventListener("click", unlockAudio);
      window.removeEventListener("touchstart", unlockAudio);
      window.removeEventListener("scroll", unlockAudio);
      window.removeEventListener("keydown", unlockAudio);
      window.removeEventListener("pointerdown", unlockAudio);
    };

    window.addEventListener("click", unlockAudio, { passive: true, once: true });
    window.addEventListener("touchstart", unlockAudio, { passive: true, once: true });
    window.addEventListener("scroll", unlockAudio, { passive: true, once: true });
    window.addEventListener("keydown", unlockAudio, { passive: true, once: true });
    window.addEventListener("pointerdown", unlockAudio, { passive: true, once: true });

    return () => {
      cleanupListeners();
      stopProceduralMusic();
      if (audioCtxRef.current) {
        try {
          audioCtxRef.current.close();
        } catch {}
      }
    };
  }, [startPlaying, stopProceduralMusic]);

  const toggleMusic = () => {
    if (isPlaying) {
      stopPlaying();
    } else {
      startPlaying();
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (gainNodeRef.current) {
      gainNodeRef.current.gain.value = val;
    }
    if (audioElementRef.current) {
      audioElementRef.current.volume = val;
    }
    if (val === 0) {
      setIsMuted(true);
    } else if (isMuted) {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    if (isMuted) {
      setIsMuted(false);
      if (gainNodeRef.current) gainNodeRef.current.gain.value = volume;
      if (audioElementRef.current) audioElementRef.current.muted = false;
    } else {
      setIsMuted(true);
      if (gainNodeRef.current) gainNodeRef.current.gain.value = 0;
      if (audioElementRef.current) audioElementRef.current.muted = true;
    }
  };

  return (
    <>
      {/* Background audio element on infinite loop */}
      <audio
        ref={audioElementRef}
        loop
        autoPlay
        playsInline
        preload="auto"
        src="https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f69d2.mp3?filename=romantic-wedding-110098.mp3"
      />

      {/* Floating Luxury Music Player Dock */}
      <div className="fixed bottom-5 right-5 md:right-8 z-50">
        <div className="group relative flex items-center bg-[#3E0C13]/90 hover:bg-[#3E0C13] border border-[#D4AF37]/40 shadow-[0_8px_30px_rgb(0,0,0,0.35)] rounded-full p-2 backdrop-blur-md transition-all duration-300">
          {/* Spinning Vinyl / Gold Seal */}
          <button
            onClick={toggleMusic}
            aria-label={isPlaying ? "Pause wedding music" : "Play wedding music"}
            className="relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-[#722F37] via-[#58111A] to-[#D4AF37] text-[#FAF6F0] shadow-inner focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
          >
            <div
              className={`w-10 h-10 rounded-full border border-[#D4AF37]/60 flex items-center justify-center bg-[#2B080D] ${
                isPlaying ? "animate-spin-slow" : ""
              }`}
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 text-[#F3E5AB]" />
              ) : (
                <Play className="w-4 h-4 text-[#F3E5AB] ml-0.5" />
              )}
            </div>
            {/* Pulsing ring indicator when playing */}
            {isPlaying && (
              <span className="absolute -inset-1 rounded-full border border-[#D4AF37] animate-ping opacity-30" />
            )}
          </button>

          {/* Equalizer Wave / Info */}
          <div className="flex items-center gap-3 pl-3 pr-2 overflow-hidden transition-all duration-300">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-cinzel font-semibold">
                OBIDENCE 2026
              </span>
              <span className="text-xs text-[#FAF6F0] font-serif-sub italic whitespace-nowrap">
                {isPlaying ? "Timeless Romance · Playing" : "Wedding Music · Paused"}
              </span>
            </div>

            {/* Audio Wave Visualizer Bars */}
            <div className="flex items-end gap-1 h-5 w-6 px-1">
              <span
                className={`w-1 bg-[#D4AF37] rounded-full transition-all duration-300 ${
                  isPlaying ? "h-5 animate-pulse" : "h-1.5 opacity-40"
                }`}
              />
              <span
                className={`w-1 bg-[#F3E5AB] rounded-full transition-all duration-300 ${
                  isPlaying ? "h-3 animate-pulse delay-100" : "h-2.5 opacity-40"
                }`}
              />
              <span
                className={`w-1 bg-[#D4AF37] rounded-full transition-all duration-300 ${
                  isPlaying ? "h-4 animate-pulse delay-200" : "h-1 opacity-40"
                }`}
              />
              <span
                className={`w-1 bg-[#F3E5AB] rounded-full transition-all duration-300 ${
                  isPlaying ? "h-2 animate-pulse delay-150" : "h-2 opacity-40"
                }`}
              />
            </div>

            {/* Volume toggle */}
            <button
              onClick={toggleMute}
              className="text-[#D4AF37] hover:text-[#FFF] p-1.5 rounded-full transition-colors"
              title={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4 text-red-300" />
              ) : (
                <Volume2 className="w-4 h-4" />
              )}
            </button>

            {/* Volume Slider */}
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              className="w-16 h-1 bg-[#722F37] rounded-lg appearance-none cursor-pointer accent-[#D4AF37] hidden sm:block"
            />
          </div>
        </div>
      </div>
    </>
  );
}
