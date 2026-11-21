"use client";

import React from "react";
import Image from "next/image";
import { BookMarked, Sparkles, Heart, Church } from "lucide-react";
import EditorialDivider from "./EditorialDivider";
import { WEDDING_DATA } from "@/data/weddingData";

export default function TheCovenant() {
  const { covenant } = WEDDING_DATA;

  return (
    <section id="covenant" className="py-20 md:py-28 bg-[#3E0C13] text-[#FAF6F0] relative overflow-hidden">
      {/* Background Subtle Starfield / Golden Lights */}
      <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#58111A] border border-[#D4AF37]/50 mb-3 shadow">
            <Church className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[10px] sm:text-xs tracking-[0.25em] font-cinzel text-[#F3E5AB] uppercase font-semibold">
              The Spiritual Foundation
            </span>
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl text-[#FAF6F0] tracking-tight">
            THE COVENANT / <span className="italic font-serif-sub text-[#F3E5AB]">TWO HEARTS, ONE FOUNDATION</span>
          </h2>
          <p className="font-serif-sub italic text-xl sm:text-2xl text-[#D4AF37] mt-3">
            A Home Built on Faith
          </p>
          <p className="text-xs sm:text-sm tracking-[0.25em] text-[#FAF6F0]/80 font-cinzel uppercase mt-1">
            Two verses. One shared foundation.
          </p>
          <div className="h-[1px] w-24 bg-[#D4AF37] mx-auto mt-4" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-center">
          {/* Scripture & Dream Cards */}
          <div className="lg:col-span-7 space-y-6">
            {covenant.scriptures.map((scripture, index) => (
              <div
                key={index}
                className="p-6 sm:p-7 rounded-2xl bg-[#2B080D]/80 border border-[#D4AF37]/40 shadow-xl backdrop-blur-sm hover:border-[#D4AF37] transition-colors"
              >
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#D4AF37]/30">
                  <div className="flex items-center gap-2">
                    <BookMarked className="w-4 h-4 text-[#D4AF37]" />
                    <span className="font-cinzel text-sm sm:text-base font-bold text-[#F3E5AB] tracking-wider uppercase">
                      {scripture.ref}
                    </span>
                  </div>
                  <span className="text-[10px] sm:text-xs font-sans-clean uppercase tracking-widest text-[#D4AF37] font-semibold">
                    {scripture.theme}
                  </span>
                </div>
                <p className="font-serif-sub text-base sm:text-lg text-[#FAF6F0]/90 leading-relaxed italic">
                  {scripture.description}
                </p>
              </div>
            ))}

            {/* Shared Passions & Heart Dream Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#58111A] to-[#722F37] border border-[#D4AF37]/60 shadow-2xl">
              <div className="flex items-center gap-2 mb-2 text-[#D4AF37]">
                <Heart className="w-4 h-4 fill-[#D4AF37]" />
                <span className="text-xs font-cinzel uppercase tracking-[0.2em] text-[#F3E5AB]">
                  Shared Heart & Passion
                </span>
              </div>
              <p className="font-serif-title text-xl sm:text-2xl text-[#FAF6F0] mb-3">
                {covenant.sharedPassions}
              </p>

              <div className="pt-3 border-t border-[#D4AF37]/30">
                <span className="text-[10px] uppercase tracking-[0.25em] font-cinzel text-[#F3E5AB] block mb-1">
                  Our Dream
                </span>
                <p className="font-serif-sub italic text-lg sm:text-xl text-[#FAF6F0]">
                  &ldquo;{covenant.dream}&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Photo Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md">
              <div className="relative p-3 bg-[#2B080D] magazine-frame-dark rounded-2xl shadow-2xl">
                <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden">
                  <Image
                    src={covenant.image}
                    alt="Evidence & Obinna - One foundation"
                    fill
                    sizes="(max-width: 768px) 100vw, 450px"
                    className="object-cover filter contrast-[1.05] hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <span className="text-[10px] uppercase tracking-[0.25em] font-cinzel text-[#F3E5AB] block mb-1">
                      Two Hearts · One Foundation
                    </span>
                    <p className="font-cinzel text-lg tracking-widest text-white font-bold">
                      Evidence & Obinna
                    </p>
                    <p className="font-serif-sub italic text-sm text-[#F3E5AB]">
                      {covenant.imageCaption}
                    </p>
                  </div>
                </div>

                <div className="absolute top-5 left-5 p-1.5 rounded-full bg-[#58111A]/90 border border-[#D4AF37]">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider with light theme */}
        <div className="mt-14">
          <EditorialDivider customText="LOVE · FAITH · THE JOURNEY AHEAD" light={true} />
        </div>
      </div>
    </section>
  );
}
