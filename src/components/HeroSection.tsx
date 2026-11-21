"use client";

import React from "react";
import Image from "next/image";
import { ChevronDown, Sparkles } from "lucide-react";
import { WEDDING_DATA } from "@/data/weddingData";

export default function HeroSection() {
  const { couple } = WEDDING_DATA;

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#1A1516] text-[#FAF6F0]">
      {/* Background Image of the Couple */}
      <div className="absolute inset-0 z-0">
        <Image
          src={couple.heroImage}
          alt="Obinna & Evidence - The Wedding Issue"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.62] contrast-[1.08] transform scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Editorial Gradients: Deep Wine, Obsidian, and Gold Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1516] via-[#3E0C13]/60 to-[#1A1516]/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#200508]/40 to-[#1A1516]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/20 to-black/70" />
      </div>

      {/* Magazine Framing Border */}
      <div className="absolute inset-4 sm:inset-6 md:inset-8 border border-[#D4AF37]/40 pointer-events-none z-10 hidden sm:block">
        <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-[#D4AF37]" />
        <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-[#D4AF37]" />
        <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-[#D4AF37]" />
        <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-[#D4AF37]" />
      </div>

      {/* TOP HEADER SECTION */}
      <div className="relative z-20 pt-8 sm:pt-12 md:pt-14 px-6 text-center max-w-5xl mx-auto">
        {/* Ticker: LOVE • CULTURE • HERITAGE • FOREVER */}
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#58111A]/70 border border-[#D4AF37]/50 backdrop-blur-md mb-4 shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <p className="text-[10px] sm:text-xs md:text-sm tracking-[0.3em] font-cinzel font-semibold text-[#F3E5AB] uppercase">
            LOVE • CULTURE • HERITAGE • FOREVER
          </p>
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
        </div>

        {/* Subtitle: A CELEBRATION OF LOVE */}
        <p className="text-xs sm:text-sm tracking-[0.35em] text-[#FAF6F0]/90 uppercase font-sans-clean font-light mb-2">
          A CELEBRATION OF LOVE
        </p>

        {/* Header Block: THE WEDDING ISSUE 2026 */}
        <div className="flex items-center justify-center gap-4 py-1">
          <span className="h-[1px] w-12 sm:w-20 bg-[#D4AF37]/60" />
          <h2 className="text-xs sm:text-sm md:text-base tracking-[0.45em] font-cinzel font-bold text-[#D4AF37] uppercase">
            THE WEDDING ISSUE · 2026
          </h2>
          <span className="h-[1px] w-12 sm:w-20 bg-[#D4AF37]/60" />
        </div>
      </div>

      {/* CENTER MAGAZINE COVER MASTHEAD */}
      <div className="relative z-20 my-auto px-4 sm:px-8 py-6 w-full max-w-7xl mx-auto">
        <div className="text-center">
          {/* Couple Names */}
          <p className="font-serif-sub italic text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#F3E5AB] tracking-widest drop-shadow-md mb-2 sm:mb-4">
            OBINNA & EVIDENCE
          </p>

          {/* Huge Iconic Monogram */}
          <h1 className="font-cinzel text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-[0.12em] text-transparent bg-clip-text bg-gradient-to-b from-[#FFF4D0] via-[#FAF6F0] to-[#C5A059] drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)] uppercase">
            OBIDENCE
          </h1>

          <div className="flex items-center justify-center gap-3 sm:gap-6 mt-1 sm:mt-2">
            <span className="h-[1px] w-8 sm:w-16 bg-[#D4AF37]" />
            <span className="font-cinzel text-2xl sm:text-3xl md:text-4xl tracking-[0.3em] font-bold text-[#F3E5AB]">
              2026
            </span>
            <span className="h-[1px] w-8 sm:w-16 bg-[#D4AF37]" />
          </div>
        </div>

        {/* MAGAZINE EDITORIAL FLANKING CALLOUTS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 mt-10 md:mt-14 max-w-6xl mx-auto items-end">
          {/* Left Callout */}
          <div className="p-4 sm:p-5 rounded-lg bg-[#2B080D]/50 border border-[#D4AF37]/30 backdrop-blur-sm text-left">
            <span className="text-[10px] tracking-[0.25em] font-cinzel text-[#D4AF37] uppercase block mb-1">
              Vol. 1 · Opening Note
            </span>
            <h3 className="font-serif-title text-xl sm:text-2xl text-[#FAF6F0] font-normal leading-tight">
              Two Hearts. <br />
              <span className="italic text-[#F3E5AB]">One Journey</span>
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#FAF6F0]/80 font-serif-sub leading-relaxed">
              A Lifetime Together: <br />
              Love in its Most <span className="text-[#D4AF37] font-semibold">Timeless</span> Form
            </p>
          </div>

          {/* Center Callout: BEAUTIFUL BLEND */}
          <div className="p-4 sm:p-5 rounded-lg bg-[#58111A]/60 border border-[#D4AF37]/50 backdrop-blur-md text-center transform md:-translate-y-2 shadow-2xl">
            <span className="text-[10px] tracking-[0.3em] font-cinzel text-[#F3E5AB] uppercase block mb-1">
              Editorial Feature
            </span>
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold tracking-widest text-[#FAF6F0] uppercase">
              BEAUTIFUL <br />
              <span className="text-[#D4AF37]">BLEND</span>
            </h3>
            <div className="h-[1px] w-12 bg-[#D4AF37] mx-auto my-2" />
            <p className="text-xs sm:text-sm font-serif-sub italic text-[#FAF6F0]/90">
              Heritage Meets Modern Love
            </p>
          </div>

          {/* Right Callout: FOREVER BEGINS HERE */}
          <div className="p-4 sm:p-5 rounded-lg bg-[#2B080D]/50 border border-[#D4AF37]/30 backdrop-blur-sm text-right">
            <span className="text-[10px] tracking-[0.25em] font-cinzel text-[#D4AF37] uppercase block mb-1">
              The Union
            </span>
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold tracking-wider text-[#FAF6F0] uppercase">
              FOREVER <br />
              <span className="text-[#F3E5AB]">BEGINS HERE</span>
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#FAF6F0]/80 font-serif-sub leading-relaxed">
              The Art of a <br />
              <span className="text-[#D4AF37] font-semibold italic">Timeless Union</span>
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM FOOTER SECTION */}
      <div className="relative z-20 pb-8 sm:pb-12 px-4 text-center">
        {/* Banner: TRADITION • ELEGANCE • ETERNAL LOVE */}
        <div className="max-w-3xl mx-auto py-2.5 px-6 rounded-full bg-[#3E0C13]/80 border-t border-b border-[#D4AF37]/60 backdrop-blur-md mb-6">
          <p className="text-xs sm:text-sm md:text-base tracking-[0.35em] font-cinzel font-semibold text-[#F3E5AB] uppercase">
            TRADITION • ELEGANCE • ETERNAL LOVE
          </p>
        </div>

        {/* Scroll Cue Button */}
        <a
          href="#welcome"
          className="inline-flex flex-col items-center gap-1 text-[#FAF6F0]/70 hover:text-[#D4AF37] transition-colors group"
        >
          <span className="text-[10px] font-sans-clean uppercase tracking-[0.25em]">
            Read The Wedding Issue
          </span>
          <ChevronDown className="w-5 h-5 animate-bounce group-hover:translate-y-1 transition-transform text-[#D4AF37]" />
        </a>
      </div>
    </section>
  );
}
