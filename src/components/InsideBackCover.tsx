"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Phone, MessageCircle, Mail, Sparkles, Book, ArrowUp } from "lucide-react";
import EditorialDivider from "./EditorialDivider";
import { WEDDING_DATA } from "@/data/weddingData";

export default function InsideBackCover() {
  const { contact } = WEDDING_DATA;
  const [closedNotice, setClosedNotice] = useState(false);

  const closeTheMagazine = () => {
    setClosedNotice(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => setClosedNotice(false), 4000);
  };

  return (
    <footer id="contact" className="py-20 md:py-28 bg-[#1A1516] text-[#FAF6F0] relative overflow-hidden">
      {/* Background Vignette and Magazine Watermark */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A1516] via-[#2B080D] to-[#1A1516] opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs sm:text-sm tracking-[0.35em] font-cinzel text-[#D4AF37] uppercase font-semibold mb-2">
            Inside Back Cover / Contact
          </p>
          <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl text-[#FAF6F0] tracking-tight">
            WITH GRATITUDE
          </h2>
          <p className="font-serif-sub italic text-xl sm:text-2xl text-[#F3E5AB] mt-3">
            One love. One faith. One covenant. One forever.
          </p>
          <div className="h-[1px] w-24 bg-[#D4AF37] mx-auto mt-4" />
        </div>

        {/* Content Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-center mb-16">
          {/* Gratitude & Contact Information */}
          <div className="lg:col-span-7 space-y-6">
            <p className="font-serif-sub text-lg sm:text-xl text-[#FAF6F0]/90 leading-relaxed">
              We are grateful to everyone who has been part of our journey, and we look forward to sharing this beautiful moment with you.
            </p>

            {/* Dr. Rubycon Contact Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#2B080D]/90 border border-[#D4AF37]/50 shadow-2xl backdrop-blur-md">
              <span className="text-[10px] uppercase tracking-[0.3em] font-cinzel text-[#D4AF37] block mb-1">
                Liaison & Inquiries
              </span>
              <h3 className="font-serif-title text-2xl sm:text-3xl text-white font-bold mb-1">
                {contact.contactPerson}
              </h3>
              <p className="font-mono text-sm text-[#F3E5AB] mb-4">
                {contact.phone} · {contact.email}
              </p>

              {/* Action Buttons: Call, WhatsApp, Email */}
              <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-[#D4AF37]/20">
                {/* Call */}
                <a
                  href={`tel:${contact.internationalPhone}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#58111A] hover:bg-[#722F37] text-white text-xs font-cinzel tracking-wider uppercase transition-all shadow border border-[#D4AF37]/40"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Call</span>
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/2348162771562?text=${encodeURIComponent(
                    "Hello Dr. Rubycon, I am contacting you regarding OBIDENCE 2026 wedding celebration."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] text-xs font-cinzel tracking-wider uppercase transition-all border border-[#25D366]/40"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${contact.email}?subject=${encodeURIComponent(
                    "OBIDENCE 2026 Wedding Inquiry"
                  )}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#3E0C13] hover:bg-[#58111A] text-[#FAF6F0] text-xs font-cinzel tracking-wider uppercase transition-all border border-[#D4AF37]/30"
                >
                  <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Email</span>
                </a>
              </div>
            </div>

            {/* "Close the magazine" action button */}
            <div className="pt-2">
              <button
                onClick={closeTheMagazine}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A059] text-[#1A1516] font-cinzel text-xs sm:text-sm font-bold tracking-[0.25em] uppercase shadow-2xl hover:shadow-[0_0_25px_rgba(212,175,55,0.6)] transition-all hover:scale-105"
              >
                <Book className="w-4 h-4 text-[#1A1516]" />
                <span>Close the magazine</span>
                <ArrowUp className="w-4 h-4 text-[#1A1516]" />
              </button>

              {closedNotice && (
                <p className="text-xs font-serif-sub italic text-[#F3E5AB] mt-2 animate-in fade-in">
                  Magazine closed with love. Returning to cover...
                </p>
              )}
            </div>
          </div>

          {/* Photo: Evidence & Obinna / Thank you */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm">
              <div className="relative p-3 bg-[#2B080D] magazine-frame-dark rounded-2xl shadow-2xl">
                <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden">
                  <Image
                    src={contact.thankYouImage}
                    alt="Evidence & Obinna - Thank you"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover filter contrast-[1.05] hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <span className="text-[10px] uppercase tracking-[0.25em] font-cinzel text-[#F3E5AB] block mb-1">
                      {contact.closingDate} · {contact.closingLocation}
                    </span>
                    <p className="font-cinzel text-lg tracking-widest text-white font-bold">
                      Evidence & Obinna
                    </p>
                    <p className="font-serif-sub italic text-xl text-[#F3E5AB] mt-0.5">
                      Thank you
                    </p>
                  </div>
                </div>

                <div className="absolute top-5 right-5 p-1.5 rounded-full bg-[#58111A]/90 border border-[#D4AF37]">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final Tagline & Divider */}
        <div className="pt-6 border-t border-[#D4AF37]/20">
          <EditorialDivider customText="LOVE · FAITH · THE JOURNEY AHEAD" light={true} />
        </div>

        {/* Copyright / Footer Signature */}
        <div className="text-center pt-4 text-xs font-sans-clean text-[#FAF6F0]/50 tracking-widest">
          <p>© 2026 OBIDENCE · Evidence Igbunu Ejairu & Dr. Reuben Obinna Ogbu. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
