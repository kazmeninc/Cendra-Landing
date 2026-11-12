"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { CendraLogo } from "./CendraLogo";
import { Terminal, Github, Download, Menu, X, ArrowUpRight, ShieldCheck, Cpu } from "lucide-react";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Accessibility Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#F3EEE5] text-[#0B0C0F] font-mono text-sm rounded-md shadow-lg outline-none ring-2 ring-white"
      >
        Skip to main content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#0B0C0F]/80 backdrop-blur-xl border-b border-[#2B2C32]/80 shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3"
            : "bg-transparent border-b border-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Wordmark */}
            <Link
              href="/"
              className="group flex items-center space-x-3 text-[#F3EEE5] outline-none"
              aria-label="Cendra Home"
            >
              <div className="transition-transform duration-200 group-hover:scale-105 active:scale-95">
                <CendraLogo size={32} variant="squircle" animateCursor />
              </div>
              <div className="flex items-baseline space-x-2">
                <span className="font-bold tracking-tight text-lg text-[#F3EEE5] font-sans">
                  CENDRA
                </span>
                <span className="hidden sm:inline-block font-mono text-[10px] uppercase tracking-widest text-[#74747A] px-1.5 py-0.5 rounded border border-[#2B2C32] bg-[#141519]">
                  v1.4.2
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              <Link
                href="#product-showcase"
                className="px-3 py-1.5 text-sm text-[#A6A39C] hover:text-[#F3EEE5] transition-colors rounded-md hover:bg-[#141519]"
              >
                Workspace
              </Link>
              <Link
                href="#interactive-story"
                className="px-3 py-1.5 text-sm text-[#A6A39C] hover:text-[#F3EEE5] transition-colors rounded-md hover:bg-[#141519]"
              >
                Story
              </Link>
              <Link
                href="#features"
                className="px-3 py-1.5 text-sm text-[#A6A39C] hover:text-[#F3EEE5] transition-colors rounded-md hover:bg-[#141519]"
              >
                Features
              </Link>
              <Link
                href="#terminal-showcase"
                className="px-3 py-1.5 text-sm text-[#A6A39C] hover:text-[#F3EEE5] transition-colors rounded-md hover:bg-[#141519]"
              >
                Terminal
              </Link>
              <Link
                href="#security"
                className="px-3 py-1.5 text-sm text-[#A6A39C] hover:text-[#F3EEE5] transition-colors rounded-md hover:bg-[#141519]"
              >
                Security
              </Link>
              <Link
                href="#philosophy"
                className="px-3 py-1.5 text-sm text-[#A6A39C] hover:text-[#F3EEE5] transition-colors rounded-md hover:bg-[#141519]"
              >
                Manifesto
              </Link>
            </nav>

            {/* Right Actions: GitHub & Download CTA */}
            <div className="hidden md:flex items-center space-x-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-1.5 px-3 py-1.5 text-xs font-mono text-[#A6A39C] hover:text-[#F3EEE5] transition-colors rounded-md border border-[#2B2C32] hover:border-[#3A3B42] bg-[#141519]"
                aria-label="Cendra on GitHub"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
                <span className="text-[#74747A] pl-1 font-mono">4.8k</span>
              </a>

              <a
                href="#download"
                className="btn-pressable inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-[#F3EEE5] text-[#0B0C0F] text-xs font-medium font-sans hover:bg-[#FAF7F2] shadow-[0_0_20px_rgba(243,238,229,0.15)] transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#A6A39C] hover:text-[#F3EEE5] focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden px-4 pt-3 pb-6 bg-[#0B0C0F]/95 backdrop-blur-2xl border-b border-[#2B2C32] animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col space-y-3 pt-2">
              <Link
                href="#product-showcase"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm text-[#F3EEE5] hover:bg-[#141519] rounded-md"
              >
                Workspace
              </Link>
              <Link
                href="#interactive-story"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm text-[#F3EEE5] hover:bg-[#141519] rounded-md"
              >
                Story
              </Link>
              <Link
                href="#features"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm text-[#F3EEE5] hover:bg-[#141519] rounded-md"
              >
                Features
              </Link>
              <Link
                href="#terminal-showcase"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm text-[#F3EEE5] hover:bg-[#141519] rounded-md"
              >
                Terminal
              </Link>
              <Link
                href="#security"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm text-[#F3EEE5] hover:bg-[#141519] rounded-md"
              >
                Security
              </Link>
              <Link
                href="#philosophy"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm text-[#F3EEE5] hover:bg-[#141519] rounded-md"
              >
                Manifesto
              </Link>
              <div className="pt-3 border-t border-[#2B2C32] flex flex-col space-y-2">
                <a
                  href="#download"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-pressable flex items-center justify-center space-x-2 w-full py-2.5 rounded-lg bg-[#F3EEE5] text-[#0B0C0F] text-sm font-medium"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Cendra for macOS</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;

