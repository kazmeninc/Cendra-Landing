"use client";

import React, { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CendraLogo } from "./CendraLogo";
import DesktopAppPreview from "./DesktopAppPreview";
import {
  Download,
  Terminal,
  ArrowRight,
  Copy,
  Check,
  Shield,
  Zap,
  Sparkles,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  // Guarantee page loads at top
  useEffect(() => {
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      window.scrollTo(0, 0);
    }
  }, []);

  const copyBrewCommand = () => {
    navigator.clipboard.writeText("brew install --cask cendra");
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReducedMotion) return;

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      tl.from(".hero-logo-mark", {
        opacity: 0,
        y: 16,
        scale: 0.9,
        duration: 0.6,
        ease: "back.out(1.4)",
      })
        .from(
          ".hero-eyebrow",
          { opacity: 0, y: 12, duration: 0.5 },
          "-=0.35"
        )
        .from(
          ".hero-headline-line",
          {
            opacity: 0,
            y: 28,
            duration: 0.75,
            stagger: 0.1,
            ease: "cubic-bezier(0.16, 1, 0.3, 1)",
          },
          "-=0.3"
        )
        .from(
          ".hero-sub",
          { opacity: 0, y: 15, duration: 0.6 },
          "-=0.4"
        )
        .from(
          ".hero-actions",
          { opacity: 0, y: 12, duration: 0.55 },
          "-=0.35"
        )
        .from(
          ".hero-preview-window",
          {
            opacity: 0,
            y: 40,
            duration: 0.85,
            ease: "power3.out",
          },
          "-=0.3"
        );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="product-showcase"
      className="relative pt-24 pb-14 md:pt-32 md:pb-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Lighting Aura & Tech Grid */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-b from-[#F3EEE5]/10 via-[#F3EEE5]/5 to-transparent blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-tech-grid opacity-35 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_70%,transparent_100%)]" />
      </div>

      <div className="w-full max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Brand Monogram Header with subtle hover lift */}
        <div className="hero-logo-mark mb-5 group/logo">
          <div className="p-3.5 rounded-2xl bg-gradient-to-b from-[#1C1D22] to-[#121316] border border-[#2B2C32] shadow-[0_0_35px_rgba(243,238,229,0.08)] group-hover/logo:scale-105 group-hover/logo:border-[#3A3B45] transition-all duration-300">
            <CendraLogo size={46} variant="mark" animateCursor />
          </div>
        </div>

        {/* Eyebrow / Technical Classification */}
        <div className="hero-eyebrow inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-[#2B2C32] bg-[#141519]/80 backdrop-blur-md mb-5 shadow-sm hover:border-[#3A3B45] transition-colors">
          <span className="w-2 h-2 rounded-full bg-[#56B88A] animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-widest text-[#A6A39C]">
            SSH CLIENT · DEVELOPER TOOLS
          </span>
          <span className="text-[#3A3B42]">|</span>
          <span className="font-mono text-[11px] text-[#74747A]">v1.4.2 STABLE</span>
        </div>

        {/* Brand Headline with Masked Inset Entrance */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#F3EEE5] uppercase max-w-4xl leading-[1.06] mb-5 select-none">
          <span className="hero-headline-line block overflow-hidden pb-1">
            YOUR INFRASTRUCTURE,
          </span>
          <span className="hero-headline-line block overflow-hidden text-[#A6A39C]">
            ONE CENTRE.
          </span>
        </h1>

        {/* Supporting Statement */}
        <p className="hero-sub text-base sm:text-lg text-[#A6A39C] max-w-2xl font-normal leading-relaxed mb-6">
          A focused workspace for every server, connection and terminal. Minimal,
          uncompromisingly technical, and engineered for quiet developer flow.
        </p>

        {/* Primary Call to Actions */}
        <div className="hero-actions flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-8 w-full max-w-md">
          <a
            href="#download"
            className="btn-pressable w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-[#F3EEE5] text-[#0B0C0F] font-semibold text-sm hover:bg-[#FAF7F2] shadow-[0_0_35px_rgba(243,238,229,0.2)] hover:scale-[1.02] transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Download for macOS</span>
          </a>

          <a
            href="#interactive-story"
            className="btn-pressable w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-[#141519] border border-[#2B2C32] hover:border-[#3A3B42] text-[#F3EEE5] font-medium text-sm transition-all hover:bg-[#1A1B20] hover:scale-[1.02]"
          >
            <span>Explore Cendra</span>
            <ArrowRight className="w-4 h-4 text-[#74747A]" />
          </a>
        </div>

        {/* Quick Install Bar (Homebrew snippet with 1-click copy) */}
        <div className="hero-actions inline-flex items-center space-x-3 px-4 py-2 rounded-lg bg-[#111216] border border-[#25262C] hover:border-[#33353F] font-mono text-xs text-[#A6A39C] mb-10 transition-colors shadow-sm">
          <Terminal className="w-3.5 h-3.5 text-[#56B88A]" />
          <span className="select-all">brew install --cask cendra</span>
          <button
            onClick={copyBrewCommand}
            className="p-1 rounded hover:bg-[#1E2026] text-[#74747A] hover:text-[#F3EEE5] transition-colors"
            title="Copy command to clipboard"
            aria-label="Copy Homebrew install command"
          >
            {copied ? (
              <Check className="w-3.5 h-3.5 text-[#56B88A]" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
          </button>
        </div>

        {/* Desktop Application Showcase Centerpiece */}
        <div className="hero-preview-window w-full max-w-5xl mx-auto">
          <DesktopAppPreview />
        </div>
      </div>
    </section>
  );
};

export default Hero;
