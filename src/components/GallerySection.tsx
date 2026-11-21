"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Camera, X, ChevronLeft, ChevronRight, Maximize2, Sparkles } from "lucide-react";
import { WEDDING_DATA, PhotoItem } from "@/data/weddingData";

export default function GallerySection() {
  const { gallery } = WEDDING_DATA;
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const nextPhoto = useCallback(() => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) =>
      prev === null ? 0 : (prev + 1) % gallery.length
    );
  }, [gallery.length, selectedPhotoIndex]);

  const prevPhoto = useCallback(() => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) =>
      prev === null ? 0 : (prev - 1 + gallery.length) % gallery.length
    );
  }, [gallery.length, selectedPhotoIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextPhoto();
      if (e.key === "ArrowLeft") prevPhoto();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhotoIndex, nextPhoto, prevPhoto]);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#FDFBF7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#58111A]/10 border border-[#722F37]/20 mb-3">
            <Camera className="w-3.5 h-3.5 text-[#58111A]" />
            <span className="text-[10px] sm:text-xs tracking-[0.25em] font-cinzel text-[#58111A] uppercase font-semibold">
              The Gallery / Portraits of a Journey
            </span>
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl text-[#1A1516] tracking-tight">
            MOMENTS WORTH KEEPING
          </h2>
          <p className="font-serif-sub italic text-base sm:text-lg text-[#722F37] mt-2">
            Tap a photograph to enlarge.
          </p>
          <div className="h-[1px] w-24 bg-[#D4AF37] mx-auto mt-4" />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {gallery.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(index)}
              className="cursor-pointer group relative p-3 bg-white magazine-frame rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-black/5">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover filter contrast-[1.03] group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Dark Vignette & Hover Reveal */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

                {/* Enlarge Icon Cue */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#3E0C13]/80 border border-[#D4AF37]/60 flex items-center justify-center text-[#F3E5AB] opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-110 duration-300">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Bottom Caption Overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <span className="text-[10px] uppercase tracking-[0.25em] font-cinzel text-[#F3E5AB] block mb-0.5">
                    Evidence & Obinna
                  </span>
                  <p className="font-serif-title text-base sm:text-lg text-white font-bold">
                    {photo.caption}
                  </p>
                  {photo.subCaption && (
                    <p className="font-serif-sub italic text-xs text-[#FAF6F0]/80 mt-0.5">
                      {photo.subCaption}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      {selectedPhotoIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            aria-label="Close enlarged photo"
            className="absolute top-5 right-5 sm:top-8 sm:right-8 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left arrow */}
          <button
            onClick={prevPhoto}
            aria-label="Previous photo"
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-[#58111A]/80 hover:bg-[#722F37] text-[#F3E5AB] border border-[#D4AF37]/50 transition-all hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right arrow */}
          <button
            onClick={nextPhoto}
            aria-label="Next photo"
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-[#58111A]/80 hover:bg-[#722F37] text-[#F3E5AB] border border-[#D4AF37]/50 transition-all hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Content */}
          <div className="relative max-w-4xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center">
            <div className="relative w-full h-[70vh] sm:h-[75vh]">
              <Image
                src={gallery[selectedPhotoIndex].src}
                alt={gallery[selectedPhotoIndex].alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>

            {/* Captions */}
            <div className="mt-4 text-center text-white">
              <span className="text-xs uppercase tracking-[0.25em] font-cinzel text-[#D4AF37] block mb-1">
                Evidence & Obinna · {selectedPhotoIndex + 1} of {gallery.length}
              </span>
              <h3 className="font-serif-title text-xl sm:text-2xl text-white">
                {gallery[selectedPhotoIndex].caption}
              </h3>
              {gallery[selectedPhotoIndex].subCaption && (
                <p className="font-serif-sub italic text-sm text-[#F3E5AB] mt-1">
                  {gallery[selectedPhotoIndex].subCaption}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
