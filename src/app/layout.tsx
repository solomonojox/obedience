import type { Metadata } from "next";
import "./globals.css";
import BackgroundMusic from "@/components/BackgroundMusic";

export const metadata: Metadata = {
  title: "OBIDENCE 2026 | The Wedding Issue | Obinna & Evidence",
  description:
    "Love • Culture • Heritage • Forever. Celebrating the holy union and traditional wedding of Evidence Igbunu Ejairu and Dr. Reuben Obinna Ogbu.",
  keywords: [
    "Obidence 2026",
    "Evidence and Obinna",
    "Wedding",
    "Traditional Marriage Jesse Delta State",
    "Bubu and Bebe",
  ],
  openGraph: {
    title: "OBIDENCE 2026 | Obinna & Evidence Wedding Issue",
    description: "Where two become one, and forever begins. 22 November 2026.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=Montserrat:wght@200;300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,900;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#FDFBF7] text-[#1A1516] antialiased selection:bg-[#722F37] selection:text-[#F3E5AB]">
        <BackgroundMusic />
        {children}
      </body>
    </html>
  );
}
