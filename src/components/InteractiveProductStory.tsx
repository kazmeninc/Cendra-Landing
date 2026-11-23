"use client";

import React, { useRef, useState } from "react";
import {
  Server,
  Shield,
  Terminal,
  FolderSync,
  CheckCircle2,
  Lock,
  ArrowRight,
  Cpu,
  Globe,
  Radio,
  FileCode,
  UploadCloud,
  Check,
  Zap,
  RefreshCw,
  Fingerprint,
} from "lucide-react";
import { CendraLogo } from "./CendraLogo";
import SpotlightCard from "./SpotlightCard";
import ScrollReveal from "./ScrollReveal";
import TextReveal from "./TextReveal";

export const InteractiveProductStory: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  // Hardware key test animation state
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [keyVerified, setKeyVerified] = useState(true);

  const triggerKeyAuth = () => {
    setIsAuthenticating(true);
    setKeyVerified(false);
    setTimeout(() => {
      setIsAuthenticating(false);
      setKeyVerified(true);
    }, 600);
  };

  // SFTP chunk transfer simulation state
  const [sftpTransferPct, setSftpTransferPct] = useState(100);
  const [isSftpSyncing, setIsSftpSyncing] = useState(false);

  const triggerSftpSync = () => {
    if (isSftpSyncing) return;
    setIsSftpSyncing(true);
    setSftpTransferPct(0);
    const interval = setInterval(() => {
      setSftpTransferPct((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsSftpSyncing(false);
          return 100;
        }
        return prev + 20;
      });
    }, 120);
  };

  const steps = [
    {
      id: "topology",
      tag: "STEP 01 · TOPOLOGY",
      title: "Discover & cluster your fleet",
      description:
        "Every server across AWS, Hetzner, GCP and local hardware mapped into one unified view with instant health telemetry.",
      icon: Server,
    },
    {
      id: "handshake",
      tag: "STEP 02 · HARDWARE CRYPTO",
      title: "Zero-latency hardware handshake",
      description:
        "Authenticate via FIDO2 YubiKey or Secure Enclave in 14ms. Visual fingerprint verification prevents MitM tampering.",
      icon: Lock,
    },
    {
      id: "terminal",
      tag: "STEP 03 · TERMINAL ENGINE",
      title: "Sub-millisecond execution",
      description:
        "GPU-rendered terminal canvas with multiplexed split panes, 24-bit true color and instant command streaming.",
      icon: Terminal,
    },
    {
      id: "sftp",
      tag: "STEP 04 · SFTP PIPELINE",
      title: "Atomic dual-pane file sync",
      description:
        "Resumable chunked file transfers directly over your active SSH tunnel without dropping your terminal session.",
      icon: FolderSync,
    },
  ];

  return (
    <section
      id="interactive-story"
      className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#0B0C0F] border-t border-[#1C1D22] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading with ScrollReveal */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-[#2B2C32] bg-[#141519] text-xs font-mono text-[#A6A39C] mb-4">
            <Radio className="w-3.5 h-3.5 text-[#56B88A] animate-pulse" />
            <span>OPERATIONAL WALKTHROUGH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#F3EEE5] mb-5">
            <TextReveal as="span" text="YOUR ENTIRE INFRASTRUCTURE." delay={60} className="block" />
            <TextReveal as="span" text="ONE WORKSPACE." delay={200} className="block text-[#A6A39C]" />
          </h2>
          <p className="text-base sm:text-lg text-[#A6A39C] max-w-xl mx-auto leading-relaxed">
            Follow the flow of a modern engineer: from multi-region discovery to
            hardware-authenticated terminal execution and synchronized file delivery.
          </p>

          {/* Interactive Step Switcher Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  className={`btn-pressable flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                    activeStep === idx
                      ? "bg-[#F3EEE5] text-[#0B0C0F] font-semibold shadow-[0_0_20px_rgba(243,238,229,0.2)] scale-105"
                      : "bg-[#141519] text-[#74747A] border border-[#222329] hover:text-[#A6A39C] hover:border-[#2F3038]"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>0{idx + 1}</span>
                  <span className="hidden sm:inline">· {step.id.toUpperCase()}</span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Story Composition: Interactive Stage */}
        <ScrollReveal delay={120} className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center max-w-6xl mx-auto">
          {/* Left Column: Step Editorial Details */}
          <div className="lg:col-span-5 space-y-4">
            <SpotlightCard className="p-6 md:p-8 rounded-2xl bg-[#121317] border border-[#222329] shadow-lg relative overflow-hidden">
              <div className="text-[11px] font-mono uppercase tracking-widest text-[#56B88A] mb-2 font-semibold">
                {steps[activeStep].tag}
              </div>
              <h3 className="text-2xl font-bold text-[#F3EEE5] tracking-tight mb-3">
                {steps[activeStep].title}
              </h3>
              <p className="text-sm text-[#A6A39C] leading-relaxed mb-5">
                {steps[activeStep].description}
              </p>

              {/* Step Key Metrics / Spec Points */}
              <div className="space-y-2.5 pt-4 border-t border-[#1C1D22] text-xs font-mono text-[#74747A]">
                {activeStep === 0 && (
                  <>
                    <div className="flex items-center justify-between text-[#A6A39C]">
                      <span>Mesh Clusters:</span>
                      <span className="text-[#F3EEE5]">EU, US-East, Edge</span>
                    </div>
                    <div className="flex items-center justify-between text-[#A6A39C]">
                      <span>Health Probe:</span>
                      <span className="text-[#56B88A]">ICMP + TCP Syn (Every 5s)</span>
                    </div>
                    <div className="flex items-center justify-between text-[#A6A39C]">
                      <span>Average Latency:</span>
                      <span className="text-[#56B88A]">18.4ms fleet-wide</span>
                    </div>
                  </>
                )}
                {activeStep === 1 && (
                  <>
                    <div className="flex items-center justify-between text-[#A6A39C]">
                      <span>Cipher Suite:</span>
                      <span className="text-[#F3EEE5]">chacha20-poly1305</span>
                    </div>
                    <div className="flex items-center justify-between text-[#A6A39C]">
                      <span>Handshake Latency:</span>
                      <span className="text-[#56B88A]">14.2ms verified</span>
                    </div>
                    <div className="pt-2">
                      <button
                        onClick={triggerKeyAuth}
                        disabled={isAuthenticating}
                        className="btn-pressable flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-[#181920] border border-[#2B2C32] hover:border-[#3A3B45] text-xs text-[#F3EEE5] w-full justify-center transition-all"
                      >
                        <Fingerprint className="w-3.5 h-3.5 text-[#56B88A]" />
                        <span>{isAuthenticating ? "Authenticating..." : "Simulate YubiKey Tap"}</span>
                      </button>
                    </div>
                  </>
                )}
                {activeStep === 2 && (
                  <>
                    <div className="flex items-center justify-between text-[#A6A39C]">
                      <span>Canvas Renderer:</span>
                      <span className="text-[#F3EEE5]">Apple Metal / WebGPU</span>
                    </div>
                    <div className="flex items-center justify-between text-[#A6A39C]">
                      <span>Input Latency:</span>
                      <span className="text-[#56B88A]">&lt; 0.8ms keystroke-to-screen</span>
                    </div>
                    <div className="flex items-center justify-between text-[#A6A39C]">
                      <span>Color Depth:</span>
                      <span className="text-[#F3EEE5]">24-bit TrueColor (RGB)</span>
                    </div>
                  </>
                )}
                {activeStep === 3 && (
                  <>
                    <div className="flex items-center justify-between text-[#A6A39C]">
                      <span>Transfer Engine:</span>
                      <span className="text-[#F3EEE5]">Multiplexed SFTPv3</span>
                    </div>
                    <div className="flex items-center justify-between text-[#A6A39C]">
                      <span>Integrity Verification:</span>
                      <span className="text-[#56B88A]">SHA-256 block hash</span>
                    </div>
                    <div className="pt-2">
                      <button
                        onClick={triggerSftpSync}
                        disabled={isSftpSyncing}
                        className="btn-pressable flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-[#181920] border border-[#2B2C32] hover:border-[#3A3B45] text-xs text-[#F3EEE5] w-full justify-center transition-all"
                      >
                        <RefreshCw className={`w-3.5 h-3.5 text-[#56B88A] ${isSftpSyncing ? "animate-spin" : ""}`} />
                        <span>{isSftpSyncing ? "Syncing..." : "Simulate File Sync"}</span>
                      </button>
                    </div>
                  </>
                )}
              </div>
            </SpotlightCard>
          </div>

          {/* Right Column: Evolving Interactive Product Display */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-[#2B2C32] bg-[#0E0F13] shadow-cendra-window overflow-hidden">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#141519] border-b border-[#222329] select-none">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
                  <span className="text-xs font-mono text-[#74747A] pl-2">
                    cendra // {steps[activeStep].id}.view
                  </span>
                </div>
                <div className="flex items-center space-x-1.5 text-[11px] font-mono text-[#56B88A]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#56B88A] animate-pulse" />
                  <span>SYNCED</span>
                </div>
              </div>

              {/* Viewport Content Changes based on Step */}
              <div className="p-5 md:p-6 min-h-[340px] flex flex-col justify-center font-mono">
                {activeStep === 0 && (
                  /* Step 0: Server Topology */
                  <div className="space-y-3 animate-in fade-in duration-300">
                    <div className="flex items-center justify-between pb-2 border-b border-[#1C1D22] text-xs text-[#74747A]">
                      <span>HOST TOPOLOGY</span>
                      <span>REGION / LATENCY</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-3 rounded-lg bg-[#141519] border border-[#262730] hover:border-[#3A3B45] transition-colors cursor-pointer group">
                        <div className="flex items-center space-x-3">
                          <span className="w-2 h-2 rounded-full bg-[#56B88A] group-hover:scale-125 transition-transform" />
                          <div>
                            <div className="text-xs text-[#F3EEE5] font-semibold">prod-api-01</div>
                            <div className="text-[10px] text-[#74747A]">Ubuntu 22.04 LTS · 10.0.12.44</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-xs text-[#56B88A]">18ms</span>
                          <div className="text-[10px] text-[#74747A]">eu-central-1 (Frankfurt)</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-3 rounded-lg bg-[#141519] border border-[#262730] hover:border-[#3A3B45] transition-colors cursor-pointer group">
                        <div className="flex items-center space-x-3">
                          <span className="w-2 h-2 rounded-full bg-[#56B88A] group-hover:scale-125 transition-transform" />
                          <div>
                            <div className="text-xs text-[#F3EEE5] font-semibold">pg-master-01</div>
                            <div className="text-[10px] text-[#74747A]">PostgreSQL 16 Cluster · 10.0.88.2</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-xs text-[#56B88A]">12ms</span>
                          <div className="text-[10px] text-[#74747A]">eu-west-1 (Ireland)</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-3 rounded-lg bg-[#141519] border border-[#262730] hover:border-[#3A3B45] transition-colors cursor-pointer group">
                        <div className="flex items-center space-x-3">
                          <span className="w-2 h-2 rounded-full bg-[#E8B45C] group-hover:scale-125 transition-transform" />
                          <div>
                            <div className="text-xs text-[#F3EEE5] font-semibold">staging-worker</div>
                            <div className="text-[10px] text-[#74747A]">Kubernetes Node 04 · 172.16.4.19</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-xs text-[#E8B45C]">24ms</span>
                          <div className="text-[10px] text-[#74747A]">us-east-1 (N. Virginia)</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeStep === 1 && (
                  /* Step 1: Hardware Crypto Handshake */
                  <div className="space-y-4 animate-in fade-in duration-300">
                    <div className="p-4 rounded-xl bg-[#141519] border border-[#2B2C32]">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className={`p-2 rounded-lg bg-[#56B88A]/10 text-[#56B88A] border border-[#56B88A]/20 transition-transform ${isAuthenticating ? "scale-110" : ""}`}>
                          <Shield className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-[#F3EEE5]">
                            {isAuthenticating
                              ? "Verifying Hardware Key..."
                              : "FIDO2 Hardware Key Authenticated"}
                          </div>
                          <div className="text-xs text-[#74747A]">
                            YubiKey 5C NFC (Firmware 5.4.3)
                          </div>
                        </div>
                      </div>

                      <div className="p-3 rounded bg-[#0B0C0F] border border-[#222329] text-[11px] space-y-1">
                        <div className="flex justify-between text-[#74747A]">
                          <span>Key Type:</span>
                          <span className="text-[#F3EEE5]">ED25519-SK (Hardware-backed)</span>
                        </div>
                        <div className="flex justify-between text-[#74747A]">
                          <span>Fingerprint:</span>
                          <span className="text-[#75A9E8]">SHA256:8h3G...X9qL0 (Verified)</span>
                        </div>
                        <div className="flex justify-between text-[#74747A]">
                          <span>Negotiated Cipher:</span>
                          <span className="text-[#56B88A]">chacha20-poly1305@openssh.com</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-center space-x-2 text-xs text-[#56B88A] bg-[#56B88A]/10 py-2 rounded-lg border border-[#56B88A]/20">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Zero Plaintext Exposure · Secure Enclave Guarded</span>
                    </div>
                  </div>
                )}

                {activeStep === 2 && (
                  /* Step 2: Terminal Execution */
                  <div className="space-y-3 text-xs md:text-sm animate-in fade-in duration-300 text-[#F3EEE5]">
                    <div>
                      <span className="text-[#56B88A]">root@production</span>
                      <span className="text-[#74747A]">:</span>
                      <span className="text-[#75A9E8]">~</span>
                      <span className="text-[#74747A]">$</span> docker ps --filter &quot;status=running&quot;
                    </div>
                    <div className="p-3 rounded bg-[#131418] border border-[#1F2027] text-xs text-[#A6A39C] space-y-1">
                      <div className="text-[#74747A] text-[11px]">
                        ID       IMAGE           CREATED       STATUS       PORTS
                      </div>
                      <div className="text-[#F3EEE5]">
                        a2f31c   nginx:alpine    3 hours ago   Up 3 hours   443/tcp
                      </div>
                      <div className="text-[#F3EEE5]">
                        b8e44d   cendra/api:v1   2 days ago    Up 2 days    8080/tcp
                      </div>
                    </div>
                    <div>
                      <span className="text-[#56B88A]">root@production</span>
                      <span className="text-[#74747A]">:</span>
                      <span className="text-[#75A9E8]">~</span>
                      <span className="text-[#74747A]">$</span> nginx -t &amp;&amp; systemctl reload nginx
                      <div className="text-[#56B88A] pt-1">
                        nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
                        <br />
                        nginx: configuration file /etc/nginx/nginx.conf test is successful
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-[#56B88A]">root@production</span>
                      <span className="text-[#74747A]">:</span>
                      <span className="text-[#75A9E8]">~</span>
                      <span className="text-[#74747A]">$</span>
                      <span className="inline-block w-2.5 h-4 bg-[#F3EEE5] animate-cursor-blink ml-1.5" />
                    </div>
                  </div>
                )}

                {activeStep === 3 && (
                  /* Step 3: SFTP File Synchronization */
                  <div className="space-y-4 animate-in fade-in duration-300">
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      {/* Local Workspace Panel */}
                      <div className="p-3 rounded-lg bg-[#141519] border border-[#222329]">
                        <div className="text-[10px] text-[#74747A] uppercase mb-2">LOCAL MAC</div>
                        <div className="space-y-1 text-[11px] text-[#A6A39C]">
                          <div className="text-[#F3EEE5] flex items-center space-x-1.5">
                            <FileCode className="w-3.5 h-3.5 text-[#75A9E8]" />
                            <span>nginx.conf</span>
                          </div>
                          <div className="flex items-center space-x-1.5">
                            <FileCode className="w-3.5 h-3.5 text-[#74747A]" />
                            <span>api-v1.env</span>
                          </div>
                        </div>
                      </div>

                      {/* Remote Server Panel */}
                      <div className="p-3 rounded-lg bg-[#141519] border border-[#222329]">
                        <div className="text-[10px] text-[#74747A] uppercase mb-2">
                          REMOTE /etc/nginx/conf.d
                        </div>
                        <div className="space-y-1 text-[11px] text-[#A6A39C]">
                          <div className="text-[#56B88A] flex items-center space-x-1.5">
                            <Check className="w-3.5 h-3.5 text-[#56B88A]" />
                            <span>nginx.conf ({sftpTransferPct === 100 ? "SYNCED" : "UPLOADING"})</span>
                          </div>
                          <div className="flex items-center space-x-1.5">
                            <FileCode className="w-3.5 h-3.5 text-[#74747A]" />
                            <span>default.conf</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Transfer Progress Status */}
                    <div className="p-3 rounded-lg bg-[#141519] border border-[#262730] space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[#F3EEE5] font-semibold flex items-center space-x-1.5">
                          <UploadCloud className="w-3.5 h-3.5 text-[#56B88A]" />
                          <span>nginx.conf &rarr; prod-api-01</span>
                        </span>
                        <span className="text-[#56B88A] font-mono">{sftpTransferPct}% · 4.2 KB/s</span>
                      </div>
                      <div className="w-full bg-[#0B0C0F] rounded-full h-1.5 overflow-hidden">
                        <div
                          className="bg-[#56B88A] h-1.5 rounded-full transition-all duration-200"
                          style={{ width: `${sftpTransferPct}%` }}
                        />
                      </div>
                      <div className="text-[10px] text-[#74747A] flex justify-between">
                        <span>Chunk {Math.round((sftpTransferPct / 100) * 16)}/16 verified</span>
                        <span>0.04s transfer time</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default InteractiveProductStory;
