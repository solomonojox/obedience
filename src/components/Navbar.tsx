"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Heart, Calendar } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Welcome", href: "#welcome" },
    { name: "Love Stories", href: "#stories" },
    { name: "Couple", href: "#couple" },
    { name: "Covenant", href: "#covenant" },
    { name: "Why Us", href: "#why-us" },
    { name: "Celebration", href: "#celebration" },
    { name: "Prog.", href: "#programme" },
    { name: "Gallery", href: "#gallery" },
    { name: "RSVP", href: "#rsvp" },
  ];

  return (
    <>
      {/* Top Editorial Magazine Header Ribbon */}
      <div className="bg-[#3E0C13] text-[#FAF6F0] py-2 px-4 text-xs font-sans-clean tracking-widest border-b border-[#D4AF37]/30">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="hidden sm:inline font-cinzel text-[#D4AF37] text-[10px] uppercase">
            Special Collector&apos;s Edition • Vol. 1
          </span>
          <div className="flex items-center justify-center gap-2 mx-auto sm:mx-0 text-center font-serif-sub italic">
            <span>Evidence & Obinna</span>
            <span className="text-[#D4AF37]">•</span>
            <span className="font-semibold not-italic font-cinzel text-[#F3E5AB]">OBIDENCE 2026</span>
            <span className="text-[#D4AF37]">•</span>
            <span>22 November 2026</span>
          </div>
          <div className="hidden sm:flex items-center gap-1 text-[11px] text-[#D4AF37] font-cinzel">
            <Calendar className="w-3.5 h-3.5" />
            <span>Jesse, Delta State</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#FDFBF7]/95 backdrop-blur-md shadow-md py-3 border-b border-[#D4AF37]/30"
            : "bg-[#FDFBF7] py-4 border-b border-[#722F37]/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#"
            className="flex flex-col group text-left"
          >
            <span className="font-cinzel text-xl sm:text-2xl font-bold tracking-[0.2em] text-[#58111A] group-hover:text-[#722F37] transition-colors">
              OBIDENCE
            </span>
            <span className="text-[9px] font-sans-clean uppercase tracking-[0.35em] text-[#D4AF37] -mt-0.5">
              2026 • The Wedding Issue
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-[0.18em] font-sans-clean font-medium text-[#1A1516]/80 hover:text-[#58111A] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#D4AF37] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action: RSVP Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#rsvp"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#58111A] hover:bg-[#722F37] text-[#FAF6F0] text-xs font-cinzel tracking-widest uppercase transition-all duration-300 shadow-sm hover:shadow hover:scale-105 border border-[#D4AF37]/50"
            >
              <Heart className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]" />
              <span>RSVP Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#58111A] hover:text-[#722F37] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FDFBF7] border-b border-[#D4AF37]/30 px-6 py-6 shadow-xl animate-in fade-in slide-in-from-top duration-300">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm uppercase tracking-widest font-sans-clean font-medium text-[#1A1516] hover:text-[#58111A] py-1 border-b border-[#722F37]/10"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2">
                <a
                  href="#rsvp"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#58111A] text-[#FAF6F0] text-xs font-cinzel tracking-widest uppercase shadow border border-[#D4AF37]/50"
                >
                  <Heart className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
                  <span>RSVP Now</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
