import React from "react";

interface EditorialDividerProps {
  customText?: string;
  light?: boolean;
}

export default function EditorialDivider({
  customText = "LOVE · FAITH · THE JOURNEY AHEAD",
  light = false,
}: EditorialDividerProps) {
  return (
    <div className="w-full py-8 md:py-12 flex flex-col items-center justify-center">
      <div className="flex items-center justify-center gap-3 w-full max-w-2xl px-6">
        {/* Left gold hairline */}
        <div
          className={`h-[1px] flex-1 ${
            light
              ? "bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-[#D4AF37]"
              : "bg-gradient-to-r from-transparent via-[#722F37]/30 to-[#D4AF37]/60"
          }`}
        />

        {/* Center decorative motif */}
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37]" />
          <span
            className={`text-[10px] md:text-xs tracking-[0.3em] font-cinzel font-semibold uppercase whitespace-nowrap ${
              light ? "text-[#F3E5AB]" : "text-[#722F37]"
            }`}
          >
            {customText}
          </span>
          <span className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37]" />
        </div>

        {/* Right gold hairline */}
        <div
          className={`h-[1px] flex-1 ${
            light
              ? "bg-gradient-to-l from-transparent via-[#D4AF37]/50 to-[#D4AF37]"
              : "bg-gradient-to-l from-transparent via-[#722F37]/30 to-[#D4AF37]/60"
          }`}
        />
      </div>
    </div>
  );
}
