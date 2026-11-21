import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WelcomeLetter from "@/components/WelcomeLetter";
import LoveStories from "@/components/LoveStories";
import TheCouple from "@/components/TheCouple";
import TheCovenant from "@/components/TheCovenant";
import WhyTheyChoseEachOther from "@/components/WhyTheyChoseEachOther";
import CelebrationDetails from "@/components/CelebrationDetails";
import OrderOfEvents from "@/components/OrderOfEvents";
import GallerySection from "@/components/GallerySection";
import RSVPSection from "@/components/RSVPSection";
import InsideBackCover from "@/components/InsideBackCover";
import AudioPlayer from "@/components/AudioPlayer";

export default function WeddingHome() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FDFBF7] text-[#1A1516] selection:bg-[#722F37] selection:text-[#F3E5AB]">
      {/* Editorial Magazine Top Bar & Navigation */}
      <Navbar />

      {/* Hero Section: The Wedding Issue Cover */}
      <HeroSection />

      {/* Welcome / A Letter From Us + Countdown */}
      <WelcomeLetter />

      {/* Love Stories: Chapters One, Two, Three */}
      <LoveStories />

      {/* The Bride & The Groom Profiles */}
      <TheCouple />

      {/* The Covenant: Two Hearts, One Foundation */}
      <TheCovenant />

      {/* A Little Fun / Why They Chose Each Other */}
      <WhyTheyChoseEachOther />

      {/* The Celebration / Join Us: Events, Dress, Colors, Calendar */}
      <CelebrationDetails />

      {/* The Programme / Order of Events */}
      <OrderOfEvents />

      {/* The Gallery / Portraits of a Journey + Lightbox Modal */}
      <GallerySection />

      {/* The Invitation / RSVP: Interactive Form with WhatsApp trigger */}
      <RSVPSection />

      {/* Inside Back Cover / Contact & Close the Magazine */}
      <InsideBackCover />

      {/* Floating Classical/Romantic Background Music Player */}
      <AudioPlayer />
    </main>
  );
}
