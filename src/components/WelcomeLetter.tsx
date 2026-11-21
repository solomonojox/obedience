"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Sparkles, Calendar, Heart } from "lucide-react";
import EditorialDivider from "./EditorialDivider";

export default function WelcomeLetter() {
  // Target: 22 November 2026 at 12:00:00 (12 noon prompt)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-11-22T12:00:00").getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="welcome" className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 editorial-paper overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Magazine Issue Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs sm:text-sm tracking-[0.3em] font-cinzel text-[#722F37] font-semibold uppercase mb-2">
            OBIDENCE 2026
          </p>
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[1px] w-8 bg-[#D4AF37]" />
            <h2 className="text-xs sm:text-sm tracking-[0.35em] text-[#58111A] uppercase font-sans-clean font-medium">
              A CELEBRATION OF LOVE
            </h2>
            <span className="h-[1px] w-8 bg-[#D4AF37]" />
          </div>
          <h3 className="font-serif-title text-3xl sm:text-4xl md:text-5xl text-[#1A1516] tracking-tight">
            WELCOME / <span className="italic font-serif-sub text-[#722F37]">A LETTER FROM US</span>
          </h3>
        </div>

        {/* Editorial Letter & Photo Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-center">
          {/* Left Column: The Letter */}
          <div className="lg:col-span-7 space-y-6">
            <div className="border-l-2 border-[#D4AF37] pl-4 sm:pl-6 py-2">
              <h4 className="font-serif-title text-2xl sm:text-3xl text-[#58111A] leading-snug">
                Welcome to <span className="font-cinzel tracking-wider text-[#3E0C13]">OBIDENCE</span>
              </h4>
              <p className="font-serif-sub italic text-lg sm:text-xl text-[#722F37] mt-1">
                Where two become one, and forever begins.
              </p>
            </div>

            <p className="text-base sm:text-lg text-[#1A1516]/85 font-serif-sub leading-relaxed first-letter:text-5xl first-letter:font-cinzel first-letter:text-[#58111A] first-letter:float-left first-letter:mr-3 first-letter:font-bold">
              What began as two separate journeys has, by God’s grace, become a shared story of love, growth, friendship and purpose.
            </p>

            <p className="text-base sm:text-lg text-[#1A1516]/85 font-serif-sub leading-relaxed">
              On <span className="font-semibold text-[#58111A]">22 November 2026</span>, Evidence and Obinna take a bold and beautiful step into a new chapter, surrounded by family, tradition and the grace of God.
            </p>

            {/* LIVE COUNTDOWN COUNTER */}
            <div className="my-8 p-6 sm:p-8 rounded-2xl bg-[#58111A] text-[#FAF6F0] shadow-xl border border-[#D4AF37]/50 relative overflow-hidden">
              {/* Background watermark */}
              <span className="absolute -right-6 -bottom-6 font-cinzel text-7xl text-white/5 font-black pointer-events-none select-none">
                2026
              </span>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#D4AF37]/30">
                  <span className="text-xs font-cinzel tracking-widest text-[#F3E5AB] uppercase flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                    Countdown to the Covenant
                  </span>
                  <span className="text-[11px] font-sans-clean text-[#FAF6F0]/70">
                    22 Nov 2026 · 12:00 PM
                  </span>
                </div>

                <div className="grid grid-cols-4 gap-3 sm:gap-4 text-center">
                  {/* Days */}
                  <div className="p-2 sm:p-3 bg-[#3E0C13]/80 rounded-xl border border-[#D4AF37]/40 shadow-inner">
                    <span className="font-cinzel text-2xl sm:text-4xl md:text-5xl font-bold text-[#F3E5AB] block">
                      {timeLeft.days}
                    </span>
                    <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#FAF6F0]/80 font-sans-clean mt-1 block">
                      Days
                    </span>
                  </div>

                  {/* Hours */}
                  <div className="p-2 sm:p-3 bg-[#3E0C13]/80 rounded-xl border border-[#D4AF37]/40 shadow-inner">
                    <span className="font-cinzel text-2xl sm:text-4xl md:text-5xl font-bold text-[#F3E5AB] block">
                      {timeLeft.hours}
                    </span>
                    <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#FAF6F0]/80 font-sans-clean mt-1 block">
                      Hrs
                    </span>
                  </div>

                  {/* Minutes */}
                  <div className="p-2 sm:p-3 bg-[#3E0C13]/80 rounded-xl border border-[#D4AF37]/40 shadow-inner">
                    <span className="font-cinzel text-2xl sm:text-4xl md:text-5xl font-bold text-[#F3E5AB] block">
                      {timeLeft.minutes}
                    </span>
                    <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#FAF6F0]/80 font-sans-clean mt-1 block">
                      Min
                    </span>
                  </div>

                  {/* Seconds */}
                  <div className="p-2 sm:p-3 bg-[#3E0C13]/80 rounded-xl border border-[#D4AF37]/40 shadow-inner">
                    <span className="font-cinzel text-2xl sm:text-4xl md:text-5xl font-bold text-[#F3E5AB] block">
                      {timeLeft.seconds}
                    </span>
                    <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#FAF6F0]/80 font-sans-clean mt-1 block">
                      Sec
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <p className="font-serif-sub italic text-lg sm:text-xl text-[#58111A] leading-relaxed border-t border-[#D4AF37]/30 pt-4">
              &ldquo;OBIDENCE 2026 is more than a wedding. It is the beginning of a covenant, a home, and a lifetime of choosing each other.&rdquo;
            </p>
          </div>

          {/* Right Column: Editorial Couple Photo Frame */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md">
              {/* Outer Magazine Frame with Gold Accent */}
              <div className="relative p-3 bg-[#FDFBF7] magazine-frame rounded-2xl overflow-hidden shadow-2xl">
                <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden">
                  <Image
                    src="/images/both.jpeg"
                    alt="Evidence & Obinna - The day a covenant begins"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-center filter contrast-[1.04] hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1516]/80 via-transparent to-transparent" />

                  {/* Photo Overlay Caption */}
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <span className="text-[10px] uppercase tracking-[0.25em] font-cinzel text-[#F3E5AB] block mb-1">
                      22 NOVEMBER 2026
                    </span>
                    <p className="font-serif-sub italic text-sm text-[#FAF6F0]">
                      The day a covenant begins.
                    </p>
                    <p className="font-cinzel text-base tracking-widest text-[#FAF6F0] font-bold mt-1">
                      Evidence & Obinna
                    </p>
                  </div>
                </div>

                {/* Corner Decorative Star */}
                <div className="absolute top-5 right-5 p-1.5 rounded-full bg-[#58111A]/80 border border-[#D4AF37]">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                </div>
              </div>

              {/* Stamp of Origin below photo */}
              <div className="mt-4 text-center">
                <span className="text-xs uppercase tracking-[0.2em] font-cinzel text-[#722F37] font-semibold">
                  EVIDENCE & OBINNA · OUR BEGINNING
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Recurring Motif Tag */}
        <EditorialDivider />
      </div>
    </section>
  );
}
