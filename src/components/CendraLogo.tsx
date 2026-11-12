"use client";

import React from "react";

interface CendraLogoProps {
  className?: string;
  size?: number;
  variant?: "mark" | "squircle" | "squircle-light";
  animateCursor?: boolean;
}

export const CendraLogo: React.FC<CendraLogoProps> = ({
  className = "",
  size = 32,
  variant = "mark",
  animateCursor = false,
}) => {
  // Vector glyph paths carefully calibrated to match Cendra's exact brand identity
  // ViewBox: 0 0 100 100
  // C-shape: starts at top right, curves around left, exits at bottom right, with rounded terminals
  // Inside: prompt chevron `>` and cursor `_`

  const glyph = (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Cendra Logo"
    >
      {/* Outer C shape with rounded ends and smooth back curvature */}
      <path
        d="M 68 26
           C 68 23.2 65.8 21 63 21
           L 44 21
           C 28 21 16 33.5 16 50
           C 16 66.5 28 79 44 79
           L 63 79
           C 65.8 79 68 76.8 68 74
           C 68 71.2 65.8 69 63 69
           L 44 69
           C 33.5 69 26 60.5 26 50
           C 26 39.5 33.5 31 44 31
           L 63 31
           C 65.8 31 68 28.8 68 26
           Z"
      />

      {/* Terminal prompt chevron: `>` */}
      <path
        d="M 37.5 42
           C 36.4 40.9 34.6 40.9 33.5 42
           C 32.4 43.1 32.4 44.9 33.5 46
           L 38.5 50.5
           L 33.5 55
           C 32.4 56.1 32.4 57.9 33.5 59
           C 34.6 60.1 36.4 60.1 37.5 59
           L 44 52.5
           C 44.8 51.7 44.8 50.3 44 49.5
           Z"
      />

      {/* Terminal cursor: `_` */}
      <rect
        x="47"
        y="55"
        width="11"
        height="4"
        rx="2"
        className={animateCursor ? "animate-cursor-blink" : ""}
      />
    </svg>
  );

  if (variant === "squircle") {
    return (
      <div
        className={`relative inline-flex items-center justify-center rounded-[22%] bg-gradient-to-b from-[#1E2026] to-[#121317] border border-[#2F313B] shadow-xl overflow-hidden ${className}`}
        style={{ width: size, height: size }}
      >
        <div className="absolute inset-0 bg-radial-gradient opacity-80 pointer-events-none" />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[22%] pointer-events-none" />
        <div className="relative text-[#F3EEE5] flex items-center justify-center" style={{ width: size * 0.72, height: size * 0.72 }}>
          {React.cloneElement(glyph, { size: size * 0.72 })}
        </div>
      </div>
    );
  }

  if (variant === "squircle-light") {
    return (
      <div
        className={`relative inline-flex items-center justify-center rounded-[22%] bg-[#F3EEE5] border border-[#E5DFD3] shadow-md overflow-hidden ${className}`}
        style={{ width: size, height: size }}
      >
        <div className="relative text-[#0B0C0F] flex items-center justify-center" style={{ width: size * 0.72, height: size * 0.72 }}>
          {React.cloneElement(glyph, { size: size * 0.72 })}
        </div>
      </div>
    );
  }

  return glyph;
};

export default CendraLogo;

