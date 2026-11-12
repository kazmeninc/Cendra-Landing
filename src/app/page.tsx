import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InteractiveProductStory from "@/components/InteractiveProductStory";
import FeatureExperiences from "@/components/FeatureExperiences";
import TerminalShowcase from "@/components/TerminalShowcase";
import SecurityStory from "@/components/SecurityStory";
import DesignPhilosophy from "@/components/DesignPhilosophy";
import ConversionSection from "@/components/ConversionSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0B0C0F] text-[#F3EEE5] selection:bg-[#F3EEE5]/20 selection:text-[#F3EEE5]">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content" className="relative">
        {/* 01. Cinematic Hero & Desktop Application Showcase */}
        <Hero />

        {/* 02. Interactive Product Story (ScrollTrigger workflow progression) */}
        <InteractiveProductStory />

        {/* 03. Feature Experiences (Servers, Terminal, SFTP, SSH Keys, Tunnels) */}
        <FeatureExperiences />

        {/* 04. Dedicated Interactive Terminal Showcase */}
        <TerminalShowcase />

        {/* 05. Security Story (Hardware tokens, ciphers, visual fingerprints) */}
        <SecurityStory />

        {/* 06. Design Philosophy (Editorial typography & focus manifesto) */}
        <DesignPhilosophy />

        {/* 07. Final Conversion & Download */}
        <ConversionSection />
      </main>

      {/* Comprehensive Technical Footer */}
      <Footer />
    </div>
  );
}

