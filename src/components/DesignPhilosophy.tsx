"use client";

import React from "react";
import { Terminal, BellOff, Compass, Sparkles } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import TextReveal from "./TextReveal";

export const DesignPhilosophy: React.FC = () => {
  return (
    <section
      id="philosophy"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#0B0C0F] border-t border-[#1C1D22] relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        {/* Editorial Sub-badge & Headline with ScrollReveal */}
        <ScrollReveal className="mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-[#2B2C32] bg-[#141519] text-xs font-mono text-[#A6A39C] mb-6 hover:border-[#3A3B45] transition-colors">
            <Sparkles className="w-3.5 h-3.5 text-[#56B88A]" />
            <span>DESIGN MANIFESTO</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-[#F3EEE5] max-w-4xl leading-[1.05]">
            <TextReveal as="span" text="TECHNOLOGY SHOULD" delay={60} className="block" />
            <TextReveal as="span" text="FEEL EFFORTLESS." delay={200} className="block text-[#A6A39C]" />
          </h2>
        </ScrollReveal>

        {/* Three Editorial Pillars */}
        <div className="space-y-10 md:space-y-16 border-t border-[#1C1D22] pt-12">
          {/* 01. Terminal First */}
          <ScrollReveal delay={0}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline group p-4 -mx-4 rounded-xl hover:bg-[#121317] transition-all duration-300">
              <div className="md:col-span-3 font-mono text-sm text-[#74747A] group-hover:text-[#56B88A] transition-colors">
                01 / COMMAND LINE
              </div>
              <div className="md:col-span-4">
                <h3 className="text-2xl sm:text-3xl font-bold uppercase text-[#F3EEE5] tracking-tight group-hover:translate-x-1 transition-transform">
                  TERMINAL FIRST.
                </h3>
              </div>
              <div className="md:col-span-5 text-[#A6A39C] text-base leading-relaxed group-hover:text-[#D8D4CC] transition-colors">
                The command line is where actual engineering happens. We don&apos;t hide
                the shell behind abstraction layers or artificial wizards. We treat it
                with the sub-millisecond responsiveness, font rendering fidelity, and
                respect it deserves.
              </div>
            </div>
          </ScrollReveal>

          {/* 02. Quiet By Design */}
          <ScrollReveal delay={80}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline border-t border-[#181920] pt-10 group p-4 -mx-4 rounded-xl hover:bg-[#121317] transition-all duration-300">
              <div className="md:col-span-3 font-mono text-sm text-[#74747A] group-hover:text-[#56B88A] transition-colors">
                02 / COGNITIVE LOAD
              </div>
              <div className="md:col-span-4">
                <h3 className="text-2xl sm:text-3xl font-bold uppercase text-[#F3EEE5] tracking-tight group-hover:translate-x-1 transition-transform">
                  QUIET BY DESIGN.
                </h3>
              </div>
              <div className="md:col-span-5 text-[#A6A39C] text-base leading-relaxed group-hover:text-[#D8D4CC] transition-colors">
                No red notification dots begging for attention. No marketing popups in
                your terminal window. No unnecessary decorative motion that delays input.
                Cendra is an instrument designed to disappear into your hands.
              </div>
            </div>
          </ScrollReveal>

          {/* 03. Built for Focus */}
          <ScrollReveal delay={160}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline border-t border-[#181920] pt-10 group p-4 -mx-4 rounded-xl hover:bg-[#121317] transition-all duration-300">
              <div className="md:col-span-3 font-mono text-sm text-[#74747A] group-hover:text-[#56B88A] transition-colors">
                03 / SPATIAL COHESION
              </div>
              <div className="md:col-span-4">
                <h3 className="text-2xl sm:text-3xl font-bold uppercase text-[#F3EEE5] tracking-tight group-hover:translate-x-1 transition-transform">
                  BUILT FOR FOCUS.
                </h3>
              </div>
              <div className="md:col-span-5 text-[#A6A39C] text-base leading-relaxed group-hover:text-[#D8D4CC] transition-colors">
                Every server, connection state, key fingerprint, and port forward has a
                predictable spatial home. No searching through endless tabs or nested
                dialogs when production alerts fire.
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default DesignPhilosophy;
