"use client";

import React, { useState } from "react";
import { Download, Terminal, Copy, Check, Apple, Monitor, Laptop, ArrowRight } from "lucide-react";
import { CendraLogo } from "./CendraLogo";
import SpotlightCard from "./SpotlightCard";
import ScrollReveal from "./ScrollReveal";

export const ConversionSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyBrewCommand = () => {
    navigator.clipboard.writeText("brew install --cask cendra");
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section
      id="download"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#0E0F14] border-t border-[#1C1D22] relative overflow-hidden text-center"
    >
      {/* Background Subtle Radial Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-radial-gradient opacity-60 pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Brand Icon with hover bounce and ScrollReveal */}
        <ScrollReveal className="mb-5">
          <div className="hover:scale-105 transition-transform duration-200">
            <CendraLogo size={56} variant="squircle" animateCursor />
          </div>
        </ScrollReveal>

        {/* Big Conversion Headline */}
        <ScrollReveal delay={80} className="mb-5">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-[#F3EEE5] leading-[1.08]">
            BRING YOUR INFRASTRUCTURE
            <br />
            <span className="text-[#A6A39C]">TOGETHER.</span>
          </h2>
        </ScrollReveal>

        {/* Subtitle */}
        <ScrollReveal delay={120} className="mb-8">
          <p className="text-lg sm:text-xl text-[#A6A39C] max-w-xl mx-auto leading-relaxed">
            A focused workspace for everything you build and manage. Free during public
            beta for developers and teams.
          </p>
        </ScrollReveal>

        {/* Main Download Card with Spotlight Effect */}
        <ScrollReveal delay={160} className="w-full max-w-xl mb-8">
          <SpotlightCard className="w-full p-6 sm:p-8 rounded-2xl bg-[#141519] border border-[#2B2C32] hover:border-[#3A3B45] shadow-cendra-window text-left transition-all">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-6 pb-6 border-b border-[#222329]">
              <div>
                <div className="text-xs font-mono text-[#56B88A] uppercase tracking-wider mb-1 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-[#56B88A] mr-1.5 animate-pulse" />
                  Latest Release · v1.4.2
                </div>
                <h3 className="text-xl font-bold text-[#F3EEE5]">
                  Cendra for macOS
                </h3>
                <p className="text-xs text-[#74747A] mt-0.5">
                  Universal build: Apple Silicon (M1/M2/M3/M4) &amp; Intel x86_64
                </p>
              </div>

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="btn-pressable flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-[#F3EEE5] text-[#0B0C0F] font-semibold text-sm hover:bg-[#FAF7F2] shadow-[0_0_30px_rgba(243,238,229,0.2)] hover:scale-105 w-full sm:w-auto transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download (.dmg)</span>
              </a>
            </div>

            {/* Quick Terminal Homebrew install */}
            <div>
              <div className="text-[11px] font-mono text-[#74747A] uppercase mb-2">
                INSTALL VIA HOMEBREW
              </div>
              <div className="flex items-center justify-between px-3.5 py-2.5 rounded-lg bg-[#0B0C0F] border border-[#25262C] hover:border-[#33353F] font-mono text-xs text-[#A6A39C] transition-colors">
                <div className="flex items-center space-x-2 truncate">
                  <Terminal className="w-3.5 h-3.5 text-[#56B88A]" />
                  <span className="select-all truncate">brew install --cask cendra</span>
                </div>
                <button
                  onClick={copyBrewCommand}
                  className="p-1 rounded hover:bg-[#1E2026] text-[#74747A] hover:text-[#F3EEE5] transition-colors ml-2"
                  title="Copy Homebrew install command"
                  aria-label="Copy command"
                >
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-[#56B88A]" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>

            {/* Checksum & Requirements */}
            <div className="mt-4 pt-4 border-t border-[#1C1D22] flex flex-wrap items-center justify-between text-[11px] font-mono text-[#74747A]">
              <span>Requires macOS 13.0 Ventura or later</span>
              <span className="hover:text-[#A6A39C] cursor-pointer">
                SHA256: e8f4...32a9
              </span>
            </div>
          </SpotlightCard>
        </ScrollReveal>

        {/* Alternative Platform Compatibility */}
        <ScrollReveal delay={200}>
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-[#74747A]">
            <span className="flex items-center space-x-1.5 text-[#A6A39C] hover:text-[#F3EEE5] transition-colors cursor-pointer">
              <Apple className="w-3.5 h-3.5" />
              <span>macOS Sequoia &amp; Sonoma</span>
            </span>
            <span className="text-[#3A3B42]">·</span>
            <span className="flex items-center space-x-1.5 hover:text-[#F3EEE5] transition-colors cursor-pointer">
              <Laptop className="w-3.5 h-3.5" />
              <span>Linux (.deb, .rpm, AppImage)</span>
            </span>
            <span className="text-[#3A3B42]">·</span>
            <span className="flex items-center space-x-1.5 hover:text-[#F3EEE5] transition-colors cursor-pointer">
              <Monitor className="w-3.5 h-3.5" />
              <span>Windows (WSL2 Integration)</span>
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ConversionSection;
