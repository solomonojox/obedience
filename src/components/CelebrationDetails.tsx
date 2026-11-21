"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Calendar,
  Clock,
  MapPin,
  Navigation,
  CalendarPlus,
  Share2,
  Check,
  Sparkles,
  Shirt,
  Palette,
} from "lucide-react";
import EditorialDivider from "./EditorialDivider";
import { WEDDING_DATA } from "@/data/weddingData";

export default function CelebrationDetails() {
  const { celebration } = WEDDING_DATA;
  const [copied, setCopied] = useState(false);
  const [calendarMenuOpen, setCalendarMenuOpen] = useState<number | null>(null);

  // Generate .ics calendar download
  const downloadIcs = (eventIndex: number) => {
    const ev = celebration.events[eventIndex];
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Obidence2026//Wedding//EN
BEGIN:VEVENT
UID:obidence-2026-${eventIndex}@wedding.com
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, "").split(".")[0]}Z
DTSTART:${ev.calendarStart}
DTEND:${ev.calendarEnd}
SUMMARY:${ev.calendarTitle}
DESCRIPTION:Celebrating the wedding of Evidence Igbunu Ejairu and Dr. Reuben Obinna Ogbu. Attire: Wine Red & Gold.
LOCATION:${ev.address}
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `OBIDENCE-2026-${ev.title.replace(/\s+/g, "_")}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setCalendarMenuOpen(null);
  };

  // Google Calendar URL generator
  const getGoogleCalendarUrl = (eventIndex: number) => {
    const ev = celebration.events[eventIndex];
    const title = encodeURIComponent(ev.calendarTitle);
    const details = encodeURIComponent(
      `Celebrating the holy union and wedding of Evidence Igbunu Ejairu and Dr. Reuben Obinna Ogbu. Colour of the day: Wine Red and Gold.`
    );
    const location = encodeURIComponent(ev.address);
    const dates = `${ev.calendarStart}/${ev.calendarEnd}`;
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
  };

  // Share action
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "OBIDENCE 2026 | Obinna & Evidence Wedding",
          text: "You are cordially invited to celebrate the wedding of Evidence & Obinna (OBIDENCE 2026). Traditional Marriage: 22 November 2026.",
          url: window.location.href,
        });
      } catch {
        // Share dismissed
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <section id="celebration" className="py-20 md:py-28 bg-[#FDFBF7] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs sm:text-sm tracking-[0.3em] font-cinzel text-[#722F37] font-semibold uppercase mb-2">
            {celebration.title}
          </p>
          <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl text-[#1A1516] tracking-tight">
            JOIN US / <span className="italic font-serif-sub text-[#722F37]">SAVE THE DATE</span>
          </h2>
          <div className="h-[1px] w-24 bg-[#D4AF37] mx-auto mt-4" />
        </div>

        {/* Wedding Events Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-16">
          {celebration.events.map((ev, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 rounded-3xl bg-white border border-[#D4AF37]/40 shadow-xl flex flex-col justify-between relative group hover:border-[#D4AF37] transition-all"
            >
              {/* Event Header */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-3 pb-3 border-b border-[#D4AF37]/20">
                  <span className="text-[10px] sm:text-xs font-cinzel uppercase tracking-[0.25em] text-[#D4AF37] font-bold">
                    {ev.badge}
                  </span>
                  <span className="text-xs font-serif-sub italic text-[#722F37] bg-[#722F37]/10 px-3 py-0.5 rounded-full">
                    {ev.timeHeader}
                  </span>
                </div>

                <h3 className="font-serif-title text-2xl sm:text-3xl text-[#58111A] mb-4">
                  {ev.title}
                </h3>

                {/* Event Details */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-xs uppercase font-cinzel tracking-wider text-[#1A1516]/60 block">
                        Date
                      </span>
                      <p className="font-serif-title text-base sm:text-lg text-[#1A1516] font-medium">
                        {ev.date}
                      </p>
                      {ev.altDateNote && (
                        <p className="text-xs font-serif-sub italic text-[#722F37]">
                          {ev.altDateNote}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-xs uppercase font-cinzel tracking-wider text-[#1A1516]/60 block">
                        Time
                      </span>
                      <p className="font-serif-title text-base sm:text-lg text-[#1A1516] font-medium">
                        {ev.time}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-xs uppercase font-cinzel tracking-wider text-[#1A1516]/60 block">
                        Venue
                      </span>
                      <p className="font-serif-title text-base sm:text-lg text-[#1A1516] font-medium">
                        {ev.venue}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons: Directions, Add to Calendar, Share */}
              <div className="mt-8 pt-6 border-t border-[#D4AF37]/20 flex flex-wrap items-center gap-3">
                {/* Directions Button */}
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    ev.address
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#58111A] text-white hover:bg-[#722F37] text-xs font-cinzel tracking-wider uppercase transition-colors shadow-sm"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Directions</span>
                </a>

                {/* Add to Calendar Dropdown */}
                <div className="relative">
                  <button
                    onClick={() =>
                      setCalendarMenuOpen(calendarMenuOpen === idx ? null : idx)
                    }
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAF6F0] hover:bg-[#FAF6F0]/80 text-[#58111A] border border-[#D4AF37]/50 text-xs font-cinzel tracking-wider uppercase transition-colors"
                  >
                    <CalendarPlus className="w-3.5 h-3.5 text-[#58111A]" />
                    <span>Add to Calendar</span>
                  </button>

                  {calendarMenuOpen === idx && (
                    <div className="absolute left-0 bottom-full mb-2 w-48 bg-white border border-[#D4AF37]/40 rounded-xl shadow-xl z-30 p-2 text-xs font-sans-clean animate-in fade-in zoom-in-95">
                      <a
                        href={getGoogleCalendarUrl(idx)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-3 py-2 text-[#1A1516] hover:bg-[#FAF6F0] rounded-lg transition-colors"
                        onClick={() => setCalendarMenuOpen(null)}
                      >
                        Google Calendar
                      </a>
                      <button
                        onClick={() => downloadIcs(idx)}
                        className="w-full text-left px-3 py-2 text-[#1A1516] hover:bg-[#FAF6F0] rounded-lg transition-colors"
                      >
                        Apple / Outlook (.ics)
                      </button>
                    </div>
                  )}
                </div>

                {/* Share Button */}
                <button
                  onClick={handleShare}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-transparent hover:bg-[#FAF6F0] text-[#722F37] border border-[#722F37]/30 text-xs font-cinzel tracking-wider uppercase transition-colors ml-auto"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-600" />
                      <span className="text-green-600">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-3.5 h-3.5 text-[#722F37]" />
                      <span>Share</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Dress Code & Colour of the Day */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Dress Code */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#D4AF37]/40 shadow-lg flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#58111A]/10 flex items-center justify-center flex-shrink-0 text-[#58111A]">
              <Shirt className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-cinzel uppercase tracking-[0.25em] text-[#D4AF37] font-semibold block mb-1">
                Attire Guidance
              </span>
              <h4 className="font-serif-title text-xl text-[#58111A]">Dress</h4>
              <p className="font-serif-sub italic text-lg sm:text-xl text-[#1A1516]/90 mt-1">
                {celebration.dressCode}
              </p>
            </div>
          </div>

          {/* Colour of the Day */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#D4AF37]/40 shadow-lg flex flex-col justify-between">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0 text-[#722F37]">
                <Palette className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-cinzel uppercase tracking-[0.25em] text-[#D4AF37] font-semibold block mb-1">
                  Wedding Palette
                </span>
                <h4 className="font-serif-title text-xl text-[#58111A]">
                  Colour of the day
                </h4>
                <p className="font-serif-sub font-semibold text-lg sm:text-xl text-[#58111A] mt-1">
                  Wine Red and Gold
                </p>
              </div>
            </div>

            {/* Visual Color Swatches */}
            <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-[#D4AF37]/20">
              {celebration.colors.map((c, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-2 rounded-xl bg-[#FAF6F0] border border-[#D4AF37]/30"
                >
                  <span
                    className="w-8 h-8 rounded-full shadow-inner border border-black/10 flex-shrink-0"
                    style={{ backgroundColor: c.hex }}
                  />
                  <div>
                    <span className="font-cinzel text-xs font-bold text-[#1A1516] block">
                      {c.name}
                    </span>
                    <span className="text-[10px] font-mono text-[#1A1516]/60">
                      {c.hex}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Editorial Photo: Evidence & Obinna / See you there */}
        <div className="flex flex-col items-center justify-center">
          <div className="w-full max-w-lg">
            <div className="relative p-3 bg-white magazine-frame rounded-2xl shadow-xl">
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden">
                <Image
                  src={celebration.seeYouImage}
                  alt="Evidence & Obinna - See you there"
                  fill
                  sizes="(max-width: 768px) 100vw, 550px"
                  className="object-cover filter contrast-[1.03] hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <span className="text-[10px] uppercase tracking-[0.25em] font-cinzel text-[#F3E5AB] block mb-0.5">
                    Evidence & Obinna
                  </span>
                  <p className="font-serif-title text-2xl text-white font-bold">
                    See you there
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
