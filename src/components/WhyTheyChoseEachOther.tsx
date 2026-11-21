"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, Heart, Sparkles, Smile } from "lucide-react";
import EditorialDivider from "./EditorialDivider";
import { WEDDING_DATA } from "@/data/weddingData";

export default function WhyTheyChoseEachOther() {
  const { reasonsToSayYes } = WEDDING_DATA;

  return (
    <section id="why-us" className="py-20 md:py-28 bg-[#FAF6F0] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#58111A]/10 border border-[#722F37]/20 mb-3">
            <Smile className="w-3.5 h-3.5 text-[#58111A]" />
            <span className="text-[10px] sm:text-xs tracking-[0.25em] font-cinzel text-[#58111A] uppercase font-semibold">
              {reasonsToSayYes.title}
            </span>
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl text-[#1A1516] tracking-tight">
            WHY THEY CHOSE EACH OTHER
          </h2>
          <p className="font-serif-sub italic text-xl sm:text-2xl text-[#722F37] mt-2">
            Reasons to Say Yes
          </p>
          <p className="text-xs sm:text-sm tracking-[0.2em] font-cinzel text-[#1A1516]/70 uppercase mt-1">
            Three from each heart, from the people who know best.
          </p>
          <div className="h-[1px] w-24 bg-[#D4AF37] mx-auto mt-4" />
        </div>

        {/* Dual Cards: Why She Chose Obinna & Why He Chose Evidence */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Why She Chose Obinna Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#D4AF37]/30 shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#D4AF37]/20">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] font-cinzel text-[#D4AF37] font-semibold block">
                    Evidence’s Heart
                  </span>
                  <h3 className="font-serif-title text-2xl sm:text-3xl text-[#58111A]">
                    Why she chose Obinna
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#722F37]/10 flex items-center justify-center text-[#58111A]">
                  <Heart className="w-5 h-5 fill-[#58111A]" />
                </div>
              </div>

              <div className="space-y-4">
                {reasonsToSayYes.whySheChoseObinna.map((reason, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 rounded-xl bg-[#FAF6F0] border border-[#D4AF37]/20"
                  >
                    <span className="font-cinzel text-xs font-bold text-[#D4AF37] mt-0.5 w-5 h-5 rounded-full bg-[#58111A] text-white flex items-center justify-center flex-shrink-0">
                      {idx + 1}
                    </span>
                    <p className="font-serif-sub text-base sm:text-lg text-[#1A1516]/90 leading-snug">
                      {reason}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#D4AF37]/20 flex items-center justify-between">
              <span className="text-xs font-serif-sub italic text-[#722F37]">
                &ldquo;Her Bubu&rdquo;
              </span>
              <span className="text-[10px] font-cinzel tracking-widest text-[#D4AF37] uppercase">
                Forever Covenant
              </span>
            </div>
          </div>

          {/* Why He Chose Evidence Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#D4AF37]/30 shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#D4AF37]/20">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] font-cinzel text-[#D4AF37] font-semibold block">
                    Obinna’s Heart
                  </span>
                  <h3 className="font-serif-title text-2xl sm:text-3xl text-[#58111A]">
                    Why he chose Evidence
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#722F37]/10 flex items-center justify-center text-[#58111A]">
                  <Heart className="w-5 h-5 fill-[#58111A]" />
                </div>
              </div>

              <div className="space-y-4">
                {reasonsToSayYes.whyHeChoseEvidence.map((reason, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 rounded-xl bg-[#FAF6F0] border border-[#D4AF37]/20"
                  >
                    <span className="font-cinzel text-xs font-bold text-[#D4AF37] mt-0.5 w-5 h-5 rounded-full bg-[#58111A] text-white flex items-center justify-center flex-shrink-0">
                      {idx + 1}
                    </span>
                    <p className="font-serif-sub text-base sm:text-lg text-[#1A1516]/90 leading-snug">
                      {reason}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#D4AF37]/20 flex items-center justify-between">
              <span className="text-xs font-serif-sub italic text-[#722F37]">
                &ldquo;His Bebe&rdquo;
              </span>
              <span className="text-[10px] font-cinzel tracking-widest text-[#D4AF37] uppercase">
                Forever Covenant
              </span>
            </div>
          </div>
        </div>

        {/* Center Closing Statement Banner */}
        <div className="text-center max-w-xl mx-auto mb-16 p-6 rounded-2xl bg-[#58111A] text-[#FAF6F0] shadow-lg border border-[#D4AF37]/50">
          <p className="font-cinzel text-sm sm:text-base tracking-[0.3em] text-[#F3E5AB] font-bold uppercase mb-1">
            Bubu & Bebe
          </p>
          <p className="font-serif-sub italic text-xl sm:text-2xl text-[#FAF6F0]">
            &ldquo;Chosen, and choosing, every day.&rdquo;
          </p>
        </div>

        {/* Dual Portraits: "In step" & "In love" */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Photo 1: In step */}
          <div className="flex flex-col items-center">
            <div className="w-full relative p-3 bg-white magazine-frame rounded-2xl shadow-xl">
              <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden">
                <Image
                  src={reasonsToSayYes.photo1.image}
                  alt="Evidence & Obinna - In step"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover filter contrast-[1.03] hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <span className="text-[10px] uppercase tracking-[0.25em] font-cinzel text-[#F3E5AB] block mb-0.5">
                    Evidence & Obinna
                  </span>
                  <p className="font-serif-sub italic text-lg text-white font-medium">
                    {reasonsToSayYes.photo1.caption}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Photo 2: In love */}
          <div className="flex flex-col items-center">
            <div className="w-full relative p-3 bg-white magazine-frame rounded-2xl shadow-xl">
              <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden">
                <Image
                  src={reasonsToSayYes.photo2.image}
                  alt="Evidence & Obinna - In love"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover filter contrast-[1.03] hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <span className="text-[10px] uppercase tracking-[0.25em] font-cinzel text-[#F3E5AB] block mb-0.5">
                    Evidence & Obinna
                  </span>
                  <p className="font-serif-sub italic text-lg text-white font-medium">
                    {reasonsToSayYes.photo2.caption}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14">
          <EditorialDivider customText="LOVE · FAITH · THE JOURNEY AHEAD" />
        </div>
      </div>
    </section>
  );
}
