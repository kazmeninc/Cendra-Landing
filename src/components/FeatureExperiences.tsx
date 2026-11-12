"use client";

import React, { useState } from "react";
import {
  Server,
  Terminal,
  FolderTree,
  Key,
  Network,
  Cpu,
  Activity,
  ArrowRight,
  ShieldCheck,
  Check,
  UploadCloud,
  FileCode,
  HardDrive,
  Copy,
  Layers,
  Sliders,
  Zap,
  RotateCw,
} from "lucide-react";
import SpotlightCard from "./SpotlightCard";
import ScrollReveal from "./ScrollReveal";

export const FeatureExperiences: React.FC = () => {
  const [activeFeatureTab, setActiveFeatureTab] = useState<
    "servers" | "terminal" | "sftp" | "keys" | "tunnels"
  >("servers");

  // SFTP Transfer simulator state
  const [transferring, setTransferring] = useState(false);
  const [transferProgress, setTransferProgress] = useState(100);

  const startTransfer = () => {
    if (transferring) return;
    setTransferring(true);
    setTransferProgress(0);
    const interval = setInterval(() => {
      setTransferProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTransferring(false);
          return 100;
        }
        return prev + 25;
      });
    }, 140);
  };

  // SSH Key Randomart rotation simulator
  const [keySeed, setKeySeed] = useState(0);
  const [isScrambling, setIsScrambling] = useState(false);

  const randomartMatrices = [
`+--[ED25519 256]--+
|   .o+...o .     |
|    oo+.. +      |
|   . =.o =       |
|    = * B .      |
|   . * S o       |
|    = + = .      |
|   . o o +       |
|    . . E .      |
|                 |
+----[SHA256]-----+`,
`+--[ED25519 256]--+
|      .+=.       |
|     .o =..      |
|    .o o.o .     |
|   .o.o o.o      |
|    S.+o..       |
|   . =*o         |
|    ooB.         |
|   ..E*..        |
|    .o=          |
+----[SHA256]-----+`,
`+--[ED25519 256]--+
|    .o.  .       |
|   .. +.. .      |
|  .  + = o .     |
|   .o * B .      |
|    + * S =      |
|   . + = +       |
|    o . o        |
|     . E         |
|                 |
+----[SHA256]-----+`
  ];

  const handleKeyRotate = () => {
    setIsScrambling(true);
    setTimeout(() => {
      setKeySeed((prev) => (prev + 1) % randomartMatrices.length);
      setIsScrambling(false);
    }, 250);
  };

  return (
    <section
      id="features"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#0B0C0F] border-t border-[#1C1D22] relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header with ScrollReveal */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-[#2B2C32] bg-[#141519] text-xs font-mono text-[#A6A39C] mb-4">
            <Layers className="w-3.5 h-3.5 text-[#56B88A]" />
            <span>ARCHITECTURAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#F3EEE5] mb-5">
            ENGINEERED FOR FLOW.
            <br />
            <span className="text-[#A6A39C]">REFINED FOR CLARITY.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#A6A39C] leading-relaxed">
            Every feature in Cendra is purpose-built to eliminate context switching
            and give developers an unwavering sense of operational control.
          </p>

          {/* Feature Navigation Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            <button
              onClick={() => setActiveFeatureTab("servers")}
              className={`btn-pressable flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                activeFeatureTab === "servers"
                  ? "bg-[#F3EEE5] text-[#0B0C0F] font-semibold shadow-[0_0_20px_rgba(243,238,229,0.15)] scale-105"
                  : "bg-[#141519] text-[#74747A] border border-[#222329] hover:text-[#A6A39C]"
              }`}
            >
              <Server className="w-3.5 h-3.5" />
              <span>Server Fleet</span>
            </button>

            <button
              onClick={() => setActiveFeatureTab("terminal")}
              className={`btn-pressable flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                activeFeatureTab === "terminal"
                  ? "bg-[#F3EEE5] text-[#0B0C0F] font-semibold shadow-[0_0_20px_rgba(243,238,229,0.15)] scale-105"
                  : "bg-[#141519] text-[#74747A] border border-[#222329] hover:text-[#A6A39C]"
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Terminal Engine</span>
            </button>

            <button
              onClick={() => setActiveFeatureTab("sftp")}
              className={`btn-pressable flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                activeFeatureTab === "sftp"
                  ? "bg-[#F3EEE5] text-[#0B0C0F] font-semibold shadow-[0_0_20px_rgba(243,238,229,0.15)] scale-105"
                  : "bg-[#141519] text-[#74747A] border border-[#222329] hover:text-[#A6A39C]"
              }`}
            >
              <FolderTree className="w-3.5 h-3.5" />
              <span>SFTP Sync</span>
            </button>

            <button
              onClick={() => setActiveFeatureTab("keys")}
              className={`btn-pressable flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                activeFeatureTab === "keys"
                  ? "bg-[#F3EEE5] text-[#0B0C0F] font-semibold shadow-[0_0_20px_rgba(243,238,229,0.15)] scale-105"
                  : "bg-[#141519] text-[#74747A] border border-[#222329] hover:text-[#A6A39C]"
              }`}
            >
              <Key className="w-3.5 h-3.5" />
              <span>SSH Keys &amp; Identity</span>
            </button>

            <button
              onClick={() => setActiveFeatureTab("tunnels")}
              className={`btn-pressable flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                activeFeatureTab === "tunnels"
                  ? "bg-[#F3EEE5] text-[#0B0C0F] font-semibold shadow-[0_0_20px_rgba(243,238,229,0.15)] scale-105"
                  : "bg-[#141519] text-[#74747A] border border-[#222329] hover:text-[#A6A39C]"
              }`}
            >
              <Network className="w-3.5 h-3.5" />
              <span>Port Forwarding</span>
            </button>
          </div>
        </ScrollReveal>

        {/* Feature Display Window */}
        <ScrollReveal delay={120} className="max-w-5xl mx-auto bg-[#101115] border border-[#25262C] rounded-2xl shadow-cendra-window overflow-hidden">
          {/* Top Window Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#141519] border-b border-[#222329]">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
              <span className="text-xs font-mono text-[#74747A] pl-2">
                feature://cendra.internal/{activeFeatureTab}
              </span>
            </div>
            <div className="text-[11px] font-mono text-[#A6A39C]">
              {activeFeatureTab.toUpperCase()} SUBSYSTEM
            </div>
          </div>

          <div className="p-6 md:p-8">
            {/* 1. Server Management */}
            {activeFeatureTab === "servers" && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#56B88A]">
                      SERVER FLEET TOPOLOGY
                    </span>
                    <h3 className="text-2xl font-bold text-[#F3EEE5] tracking-tight mt-1">
                      Servers without the chaos.
                    </h3>
                    <p className="text-sm text-[#A6A39C] max-w-xl mt-1">
                      Group connections by environment, region, or stack. Health probes,
                      telemetry sparklines and quick tags in one unified view.
                    </p>
                  </div>
                  <div className="font-mono text-xs text-[#74747A] bg-[#16171D] px-3 py-1.5 rounded-lg border border-[#25262C]">
                    Active Hosts: <span className="text-[#F3EEE5] font-semibold">12</span> · Live:{" "}
                    <span className="text-[#56B88A]">100%</span>
                  </div>
                </div>

                {/* Server Grid Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                  <SpotlightCard className="p-4 rounded-xl bg-[#141519] border border-[#262730] hover:border-[#3A3B45] transition-all">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono text-[#56B88A] flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#56B88A] mr-1.5 animate-pulse" />
                        PROD · LIVE
                      </span>
                      <span className="text-xs font-mono text-[#74747A]">18ms</span>
                    </div>
                    <div className="text-sm font-semibold text-[#F3EEE5] font-mono">prod-api-01</div>
                    <div className="text-xs text-[#74747A] mt-0.5">10.0.12.44 · eu-central-1</div>
                    <div className="mt-4 pt-3 border-t border-[#1C1D22] flex justify-between text-[11px] font-mono text-[#A6A39C]">
                      <span>CPU 14%</span>
                      <span>RAM 4.2G</span>
                      <span>Ubuntu 22.04</span>
                    </div>
                  </SpotlightCard>

                  <SpotlightCard className="p-4 rounded-xl bg-[#141519] border border-[#262730] hover:border-[#3A3B45] transition-all">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono text-[#56B88A] flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#56B88A] mr-1.5 animate-pulse" />
                        DATABASE · LIVE
                      </span>
                      <span className="text-xs font-mono text-[#74747A]">12ms</span>
                    </div>
                    <div className="text-sm font-semibold text-[#F3EEE5] font-mono">pg-master-01</div>
                    <div className="text-xs text-[#74747A] mt-0.5">10.0.88.2 · eu-west-1</div>
                    <div className="mt-4 pt-3 border-t border-[#1C1D22] flex justify-between text-[11px] font-mono text-[#A6A39C]">
                      <span>CPU 28%</span>
                      <span>RAM 12.1G</span>
                      <span>Postgres 16</span>
                    </div>
                  </SpotlightCard>

                  <SpotlightCard className="p-4 rounded-xl bg-[#141519] border border-[#262730] hover:border-[#3A3B45] transition-all">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono text-[#E8B45C] flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E8B45C] mr-1.5 animate-pulse" />
                        STAGING · LIVE
                      </span>
                      <span className="text-xs font-mono text-[#74747A]">24ms</span>
                    </div>
                    <div className="text-sm font-semibold text-[#F3EEE5] font-mono">staging-worker</div>
                    <div className="text-xs text-[#74747A] mt-0.5">172.16.4.19 · us-east-1</div>
                    <div className="mt-4 pt-3 border-t border-[#1C1D22] flex justify-between text-[11px] font-mono text-[#A6A39C]">
                      <span>CPU 8%</span>
                      <span>RAM 2.4G</span>
                      <span>Debian 12</span>
                    </div>
                  </SpotlightCard>
                </div>
              </div>
            )}

            {/* 2. Terminal Experience */}
            {activeFeatureTab === "terminal" && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#75A9E8]">
                    TERMINAL EMULATION
                  </span>
                  <h3 className="text-2xl font-bold text-[#F3EEE5] tracking-tight mt-1">
                    Your terminal. Without distractions.
                  </h3>
                  <p className="text-sm text-[#A6A39C] max-w-xl mt-1">
                    Native Metal and WebGPU rendering canvas, 24-bit true color palette,
                    multiplexed split-panes and infinite hardware-accelerated scrollback.
                  </p>
                </div>

                {/* Split Pane Terminal Mock */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 font-mono text-xs">
                  {/* Left Pane */}
                  <div className="p-4 rounded-xl bg-[#0B0C0F] border border-[#222329] space-y-2">
                    <div className="text-[10px] text-[#74747A] pb-1 border-b border-[#1C1D22] flex justify-between">
                      <span>PANE 1 :: logs (tail -f)</span>
                      <span className="text-[#56B88A]">ACTIVE</span>
                    </div>
                    <div className="text-[#A6A39C] leading-relaxed">
                      [14:22:01] GET /v1/health HTTP/2 200 (1.2ms)
                      <br />
                      [14:22:04] POST /v1/auth/exchange HTTP/2 201 (4.8ms)
                      <br />
                      <span className="text-[#56B88A]">[14:22:08] worker-03: job #8841 completed</span>
                      <br />
                      [14:22:12] GET /v1/metrics HTTP/2 200 (0.9ms)
                    </div>
                  </div>

                  {/* Right Pane */}
                  <div className="p-4 rounded-xl bg-[#0B0C0F] border border-[#222329] space-y-2">
                    <div className="text-[10px] text-[#74747A] pb-1 border-b border-[#1C1D22] flex justify-between">
                      <span>PANE 2 :: top containers</span>
                      <span>GPU ACCELERATED</span>
                    </div>
                    <div className="text-[#D8D4CC] leading-relaxed">
                      Tasks: 84 total, 1 running, 83 sleeping
                      <br />
                      %Cpu(s): 2.4 us, 0.8 sy, 0.0 ni, 96.8 id
                      <br />
                      MiB Mem : 15982.4 total, 11720.1 free
                      <br />
                      <span className="text-[#75A9E8]">PID USER PR NI VIRT RES SHR S %CPU %MEM</span>
                      <br />
                      1402 root 20 0 1142m 84m 18m S 1.8 0.5 nginx
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 3. SFTP Experience */}
            {activeFeatureTab === "sftp" && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#E8B45C]">
                      REMOTE FILESYSTEM
                    </span>
                    <h3 className="text-2xl font-bold text-[#F3EEE5] tracking-tight mt-1">
                      Your files, wherever they live.
                    </h3>
                    <p className="text-sm text-[#A6A39C] max-w-xl mt-1">
                      Dual-panel local and remote synchronization. Atomic chunked file
                      transfers directly inside your active SSH tunnel.
                    </p>
                  </div>
                  <button
                    onClick={startTransfer}
                    disabled={transferring}
                    className="btn-pressable flex items-center space-x-2 px-4 py-2 rounded-lg bg-[#F3EEE5] text-[#0B0C0F] text-xs font-mono font-semibold"
                  >
                    <UploadCloud className="w-3.5 h-3.5" />
                    <span>{transferring ? "Syncing..." : "Simulate Transfer"}</span>
                  </button>
                </div>

                {/* Dual Panel Browser */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                  <div className="p-4 rounded-xl bg-[#0B0C0F] border border-[#222329]">
                    <div className="text-[10px] text-[#74747A] pb-2 border-b border-[#1C1D22]">
                      LOCAL :: ~/Sites/cendra-web
                    </div>
                    <div className="space-y-1.5 pt-2 text-[#A6A39C]">
                      <div className="flex items-center justify-between text-[#F3EEE5]">
                        <span className="flex items-center space-x-1.5">
                          <FileCode className="w-3.5 h-3.5 text-[#75A9E8]" />
                          <span>docker-compose.prod.yml</span>
                        </span>
                        <span className="text-[10px] text-[#74747A]">2.4 KB</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center space-x-1.5">
                          <FileCode className="w-3.5 h-3.5 text-[#74747A]" />
                          <span>nginx.conf</span>
                        </span>
                        <span className="text-[10px] text-[#74747A]">4.2 KB</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#0B0C0F] border border-[#222329]">
                    <div className="text-[10px] text-[#74747A] pb-2 border-b border-[#1C1D22]">
                      REMOTE :: prod-api-01:/etc/cendra
                    </div>
                    <div className="space-y-1.5 pt-2 text-[#A6A39C]">
                      <div className="flex items-center justify-between text-[#56B88A]">
                        <span className="flex items-center space-x-1.5">
                          <Check className="w-3.5 h-3.5 text-[#56B88A]" />
                          <span>docker-compose.prod.yml</span>
                        </span>
                        <span className="text-[10px] text-[#74747A]">Synced</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center space-x-1.5">
                          <FileCode className="w-3.5 h-3.5 text-[#74747A]" />
                          <span>nginx.conf</span>
                        </span>
                        <span className="text-[10px] text-[#74747A]">Synced</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Progress status */}
                <div className="p-3 rounded-lg bg-[#141519] border border-[#222329] text-xs font-mono space-y-1.5">
                  <div className="flex justify-between text-[#A6A39C]">
                    <span>Transfer progress:</span>
                    <span className="text-[#56B88A]">{transferProgress}% complete</span>
                  </div>
                  <div className="w-full bg-[#0B0C0F] rounded-full h-1.5 overflow-hidden">
                    <div
                      className="bg-[#56B88A] h-1.5 rounded-full transition-all duration-200"
                      style={{ width: `${transferProgress}%` }}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* 4. SSH Keys Experience */}
            {activeFeatureTab === "keys" && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#56B88A]">
                      IDENTITY &amp; CRYPTOGRAPHY
                    </span>
                    <h3 className="text-2xl font-bold text-[#F3EEE5] tracking-tight mt-1">
                      Your keys. Your security.
                    </h3>
                    <p className="text-sm text-[#A6A39C] max-w-xl mt-1">
                      Hardware security key support (YubiKey / FIDO2 / Secure Enclave),
                      visual randomart fingerprinting, and zero plaintext exposure.
                    </p>
                  </div>
                  <button
                    onClick={handleKeyRotate}
                    disabled={isScrambling}
                    className="btn-pressable flex items-center space-x-2 px-3.5 py-1.5 rounded-lg bg-[#181920] border border-[#2B2C32] hover:border-[#3A3B45] text-xs font-mono text-[#F3EEE5] transition-all"
                  >
                    <RotateCw className={`w-3.5 h-3.5 text-[#56B88A] ${isScrambling ? "animate-spin" : ""}`} />
                    <span>Cycle Fingerprint Key</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Key Card */}
                  <SpotlightCard className="p-4 rounded-xl bg-[#0B0C0F] border border-[#222329] space-y-3 font-mono text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-[#F3EEE5] font-semibold flex items-center space-x-2">
                        <Key className="w-4 h-4 text-[#E8B45C]" />
                        <span>id_ed25519_sk_cendra</span>
                      </span>
                      <span className="text-[10px] text-[#56B88A] bg-[#56B88A]/10 px-2 py-0.5 rounded border border-[#56B88A]/20">
                        HARDWARE
                      </span>
                    </div>
                    <div className="text-[11px] text-[#74747A] space-y-1">
                      <div>Type: ED25519-SK (FIDO2 Authenticator)</div>
                      <div>Comment: tanishq@workstation.apple</div>
                      <div className="text-[#A6A39C] break-all">
                        SHA256:qZ3mX+vK9R0mN1P8L4W2eF7G5jH6Y8aC1bV0dE3fG9o
                      </div>
                    </div>
                  </SpotlightCard>

                  {/* Visual Randomart Hash Matrix with scramble animation */}
                  <SpotlightCard className="p-4 rounded-xl bg-[#0B0C0F] border border-[#222329] font-mono text-[11px] text-[#74747A]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-[#F3EEE5] font-semibold">
                        Visual Randomart Fingerprint:
                      </span>
                      <span className="text-[10px] text-[#56B88A]">ACTIVE</span>
                    </div>
                    <div
                      className={`p-2.5 rounded bg-[#131418] text-[#D8D4CC] whitespace-pre leading-none select-none transition-all duration-150 ${
                        isScrambling ? "filter blur-[2px] opacity-60" : "filter blur-0 opacity-100"
                      }`}
                    >
                      {randomartMatrices[keySeed]}
                    </div>
                  </SpotlightCard>
                </div>
              </div>
            )}

            {/* 5. Port Forwarding & Connection Tunnels */}
            {activeFeatureTab === "tunnels" && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#75A9E8]">
                    NETWORK TOPOLOGY
                  </span>
                  <h3 className="text-2xl font-bold text-[#F3EEE5] tracking-tight mt-1">
                    Every connection has its place.
                  </h3>
                  <p className="text-sm text-[#A6A39C] max-w-xl mt-1">
                    Dynamic SOCKS5 proxies, local and remote port forwarding with visual
                    tunnel graphs, automatic reconnects, and bastion jump-host chaining.
                  </p>
                </div>

                {/* Visual Tunnel Topology Graphic with animated packets */}
                <div className="p-5 rounded-xl bg-[#0B0C0F] border border-[#222329] font-mono text-xs">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-4 relative">
                    {/* Local Port Node */}
                    <div className="p-3.5 rounded-lg bg-[#141519] border border-[#2B2C32] text-center w-full md:w-44 shadow-sm hover:border-[#3A3B45] transition-colors">
                      <div className="text-[10px] text-[#74747A] uppercase">LOCAL BINDING</div>
                      <div className="text-[#F3EEE5] font-semibold text-sm mt-1">localhost:5432</div>
                      <div className="text-[10px] text-[#56B88A] mt-1 flex items-center justify-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#56B88A] mr-1 animate-pulse" />
                        Listening
                      </div>
                    </div>

                    {/* Tunnel Conduit with packet stream */}
                    <div className="flex flex-col items-center justify-center text-[#56B88A] w-full md:w-64">
                      <span className="text-[10px] font-mono">SSH Encrypted L2</span>
                      <div className="relative w-full h-4 flex items-center justify-center my-1">
                        <div className="w-full h-0.5 bg-[#25262C] relative overflow-hidden">
                          <div className="absolute inset-y-0 w-12 bg-gradient-to-r from-transparent via-[#56B88A] to-transparent animate-[pulseSubtle_1.5s_ease-in-out_infinite]" />
                        </div>
                      </div>
                      <span className="text-[10px] text-[#74747A]">via bastion-01 (10.0.0.1)</span>
                    </div>

                    {/* Remote Target Node */}
                    <div className="p-3.5 rounded-lg bg-[#141519] border border-[#2B2C32] text-center w-full md:w-44 shadow-sm hover:border-[#3A3B45] transition-colors">
                      <div className="text-[10px] text-[#74747A] uppercase">REMOTE DESTINATION</div>
                      <div className="text-[#F3EEE5] font-semibold text-sm mt-1">
                        pg-master:5432
                      </div>
                      <div className="text-[10px] text-[#75A9E8] mt-1">10.0.88.2</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FeatureExperiences;
