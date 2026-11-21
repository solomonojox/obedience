"use client";

import React from "react";
import { Clock, Sparkles, ScrollText, CheckCircle } from "lucide-react";
import EditorialDivider from "./EditorialDivider";
import { WEDDING_DATA } from "@/data/weddingData";

export default function OrderOfEvents() {
  const { orderOfEvents } = WEDDING_DATA;

  return (
    <section id="programme" className="py-20 md:py-28 bg-[#FAF6F0] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#58111A]/10 border border-[#722F37]/20 mb-3">
            <ScrollText className="w-3.5 h-3.5 text-[#58111A]" />
            <span className="text-[10px] sm:text-xs tracking-[0.25em] font-cinzel text-[#58111A] uppercase font-semibold">
              The Programme / Order of Events
            </span>
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl text-[#1A1516] tracking-tight">
            THE ORDER OF THE DAY
          </h2>
          <p className="font-serif-sub italic text-xl sm:text-2xl text-[#722F37] mt-2">
            From the first welcome to the final blessing.
          </p>
          <div className="h-[1px] w-24 bg-[#D4AF37] mx-auto mt-4" />
        </div>

        {/* Timeline List Layout */}
        <div className="relative">
          {/* Vertical gold center line on desktop */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-[1px] bg-gradient-to-b from-[#D4AF37]/20 via-[#D4AF37] to-[#D4AF37]/20 -translate-x-1/2" />

          <div className="space-y-6 md:space-y-8">
            {orderOfEvents.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content Card */}
                  <div
                    className={`w-full md:w-1/2 ${
                      isEven ? "md:pl-10" : "md:pr-10"
                    }`}
                  >
                    <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#D4AF37]/30 shadow-md hover:shadow-lg hover:border-[#58111A] transition-all group">
                      <div className="flex items-center justify-between gap-3 mb-2">
                        <span className="text-[10px] uppercase tracking-widest font-cinzel px-2.5 py-0.5 rounded-full bg-[#58111A]/10 text-[#58111A] font-semibold">
                          {item.category}
                        </span>
                        <span className="font-cinzel text-xs text-[#D4AF37] font-bold">
                          Step {item.step}
                        </span>
                      </div>
                      <h4 className="font-serif-title text-lg sm:text-xl text-[#1A1516] group-hover:text-[#58111A] transition-colors leading-snug">
                        {item.title}
                      </h4>
                    </div>
                  </div>

                  {/* Center Node Badge */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#58111A] border-2 border-[#D4AF37] items-center justify-center text-[#F3E5AB] font-cinzel text-xs font-bold shadow-md z-10">
                    {item.step}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16">
          <EditorialDivider customText="LOVE · FAITH · THE JOURNEY AHEAD" />
        </div>
      </div>
    </section>
  );
}
