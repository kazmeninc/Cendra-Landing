"use client";

import React from "react";
import { ShieldCheck, Lock, Key, Cpu, EyeOff, CheckCircle, Terminal } from "lucide-react";
import SpotlightCard from "./SpotlightCard";
import ScrollReveal from "./ScrollReveal";
import TextReveal from "./TextReveal";

export const SecurityStory: React.FC = () => {
  const securityPillars = [
    {
      icon: Lock,
      title: "Hardware Security Modules",
      subtitle: "YubiKey & Apple Secure Enclave",
      description:
        "Full support for FIDO2 / U2F authenticators and Touch ID integration. Private keys stay physically bound to silicon.",
      badge: "FIDO2 / U2F",
    },
    {
      icon: ShieldCheck,
      title: "Modern Cryptography Only",
      subtitle: "ChaCha20-Poly1305 & Ed25519",
      description:
        "Legacy insecure ciphers (DSA, RC4, CBC, 3DES) are disabled by default. Strict adherence to contemporary OpenSSH cryptography standards.",
      badge: "AEAD CIPHERS",
    },
    {
      icon: EyeOff,
      title: "Air-Gapped Local Storage",
      subtitle: "Zero Cloud Credential Telemetry",
      description:
        "Your private keys, connection configurations and terminal buffers never leave your machine. No telemetry servers, no telemetry trackers.",
      badge: "ZERO TELEMETRY",
    },
    {
      icon: Terminal,
      title: "Strict Known Hosts & MitM Defense",
      subtitle: "Visual Fingerprint Hashes",
      description:
        "Visual randomart hashing and automated host-key change warnings immediately detect and block man-in-the-middle interception attempts.",
      badge: "MITM DEFENSE",
    },
  ];

  return (
    <section
      id="security"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#0B0C0F] border-t border-[#1C1D22] relative"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header with ScrollReveal */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-[#2B2C32] bg-[#141519] text-xs font-mono text-[#A6A39C] mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-[#56B88A]" />
            <span>SECURITY ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#F3EEE5] mb-5">
            <TextReveal as="span" text="YOUR INFRASTRUCTURE" delay={60} className="block" />
            <TextReveal as="span" text="DESERVES CARE." delay={200} className="block text-[#A6A39C]" />
          </h2>
          <p className="text-base sm:text-lg text-[#A6A39C] leading-relaxed">
            Engineered from first principles for uncompromising confidentiality. No
            third-party relays, no cloud storage of secrets, and no bloated telemetry.
          </p>
        </ScrollReveal>

        {/* Security Grid Cards with Spotlight Effect and Scroll Stagger */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          {securityPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <ScrollReveal key={idx} delay={idx * 80}>
                <SpotlightCard className="p-6 md:p-8 rounded-2xl bg-[#121317] border border-[#222329] hover:border-[#3A3B45] transition-all group h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-[#1A1B22] border border-[#282932] text-[#F3EEE5] group-hover:scale-110 group-hover:border-[#56B88A]/30 transition-all duration-200">
                      <Icon className="w-5 h-5 text-[#56B88A]" />
                    </div>
                    <span className="text-[10px] font-mono text-[#74747A] border border-[#262730] px-2 py-0.5 rounded bg-[#16171E] group-hover:text-[#F3EEE5] group-hover:border-[#3A3B45] transition-colors">
                      {pillar.badge}
                    </span>
                  </div>
                  <div className="text-xs font-mono text-[#74747A] uppercase mb-1">
                    {pillar.subtitle}
                  </div>
                  <h3 className="text-xl font-bold text-[#F3EEE5] mb-2 tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#A6A39C] leading-relaxed">
                    {pillar.description}
                  </p>
                </SpotlightCard>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Cryptographic Specification Banner */}
        <ScrollReveal delay={200}>
          <div className="p-5 md:p-6 rounded-2xl bg-[#101115] border border-[#25262C] font-mono text-xs text-[#A6A39C] hover:border-[#3A3B45] transition-colors">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 rounded-full bg-[#56B88A] animate-pulse" />
                <span className="text-[#F3EEE5] font-semibold">Verified Cipher Pipeline:</span>
                <span className="text-[#75A9E8]">chacha20-poly1305@openssh.com</span>
                <span className="text-[#3A3B42]">·</span>
                <span className="text-[#E8B45C]">curve25519-sha256</span>
                <span className="text-[#3A3B42]">·</span>
                <span className="text-[#56B88A]">ssh-ed25519</span>
              </div>
              <div className="text-[11px] text-[#74747A]">
                OpenSSH Protocol 2.0 Compliant
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SecurityStory;
