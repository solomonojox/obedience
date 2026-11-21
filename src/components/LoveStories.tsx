"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, Heart, Compass, BookOpen } from "lucide-react";
import EditorialDivider from "./EditorialDivider";
import { WEDDING_DATA } from "@/data/weddingData";

export default function LoveStories() {
  const { loveStories } = WEDDING_DATA;

  return (
    <section id="stories" className="py-20 md:py-28 bg-[#FAF6F0] relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#722F37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#58111A]/10 border border-[#722F37]/20 mb-3">
            <BookOpen className="w-3.5 h-3.5 text-[#58111A]" />
            <span className="text-[10px] sm:text-xs tracking-[0.25em] font-cinzel text-[#58111A] uppercase font-semibold">
              The Chronicle of Two Hearts
            </span>
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl text-[#1A1516] tracking-tight">
            LOVE STORIES / <span className="italic font-serif-sub text-[#722F37]">THE MEMOIRS</span>
          </h2>
          <div className="h-[1px] w-24 bg-[#D4AF37] mx-auto mt-4" />
        </div>

        {/* =========================================================================
            CHAPTER ONE: The Beginning
           ========================================================================= */}
        <div className="mb-20 md:mb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-center">
            {/* Story Text */}
            <div className="lg:col-span-7 space-y-5 order-2 lg:order-1">
              <div className="flex items-center gap-3">
                <span className="text-xs font-cinzel font-bold text-[#D4AF37] tracking-[0.25em] uppercase">
                  Chapter One
                </span>
                <span className="h-[1px] w-8 bg-[#D4AF37]" />
                <span className="font-serif-sub italic text-sm text-[#722F37]">
                  The Beginning
                </span>
              </div>

              <h3 className="font-serif-title text-2xl sm:text-3xl md:text-4xl text-[#1A1516] leading-tight">
                The Most Unexpected Beginning
              </h3>

              <p className="font-cinzel text-xs sm:text-sm tracking-[0.2em] text-[#58111A] font-semibold uppercase">
                From NYSC to forever.
              </p>

              <div className="space-y-4 font-serif-sub text-base sm:text-lg text-[#1A1516]/85 leading-relaxed">
                <p>
                  Every love story has a beginning. Ours began in an unexpected way, during the National Youth Service Corps programme.
                </p>
                <p>
                  An encounter between a doctor and a patient gradually became something more. What began as a professional interaction unfolded into a connection neither of us could have anticipated.
                </p>
                <p className="p-4 rounded-xl bg-[#FDFBF7] border-l-4 border-[#58111A] shadow-sm italic text-[#58111A]">
                  Then came: <strong className="not-italic font-cinzel text-[#3E0C13]">14 April 2025</strong> — our very own Valentine’s Day. A friendship was taking shape, growing deeper, and opening the door to a love that would change how we imagined the future.
                </p>
                <p>
                  Looking back, we find something beautiful in that simple beginning: an unexpected meeting, two lives crossing, and the quiet discovery of something meaningful.
                </p>
              </div>

              {/* Date Stamp Box */}
              <div className="pt-2">
                <div className="inline-block p-4 rounded-xl bg-white border border-[#D4AF37]/50 shadow-md">
                  <span className="font-cinzel text-lg sm:text-xl font-bold text-[#58111A] block">
                    14 April 2025
                  </span>
                  <span className="text-xs font-serif-sub italic text-[#722F37]">
                    The day our story found its beginning.
                  </span>
                </div>
              </div>
            </div>

            {/* Photo Column */}
            <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
              <div className="w-full max-w-md">
                <div className="relative p-3 bg-white magazine-frame rounded-2xl shadow-xl">
                  <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden">
                    <Image
                      src={loveStories[0].image}
                      alt="Evidence & Obinna - A journey of love"
                      fill
                      sizes="(max-width: 768px) 100vw, 450px"
                      className="object-cover filter contrast-[1.03] hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-center">
                      <span className="text-[10px] uppercase tracking-[0.25em] font-cinzel text-[#F3E5AB]">
                        Evidence & Obinna
                      </span>
                      <p className="font-serif-sub italic text-sm text-white">
                        A journey of love
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <EditorialDivider />
        </div>

        {/* =========================================================================
            CHAPTER TWO: Bubu & Bebe
           ========================================================================= */}
        <div className="mb-20 md:mb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-center">
            {/* Photo Column (First on desktop for alternating rhythm) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md">
                <div className="relative p-3 bg-white magazine-frame rounded-2xl shadow-xl">
                  <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden">
                    <Image
                      src={loveStories[1].image}
                      alt="Bubu & Bebe - Pure joy Together"
                      fill
                      sizes="(max-width: 768px) 100vw, 450px"
                      className="object-cover filter contrast-[1.03] hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-center">
                      <span className="text-[10px] uppercase tracking-[0.25em] font-cinzel text-[#F3E5AB]">
                        Bubu & Bebe
                      </span>
                      <p className="font-serif-sub italic text-sm text-white">
                        Pure joy · Together
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Story Text */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <span className="text-xs font-cinzel font-bold text-[#D4AF37] tracking-[0.25em] uppercase">
                  Chapter Two
                </span>
                <span className="h-[1px] w-8 bg-[#D4AF37]" />
                <span className="font-serif-sub italic text-sm text-[#722F37]">
                  Bubu & Bebe
                </span>
              </div>

              <h3 className="font-serif-title text-2xl sm:text-3xl md:text-4xl text-[#1A1516] leading-tight">
                Two Names, One Heart
              </h3>

              <p className="font-cinzel text-xs sm:text-sm tracking-[0.2em] text-[#58111A] font-semibold uppercase">
                Friendship, faith and a little sweet possessiveness.
              </p>

              <div className="space-y-4 font-serif-sub text-base sm:text-lg text-[#1A1516]/85 leading-relaxed">
                <p>
                  Somewhere along the line, the names came. She called him <span className="font-semibold text-[#58111A]">Bubu</span>; he called her <span className="font-semibold text-[#58111A]">Bebe</span>, and, to the quiet dismay of a few admirers, the names stuck.
                </p>
                <p>
                  Beneath the teasing and the laughter was something far more meaningful: faithfulness, trust, and an unspoken commitment to choose one another.
                </p>
                <p>
                  They were not merely falling in love. They were learning each other, and building a bond rooted in friendship, faith and understanding.
                </p>
              </div>

              {/* Callout Quote Card */}
              <div className="p-5 rounded-2xl bg-[#58111A] text-[#FAF6F0] border border-[#D4AF37]/40 shadow-lg">
                <div className="flex items-center gap-2 mb-2 text-[#F3E5AB]">
                  <Heart className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                  <span className="font-cinzel text-xs uppercase tracking-widest">
                    Bubu & Bebe
                  </span>
                </div>
                <p className="font-serif-sub italic text-lg sm:text-xl text-[#F3E5AB]">
                  &ldquo;Bubu found joy in Bebe. Bebe found comfort in Bubu.&rdquo;
                </p>
              </div>
            </div>
          </div>

          <EditorialDivider />
        </div>

        {/* =========================================================================
            CHAPTER THREE: The Decision
           ========================================================================= */}
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-center">
            {/* Story Text */}
            <div className="lg:col-span-7 space-y-5 order-2 lg:order-1">
              <div className="flex items-center gap-3">
                <span className="text-xs font-cinzel font-bold text-[#D4AF37] tracking-[0.25em] uppercase">
                  Chapter Three
                </span>
                <span className="h-[1px] w-8 bg-[#D4AF37]" />
                <span className="font-serif-sub italic text-sm text-[#722F37]">
                  The Decision
                </span>
              </div>

              <h3 className="font-serif-title text-2xl sm:text-3xl md:text-4xl text-[#1A1516] leading-tight">
                Choosing Forever
              </h3>

              <p className="font-cinzel text-xs sm:text-sm tracking-[0.2em] text-[#58111A] font-semibold uppercase">
                From a beautiful encounter to a lifelong covenant.
              </p>

              <div className="space-y-4 font-serif-sub text-base sm:text-lg text-[#1A1516]/85 leading-relaxed">
                <p>
                  In time, they saw that what they shared was worth more than sweet names and butterflies. It was worth building upon.
                </p>
                <p>
                  Love, they discovered, is finding someone with whom you will build a home, share responsibilities, grow through disagreements, and keep choosing each other when the seasons change.
                </p>
                <p className="font-medium text-[#58111A]">
                  On 22 November 2026, before their families, they will honour their heritage and their union.
                </p>
              </div>

              {/* Timeline Journey stamp */}
              <div className="pt-2">
                <div className="p-4 rounded-xl bg-white border border-[#D4AF37]/50 shadow-md">
                  <div className="flex items-center gap-2 text-xs font-cinzel font-bold text-[#58111A] tracking-wider mb-1">
                    <span>14 April 2025</span>
                    <span className="text-[#D4AF37]">→</span>
                    <span>22 November 2026</span>
                  </div>
                  <p className="text-xs sm:text-sm font-serif-sub italic text-[#722F37]">
                    &ldquo;The sweetest part is not how it began, but the years still to be written.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Photo Column */}
            <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
              <div className="w-full max-w-md">
                <div className="relative p-3 bg-white magazine-frame rounded-2xl shadow-xl">
                  <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden">
                    <Image
                      src={loveStories[2].image}
                      alt="The proposal - She said yes - Evidence & Obinna - Forever begins"
                      fill
                      sizes="(max-width: 768px) 100vw, 450px"
                      className="object-cover filter contrast-[1.03] hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-center">
                      <span className="text-[10px] uppercase tracking-[0.25em] font-cinzel text-[#F3E5AB] block mb-1">
                        The proposal · She said yes
                      </span>
                      <p className="font-cinzel text-base tracking-widest text-white font-bold">
                        Evidence & Obinna
                      </p>
                      <p className="font-serif-sub italic text-sm text-[#F3E5AB]">
                        Forever begins
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <EditorialDivider />
        </div>
      </div>
    </section>
  );
}
