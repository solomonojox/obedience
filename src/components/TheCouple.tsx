"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, Heart, Crown, Award, Calendar, Bookmark } from "lucide-react";
import EditorialDivider from "./EditorialDivider";
import { WEDDING_DATA } from "@/data/weddingData";

export default function TheCouple() {
  const { groom, bride } = WEDDING_DATA.couple;
  const [activeTab, setActiveTab] = useState<"both" | "bride" | "groom">("both");

  return (
    <section id="couple" className="py-20 md:py-28 bg-[#FDFBF7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs sm:text-sm tracking-[0.3em] font-cinzel text-[#722F37] font-semibold uppercase mb-2">
            The Hearts Behind The Union
          </p>
          <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl text-[#1A1516] tracking-tight">
            THE BRIDE & THE GROOM
          </h2>
          <div className="h-[1px] w-24 bg-[#D4AF37] mx-auto mt-4" />

          {/* Optional Filter Tabs for focused reading */}
          <div className="inline-flex p-1 bg-[#FAF6F0] rounded-full border border-[#D4AF37]/40 mt-8 shadow-sm">
            <button
              onClick={() => setActiveTab("both")}
              className={`px-5 py-2 rounded-full text-xs font-cinzel tracking-wider uppercase transition-all duration-300 ${
                activeTab === "both"
                  ? "bg-[#58111A] text-[#FAF6F0] shadow"
                  : "text-[#1A1516]/70 hover:text-[#58111A]"
              }`}
            >
              Side by Side
            </button>
            <button
              onClick={() => setActiveTab("bride")}
              className={`px-5 py-2 rounded-full text-xs font-cinzel tracking-wider uppercase transition-all duration-300 ${
                activeTab === "bride"
                  ? "bg-[#58111A] text-[#FAF6F0] shadow"
                  : "text-[#1A1516]/70 hover:text-[#58111A]"
              }`}
            >
              The Bride
            </button>
            <button
              onClick={() => setActiveTab("groom")}
              className={`px-5 py-2 rounded-full text-xs font-cinzel tracking-wider uppercase transition-all duration-300 ${
                activeTab === "groom"
                  ? "bg-[#58111A] text-[#FAF6F0] shadow"
                  : "text-[#1A1516]/70 hover:text-[#58111A]"
              }`}
            >
              The Groom
            </button>
          </div>
        </div>

        {/* =========================================================================
            PROFILES SPREAD
           ========================================================================= */}
        <div className="space-y-20">
          {/* THE BRIDE: Evidence Igbunu Ejairu */}
          {(activeTab === "both" || activeTab === "bride") && (
            <div className="p-6 sm:p-10 md:p-12 rounded-3xl bg-white border border-[#D4AF37]/30 shadow-xl relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Photo of Evidence */}
                <div className="lg:col-span-5 flex justify-center">
                  <div className="w-full max-w-sm">
                    <div className="relative p-3 bg-[#FAF6F0] magazine-frame rounded-2xl shadow-xl">
                      <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden">
                        <Image
                          src={bride.image}
                          alt="Evidence Igbunu Ejairu - The Bride - Heritage & grace"
                          fill
                          sizes="(max-width: 768px) 100vw, 400px"
                          className="object-cover filter contrast-[1.03] hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#3E0C13]/85 via-transparent to-transparent" />
                        
                        {/* Overlay Captions */}
                        <div className="absolute bottom-4 left-4 right-4 text-center">
                          <span className="text-[10px] uppercase tracking-[0.25em] font-cinzel text-[#F3E5AB] block mb-0.5">
                            Evidence · The Bride
                          </span>
                          <p className="font-serif-title text-xl text-white font-bold">
                            Evidence Igbunu Ejairu
                          </p>
                          <p className="font-serif-sub italic text-xs text-[#FAF6F0]/90 mt-1">
                            Heritage & grace
                          </p>
                        </div>
                      </div>

                      {/* Monogram Badge */}
                      <div className="absolute top-5 right-5 px-3 py-1 rounded-full bg-[#58111A] border border-[#D4AF37] text-[10px] font-cinzel text-[#F3E5AB] tracking-widest uppercase shadow">
                        The Bride
                      </div>
                    </div>
                  </div>
                </div>

                {/* Profile Details */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-cinzel font-bold text-[#D4AF37] tracking-[0.25em] uppercase">
                      The Bride
                    </span>
                    <span className="h-[1px] w-8 bg-[#D4AF37]" />
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#722F37]/10 text-[#722F37] text-xs font-serif-sub font-semibold">
                      <Bookmark className="w-3 h-3 text-[#D4AF37]" />
                      {bride.proverbTag}
                    </span>
                  </div>

                  <h3 className="font-serif-title text-3xl sm:text-4xl text-[#1A1516] leading-tight">
                    Evidence Igbunu Ejairu
                  </h3>

                  <p className="font-serif-sub italic text-xl sm:text-2xl text-[#722F37]">
                    A Woman Still Becoming
                  </p>

                  <div className="space-y-4 font-serif-sub text-base sm:text-lg text-[#1A1516]/85 leading-relaxed">
                    <p>{bride.bio}</p>
                    <p>{bride.vision}</p>
                  </div>

                  {/* Birthday & Character Quote */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
                    <div className="p-4 rounded-xl bg-[#FAF6F0] border border-[#D4AF37]/40">
                      <div className="flex items-center gap-2 text-xs font-cinzel text-[#58111A] font-bold uppercase tracking-wider mb-1">
                        <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span>Date of Birth</span>
                      </div>
                      <p className="font-serif-title text-lg text-[#1A1516]">
                        {bride.birthday}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#FAF6F0] border border-[#D4AF37]/40">
                      <div className="flex items-center gap-2 text-xs font-cinzel text-[#58111A] font-bold uppercase tracking-wider mb-1">
                        <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span>Heart Declaration</span>
                      </div>
                      <p className="font-serif-sub italic text-sm text-[#58111A]">
                        &ldquo;{bride.quote}&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bride Tag Divider */}
              <div className="mt-8 pt-4 border-t border-[#D4AF37]/20">
                <EditorialDivider customText="LOVE · FAITH · THE JOURNEY AHEAD" />
              </div>
            </div>
          )}

          {/* THE GROOM: Reuben Obinna Ogbu */}
          {(activeTab === "both" || activeTab === "groom") && (
            <div className="p-6 sm:p-10 md:p-12 rounded-3xl bg-white border border-[#D4AF37]/30 shadow-xl relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Profile Details (Left on desktop) */}
                <div className="lg:col-span-7 space-y-5 order-2 lg:order-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-cinzel font-bold text-[#D4AF37] tracking-[0.25em] uppercase">
                      The Groom
                    </span>
                    <span className="h-[1px] w-8 bg-[#D4AF37]" />
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#722F37]/10 text-[#722F37] text-xs font-serif-sub font-semibold">
                      <Bookmark className="w-3 h-3 text-[#D4AF37]" />
                      {groom.proverbTag}
                    </span>
                  </div>

                  <h3 className="font-serif-title text-3xl sm:text-4xl text-[#1A1516] leading-tight">
                    Reuben Obinna Ogbu
                  </h3>

                  <p className="font-serif-sub italic text-xl sm:text-2xl text-[#722F37]">
                    A Man Always Building
                  </p>

                  <div className="space-y-4 font-serif-sub text-base sm:text-lg text-[#1A1516]/85 leading-relaxed">
                    <p>{groom.bio}</p>
                    <p>{groom.vision}</p>
                  </div>

                  {/* Birthday & Character Quote */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
                    <div className="p-4 rounded-xl bg-[#FAF6F0] border border-[#D4AF37]/40">
                      <div className="flex items-center gap-2 text-xs font-cinzel text-[#58111A] font-bold uppercase tracking-wider mb-1">
                        <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span>Date of Birth</span>
                      </div>
                      <p className="font-serif-title text-lg text-[#1A1516]">
                        {groom.birthday}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#FAF6F0] border border-[#D4AF37]/40">
                      <div className="flex items-center gap-2 text-xs font-cinzel text-[#58111A] font-bold uppercase tracking-wider mb-1">
                        <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span>Heart Declaration</span>
                      </div>
                      <p className="font-serif-sub italic text-sm text-[#58111A]">
                        &ldquo;{groom.quote}&rdquo;
                      </p>
                    </div>
                  </div>
                </div>

                {/* Photo of Obinna */}
                <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
                  <div className="w-full max-w-sm">
                    <div className="relative p-3 bg-[#FAF6F0] magazine-frame rounded-2xl shadow-xl">
                      <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden">
                        <Image
                          src={groom.image}
                          alt="Reuben Obinna Ogbu - The Groom - Heritage & pride"
                          fill
                          sizes="(max-width: 768px) 100vw, 400px"
                          className="object-cover filter contrast-[1.03] hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#3E0C13]/85 via-transparent to-transparent" />
                        
                        {/* Overlay Captions */}
                        <div className="absolute bottom-4 left-4 right-4 text-center">
                          <span className="text-[10px] uppercase tracking-[0.25em] font-cinzel text-[#F3E5AB] block mb-0.5">
                            Obinna · The Groom
                          </span>
                          <p className="font-serif-title text-xl text-white font-bold">
                            Reuben Obinna Ogbu
                          </p>
                          <p className="font-serif-sub italic text-xs text-[#FAF6F0]/90 mt-1">
                            Heritage & pride
                          </p>
                        </div>
                      </div>

                      {/* Monogram Badge */}
                      <div className="absolute top-5 right-5 px-3 py-1 rounded-full bg-[#58111A] border border-[#D4AF37] text-[10px] font-cinzel text-[#F3E5AB] tracking-widest uppercase shadow">
                        The Groom
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Groom Tag Divider */}
              <div className="mt-8 pt-4 border-t border-[#D4AF37]/20">
                <EditorialDivider customText="LOVE · FAITH · THE JOURNEY AHEAD" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
