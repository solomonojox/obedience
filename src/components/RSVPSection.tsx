"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { MessageCircle, Check, Send, Heart, Sparkles, Users } from "lucide-react";
import EditorialDivider from "./EditorialDivider";
import { WEDDING_DATA } from "@/data/weddingData";

export default function RSVPSection() {
  const { contact } = WEDDING_DATA;

  const [fullName, setFullName] = useState("");
  const [attendance, setAttendance] = useState("Joyfully accepts");
  const [guestCount, setGuestCount] = useState("1");
  const [eventChoice, setEventChoice] = useState("Traditional Marriage (Jesse, Delta State - 22 Nov 2026)");
  const [note, setNote] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName.trim()) {
      alert("Please enter your full name.");
      return;
    }

    // Celebratory confetti shower with gold and wine colors!
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#D4AF37", "#722F37", "#F3E5AB", "#58111A"],
      });
    } catch {
      // Confetti fallback
    }

    // Build WhatsApp message
    const message = `*RSVP for OBIDENCE 2026 (Evidence & Obinna)*
*Full Name:* ${fullName.trim()}
*Attendance:* ${attendance}
*Number of Guests:* ${guestCount}
*Event:* ${eventChoice}
${note.trim() ? `*Special Note/Wishes:* ${note.trim()}` : ""}

_Sent via OBIDENCE 2026 Wedding Website_`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/2348162771562?text=${encodedMessage}`;

    setSubmitted(true);

    // Open WhatsApp in new tab
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 400);
  };

  return (
    <section id="rsvp" className="py-20 md:py-28 bg-[#FAF6F0] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#58111A]/10 border border-[#722F37]/20 mb-3">
            <Heart className="w-3.5 h-3.5 text-[#58111A] fill-[#58111A]" />
            <span className="text-[10px] sm:text-xs tracking-[0.25em] font-cinzel text-[#58111A] uppercase font-semibold">
              The Invitation / RSVP
            </span>
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl text-[#1A1516] tracking-tight">
            RESERVE YOUR PLACE
          </h2>
          <p className="font-serif-sub italic text-base sm:text-lg text-[#722F37] mt-2">
            Your reply opens in WhatsApp, ready to send.
          </p>
          <div className="h-[1px] w-24 bg-[#D4AF37] mx-auto mt-4" />
        </div>

        {/* RSVP Form Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#D4AF37]/40 shadow-2xl relative overflow-hidden">
          {/* Subtle Corner Ornament */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#D4AF37]/15 to-transparent pointer-events-none" />

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-xs uppercase tracking-[0.2em] font-cinzel text-[#58111A] font-semibold mb-2"
              >
                Full name <span className="text-red-600">*</span>
              </label>
              <input
                id="fullName"
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g. Chief & Dr. Chukwuemeka Adebayo"
                className="w-full px-4 py-3.5 rounded-xl border border-[#D4AF37]/50 bg-[#FDFBF7] text-[#1A1516] text-sm font-sans-clean focus:outline-none focus:ring-2 focus:ring-[#722F37] focus:border-transparent transition-all placeholder:text-[#1A1516]/40"
              />
            </div>

            {/* Attendance Choice */}
            <div>
              <label className="block text-xs uppercase tracking-[0.2em] font-cinzel text-[#58111A] font-semibold mb-2">
                Will you attend? <span className="text-red-600">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label
                  className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                    attendance === "Joyfully accepts"
                      ? "border-[#58111A] bg-[#58111A]/5 ring-1 ring-[#58111A]"
                      : "border-[#D4AF37]/30 bg-[#FDFBF7] hover:border-[#D4AF37]"
                  }`}
                >
                  <input
                    type="radio"
                    name="attendance"
                    value="Joyfully accepts"
                    checked={attendance === "Joyfully accepts"}
                    onChange={(e) => setAttendance(e.target.value)}
                    className="accent-[#58111A]"
                  />
                  <span className="font-serif-sub text-base text-[#1A1516] font-medium">
                    Joyfully accepts
                  </span>
                </label>

                <label
                  className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                    attendance === "Regretfully declines"
                      ? "border-[#58111A] bg-[#58111A]/5 ring-1 ring-[#58111A]"
                      : "border-[#D4AF37]/30 bg-[#FDFBF7] hover:border-[#D4AF37]"
                  }`}
                >
                  <input
                    type="radio"
                    name="attendance"
                    value="Regretfully declines"
                    checked={attendance === "Regretfully declines"}
                    onChange={(e) => setAttendance(e.target.value)}
                    className="accent-[#58111A]"
                  />
                  <span className="font-serif-sub text-base text-[#1A1516] font-medium">
                    Regretfully declines
                  </span>
                </label>
              </div>
            </div>

            {/* Number of Guests */}
            <div>
              <label
                htmlFor="guestCount"
                className="block text-xs uppercase tracking-[0.2em] font-cinzel text-[#58111A] font-semibold mb-2"
              >
                Number of guests (including you)
              </label>
              <select
                id="guestCount"
                value={guestCount}
                onChange={(e) => setGuestCount(e.target.value)}
                className="w-full px-4 py-3.5 rounded-xl border border-[#D4AF37]/50 bg-[#FDFBF7] text-[#1A1516] text-sm font-sans-clean focus:outline-none focus:ring-2 focus:ring-[#722F37] transition-all"
              >
                <option value="1">1 person</option>
                <option value="2">2 persons</option>
                <option value="3">3 persons</option>
                <option value="4">4 persons</option>
                <option value="5+">5+ persons (Family)</option>
              </select>
            </div>

            {/* Event Selection */}
            <div>
              <label
                htmlFor="eventChoice"
                className="block text-xs uppercase tracking-[0.2em] font-cinzel text-[#58111A] font-semibold mb-2"
              >
                Event attending
              </label>
              <select
                id="eventChoice"
                value={eventChoice}
                onChange={(e) => setEventChoice(e.target.value)}
                className="w-full px-4 py-3.5 rounded-xl border border-[#D4AF37]/50 bg-[#FDFBF7] text-[#1A1516] text-sm font-sans-clean focus:outline-none focus:ring-2 focus:ring-[#722F37] transition-all"
              >
                <option value="Traditional Marriage (Jesse, Delta State - 22 Nov 2026)">
                  Traditional Marriage: Sunday, 22 Nov 2026 (Jesse, Delta State)
                </option>
                <option value="Court Marriage (Ikoyi, Lagos - 12 Dec 2026)">
                  Court Marriage: Saturday, 12 Dec 2026 (Ikoyi, Lagos State)
                </option>
                <option value="Both Celebrations">
                  Both Celebrations (Traditional & Court Marriage)
                </option>
              </select>
            </div>

            {/* Optional Personal Note/Wishes */}
            <div>
              <label
                htmlFor="note"
                className="block text-xs uppercase tracking-[0.2em] font-cinzel text-[#58111A] font-semibold mb-2"
              >
                Blessings or message for the couple (Optional)
              </label>
              <textarea
                id="note"
                rows={3}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Share your prayers, goodwill, or love with Evidence and Obinna..."
                className="w-full px-4 py-3 rounded-xl border border-[#D4AF37]/50 bg-[#FDFBF7] text-[#1A1516] text-sm font-sans-clean focus:outline-none focus:ring-2 focus:ring-[#722F37] transition-all placeholder:text-[#1A1516]/40 resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#58111A] hover:bg-[#722F37] text-white text-sm font-cinzel tracking-[0.25em] uppercase transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.01] border border-[#D4AF37]/60 group"
              >
                <MessageCircle className="w-5 h-5 text-[#D4AF37] group-hover:scale-110 transition-transform" />
                <span>Send RSVP</span>
              </button>
            </div>

            {submitted && (
              <p className="text-center text-xs font-serif-sub italic text-green-700 animate-in fade-in">
                Thank you! Your WhatsApp message has been generated.
              </p>
            )}
          </form>
        </div>

        <div className="mt-14">
          <EditorialDivider customText="LOVE · FAITH · THE JOURNEY AHEAD" />
        </div>
      </div>
    </section>
  );
}
