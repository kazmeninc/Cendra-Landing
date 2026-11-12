"use client";

import React, { useState, useEffect, useRef, MouseEvent } from "react";
import {
  Server,
  Key,
  FolderTree,
  Network,
  Terminal,
  Circle,
  Plus,
  Search,
  ChevronRight,
  ShieldCheck,
  Activity,
  Cpu,
  HardDrive,
  Copy,
  Check,
  Radio,
  Sliders,
  Settings,
  Sparkles,
} from "lucide-react";
import { CendraLogo } from "./CendraLogo";
import CommandPalette from "./CommandPalette";

interface Tab {
  id: string;
  name: string;
  host: string;
  ip: string;
  latency: number;
  active: boolean;
  type: "ssh" | "tunnel" | "local";
}

export const DesktopAppPreview: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState("tab-prod-1");
  const [copiedCmd, setCopiedCmd] = useState(false);
  const [cmdPaletteOpen, setCmdPaletteOpen] = useState(false);
  const [latencyJitter, setLatencyJitter] = useState(18);
  const [isHoveredTraffic, setIsHoveredTraffic] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // 3D Parallax Tilt state
  const windowRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  // Fluctuate latency slightly for realism
  useEffect(() => {
    const timer = setInterval(() => {
      setLatencyJitter((prev) => {
        const delta = Math.floor(Math.random() * 3) - 1; // -1, 0, or 1
        return Math.max(15, Math.min(22, prev + delta));
      });
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const handleTabChange = (newTabId: string) => {
    if (newTabId === activeTabId) return;
    setIsTransitioning(true);
    setActiveTabId(newTabId);
    setTimeout(() => setIsTransitioning(false), 160);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!windowRef.current) return;
    const rect = windowRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Subtle tilt: max 2.5 degrees for Apple-style restraint
    const rotateX = ((y - centerY) / centerY) * -2.5;
    const rotateY = ((x - centerX) / centerX) * 2.5;

    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  const tabs: Tab[] = [
    {
      id: "tab-prod-1",
      name: "prod-api-01",
      host: "eu-central-1",
      ip: "10.0.12.44",
      latency: latencyJitter,
      active: activeTabId === "tab-prod-1",
      type: "ssh",
    },
    {
      id: "tab-stage-1",
      name: "staging-worker",
      host: "us-east-1",
      ip: "172.16.4.19",
      latency: 24,
      active: activeTabId === "tab-stage-1",
      type: "ssh",
    },
    {
      id: "tab-pg-1",
      name: "pg-master-01",
      host: "eu-west-1",
      ip: "10.0.88.2",
      latency: 12,
      active: activeTabId === "tab-pg-1",
      type: "tunnel",
    },
  ];

  return (
    <>
      <CommandPalette
        isOpen={cmdPaletteOpen}
        onClose={() => setCmdPaletteOpen(false)}
        onSelectHost={(hostId) => handleTabChange(hostId)}
      />

      <div
        ref={windowRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1200px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
          transition: "transform 240ms cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        className="w-full rounded-2xl border border-[#2B2C32] bg-[#0E0F13] shadow-cendra-window overflow-hidden relative group"
      >
        {/* Subtle Rim Highlight & Lighting Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none -z-0" />

        {/* macOS Window Title Bar */}
        <div className="relative z-10 flex items-center justify-between px-4 py-2.5 bg-[#141519] border-b border-[#25262C] select-none">
          {/* Left: Traffic Light Buttons with subtle hover glyphs */}
          <div
            className="flex items-center space-x-2 w-28 cursor-pointer"
            onMouseEnter={() => setIsHoveredTraffic(true)}
            onMouseLeave={() => setIsHoveredTraffic(false)}
          >
            <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E] flex items-center justify-center text-[8px] font-bold text-black/60 transition-transform active:scale-90">
              {isHoveredTraffic && "×"}
            </div>
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123] flex items-center justify-center text-[8px] font-bold text-black/60 transition-transform active:scale-90">
              {isHoveredTraffic && "−"}
            </div>
            <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29] flex items-center justify-center text-[8px] font-bold text-black/60 transition-transform active:scale-90">
              {isHoveredTraffic && "+"}
            </div>
          </div>

          {/* Center: Breadcrumb and Session Info */}
          <div className="flex items-center space-x-2 text-xs font-mono text-[#A6A39C]">
            <span className="flex items-center text-[#56B88A]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#56B88A] mr-1.5 animate-pulse" />
              CONNECTED
            </span>
            <span className="text-[#3A3B42]">/</span>
            <span className="text-[#F3EEE5] font-medium">prod-api-01.infra.cendra.internal</span>
            <span className="text-[#74747A] hidden sm:inline">(session 0x8f2a)</span>
          </div>

          {/* Right: Quick Command Palette Trigger Button */}
          <div className="flex items-center justify-end space-x-2 w-28 text-[#74747A]">
            <button
              id="cmd-k-trigger"
              onClick={() => setCmdPaletteOpen(true)}
              className="btn-pressable flex items-center space-x-1 text-[11px] font-mono px-2 py-0.5 rounded bg-[#1C1D22] border border-[#2B2C32] hover:border-[#3A3B45] text-[#A6A39C] hover:text-[#F3EEE5] transition-all"
              title="Open Command Palette (⌘K)"
            >
              <span>⌘K</span>
            </button>
          </div>
        </div>

        {/* Main Workspace Frame */}
        <div className="relative z-10 flex flex-col lg:flex-row min-h-[440px] md:min-h-[500px]">
          {/* Left Sidebar: Host Navigation & Groups */}
          <div className="w-full lg:w-64 bg-[#111216] border-r border-[#222329] p-3 flex flex-col justify-between text-xs select-none">
            <div>
              {/* Workspace Header */}
              <div
                onClick={() => setCmdPaletteOpen(true)}
                className="flex items-center justify-between px-2.5 py-1.5 mb-2 rounded-lg bg-[#18191F] border border-[#262730] hover:border-[#33353F] cursor-pointer transition-all"
              >
                <div className="flex items-center space-x-2">
                  <CendraLogo size={16} variant="mark" />
                  <span className="font-semibold text-[#F3EEE5] tracking-tight">Core Infrastructure</span>
                </div>
                <ChevronRight className="w-3.5 h-3.5 text-[#74747A]" />
              </div>

              {/* Search Filter */}
              <div
                onClick={() => setCmdPaletteOpen(true)}
                className="relative mb-3 cursor-pointer group/search"
              >
                <Search className="w-3.5 h-3.5 absolute left-2.5 top-2 text-[#74747A] group-hover/search:text-[#A6A39C] transition-colors" />
                <input
                  type="text"
                  placeholder="Search hosts, keys, ports..."
                  readOnly
                  value=""
                  className="w-full pl-8 pr-2 py-1 bg-[#141519] border border-[#222329] group-hover/search:border-[#2F3039] rounded-md text-[11px] text-[#A6A39C] placeholder-[#74747A] cursor-pointer focus:outline-none transition-colors"
                />
              </div>

              {/* Navigation Groups */}
              <div className="space-y-4">
                {/* Production Servers */}
                <div>
                  <div className="flex items-center justify-between px-2 text-[10px] font-mono uppercase tracking-wider text-[#74747A] mb-1">
                    <span>Production (3)</span>
                    <span className="text-[#56B88A]">● 3 live</span>
                  </div>
                  <div className="space-y-0.5">
                    <button
                      onClick={() => handleTabChange("tab-prod-1")}
                      className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-md text-left transition-all ${
                        activeTabId === "tab-prod-1"
                          ? "bg-[#1C1D22] text-[#F3EEE5] border border-[#2F3038] shadow-sm translate-x-0.5"
                          : "text-[#A6A39C] hover:bg-[#16171D] hover:text-[#F3EEE5]"
                      }`}
                    >
                      <div className="flex items-center space-x-2 truncate">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#56B88A]" />
                        <span className="truncate font-mono">prod-api-01</span>
                      </div>
                      <span className="text-[10px] font-mono text-[#74747A]">{latencyJitter}ms</span>
                    </button>

                    <button
                      onClick={() => handleTabChange("tab-pg-1")}
                      className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-md text-left transition-all ${
                        activeTabId === "tab-pg-1"
                          ? "bg-[#1C1D22] text-[#F3EEE5] border border-[#2F3038] shadow-sm translate-x-0.5"
                          : "text-[#A6A39C] hover:bg-[#16171D] hover:text-[#F3EEE5]"
                      }`}
                    >
                      <div className="flex items-center space-x-2 truncate">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#56B88A]" />
                        <span className="truncate font-mono">pg-master-01</span>
                      </div>
                      <span className="text-[10px] font-mono text-[#74747A]">12ms</span>
                    </button>

                    <div
                      onClick={() => handleTabChange("tab-prod-1")}
                      className="w-full flex items-center justify-between px-2.5 py-1.5 rounded-md text-[#74747A] hover:bg-[#16171D] hover:text-[#A6A39C] cursor-pointer transition-colors"
                    >
                      <div className="flex items-center space-x-2 truncate">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#56B88A]" />
                        <span className="truncate font-mono">redis-cache-03</span>
                      </div>
                      <span className="text-[10px] font-mono text-[#74747A]">21ms</span>
                    </div>
                  </div>
                </div>

                {/* Staging Servers */}
                <div>
                  <div className="flex items-center justify-between px-2 text-[10px] font-mono uppercase tracking-wider text-[#74747A] mb-1">
                    <span>Staging (2)</span>
                    <span className="text-[#E8B45C]">● 1 live</span>
                  </div>
                  <div className="space-y-0.5">
                    <button
                      onClick={() => handleTabChange("tab-stage-1")}
                      className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-md text-left transition-all ${
                        activeTabId === "tab-stage-1"
                          ? "bg-[#1C1D22] text-[#F3EEE5] border border-[#2F3038] shadow-sm translate-x-0.5"
                          : "text-[#A6A39C] hover:bg-[#16171D] hover:text-[#F3EEE5]"
                      }`}
                    >
                      <div className="flex items-center space-x-2 truncate">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E8B45C]" />
                        <span className="truncate font-mono">staging-worker</span>
                      </div>
                      <span className="text-[10px] font-mono text-[#74747A]">24ms</span>
                    </button>
                  </div>
                </div>

                {/* Security & Tools */}
                <div>
                  <div className="px-2 text-[10px] font-mono uppercase tracking-wider text-[#74747A] mb-1">
                    Workspace Tools
                  </div>
                  <div className="space-y-0.5">
                    <div
                      onClick={() => setCmdPaletteOpen(true)}
                      className="flex items-center space-x-2 px-2.5 py-1.5 rounded text-[#A6A39C] hover:text-[#F3EEE5] hover:bg-[#16171D] cursor-pointer transition-colors"
                    >
                      <Key className="w-3.5 h-3.5 text-[#E8B45C]" />
                      <span>SSH Keys (Ed25519)</span>
                    </div>
                    <div
                      onClick={() => setCmdPaletteOpen(true)}
                      className="flex items-center space-x-2 px-2.5 py-1.5 rounded text-[#A6A39C] hover:text-[#F3EEE5] hover:bg-[#16171D] cursor-pointer transition-colors"
                    >
                      <FolderTree className="w-3.5 h-3.5 text-[#75A9E8]" />
                      <span>SFTP Browser</span>
                    </div>
                    <div
                      onClick={() => handleTabChange("tab-pg-1")}
                      className="flex items-center space-x-2 px-2.5 py-1.5 rounded text-[#A6A39C] hover:text-[#F3EEE5] hover:bg-[#16171D] cursor-pointer transition-colors"
                    >
                      <Network className="w-3.5 h-3.5 text-[#56B88A]" />
                      <span>Port Forwarding (2)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* User Identity / Host Footprint */}
            <div className="pt-3 border-t border-[#222329] flex items-center justify-between text-[#74747A]">
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 rounded bg-[#1C1D22] border border-[#2B2C32] flex items-center justify-center text-[10px] font-mono text-[#F3EEE5]">
                  🔒
                </div>
                <div className="leading-tight">
                  <p className="text-[11px] text-[#F3EEE5] font-mono">ed25519-sk</p>
                  <p className="text-[9px] text-[#74747A]">YubiKey FIDO2</p>
                </div>
              </div>
              <span className="text-[10px] font-mono text-[#56B88A] bg-[#56B88A]/10 px-1.5 py-0.5 rounded border border-[#56B88A]/20">
                SECURE
              </span>
            </div>
          </div>

          {/* Main Terminal Area */}
          <div className="flex-1 flex flex-col bg-[#0B0C0F]">
            {/* Tab Bar */}
            <div className="flex items-center bg-[#131418] border-b border-[#222329] px-2 pt-1.5 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-t-lg text-xs font-mono border-t border-x transition-all duration-150 mr-1 ${
                    tab.active
                      ? "bg-[#0B0C0F] text-[#F3EEE5] border-[#2B2C32] border-b-transparent shadow-sm"
                      : "bg-[#16171D] text-[#74747A] border-transparent hover:text-[#A6A39C] hover:bg-[#181920]"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      tab.type === "tunnel"
                        ? "bg-[#75A9E8]"
                        : tab.id === "tab-stage-1"
                        ? "bg-[#E8B45C]"
                        : "bg-[#56B88A]"
                    }`}
                  />
                  <span>{tab.name}</span>
                  <span className="text-[10px] text-[#54555E]">{tab.latency}ms</span>
                </button>
              ))}

              <button
                onClick={() => setCmdPaletteOpen(true)}
                className="p-1.5 text-[#74747A] hover:text-[#F3EEE5] hover:bg-[#1C1D22] rounded-md transition-colors ml-1"
                title="Open New Tab or Session"
                aria-label="Open New Tab"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Active Terminal Screen with smooth blur transition */}
            <div
              className={`flex-1 p-4 md:p-6 font-mono text-xs md:text-sm leading-relaxed overflow-y-auto select-text text-[#E5E0D8] transition-all duration-150 ${
                isTransitioning ? "filter blur-[2px] opacity-75" : "filter blur-0 opacity-100"
              }`}
            >
              {activeTabId === "tab-prod-1" && (
                <div className="space-y-3">
                  <div className="text-[#74747A] text-[11px] pb-1 border-b border-[#1C1D22]">
                    cendra: authenticated via publickey (ed25519-sk) to prod-api-01 (10.0.12.44)
                    <br />
                    Linux production 6.5.0-35-generic #35-Ubuntu SMP PREEMPT_DYNAMIC x86_64
                  </div>

                  <div>
                    <span className="text-[#56B88A]">root@production</span>
                    <span className="text-[#74747A]">:</span>
                    <span className="text-[#75A9E8]">~</span>
                    <span className="text-[#74747A]">$</span> whoami
                    <div className="text-[#F3EEE5] pl-2 font-semibold">root</div>
                  </div>

                  <div>
                    <span className="text-[#56B88A]">root@production</span>
                    <span className="text-[#74747A]">:</span>
                    <span className="text-[#75A9E8]">~</span>
                    <span className="text-[#74747A]">$</span> uptime
                    <div className="text-[#A6A39C] pl-2">
                      20:18 up 14 days, 3:42, 2 users, load average: 0.18, 0.22, 0.25
                    </div>
                  </div>

                  <div>
                    <span className="text-[#56B88A]">root@production</span>
                    <span className="text-[#74747A]">:</span>
                    <span className="text-[#75A9E8]">~</span>
                    <span className="text-[#74747A]">$</span> docker ps
                    <div className="pt-1.5 pl-2 overflow-x-auto text-[11px] md:text-xs">
                      <table className="w-full text-left font-mono border-collapse">
                        <thead>
                          <tr className="text-[#74747A] border-b border-[#1C1D22]">
                            <th className="pb-1 pr-4 font-normal">CONTAINER ID</th>
                            <th className="pb-1 pr-4 font-normal">IMAGE</th>
                            <th className="pb-1 pr-4 font-normal">COMMAND</th>
                            <th className="pb-1 pr-4 font-normal">STATUS</th>
                            <th className="pb-1 font-normal">PORTS</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#16171E] text-[#D8D4CC]">
                          <tr className="hover:bg-[#131418] transition-colors">
                            <td className="py-1 pr-4 text-[#75A9E8]">a2f31c9e81b2</td>
                            <td className="py-1 pr-4 text-[#E8B45C]">nginx:alpine</td>
                            <td className="py-1 pr-4 text-[#74747A] truncate max-w-[120px]">
                              &quot;/docker-entrypoint.…&quot;
                            </td>
                            <td className="py-1 pr-4 text-[#56B88A]">Up 3 hours</td>
                            <td className="py-1 text-[#A6A39C]">0.0.0.0:443-&gt;443/tcp</td>
                          </tr>
                          <tr className="hover:bg-[#131418] transition-colors">
                            <td className="py-1 pr-4 text-[#75A9E8]">b8e44d101a07</td>
                            <td className="py-1 pr-4 text-[#E8B45C]">cendra/api:v1</td>
                            <td className="py-1 pr-4 text-[#74747A] truncate max-w-[120px]">
                              &quot;./server --port=8080&quot;
                            </td>
                            <td className="py-1 pr-4 text-[#56B88A]">Up 2 days</td>
                            <td className="py-1 text-[#A6A39C]">127.0.0.1:8080-&gt;8080/tcp</td>
                          </tr>
                          <tr className="hover:bg-[#131418] transition-colors">
                            <td className="py-1 pr-4 text-[#75A9E8]">74d9e03fa621</td>
                            <td className="py-1 pr-4 text-[#E8B45C]">redis:7.2</td>
                            <td className="py-1 pr-4 text-[#74747A] truncate max-w-[120px]">
                              &quot;docker-entrypoint.s…&quot;
                            </td>
                            <td className="py-1 pr-4 text-[#56B88A]">Up 14 days</td>
                            <td className="py-1 text-[#A6A39C]">127.0.0.1:6379-&gt;6379/tcp</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="flex items-center space-x-1 pt-1">
                    <span className="text-[#56B88A]">root@production</span>
                    <span className="text-[#74747A]">:</span>
                    <span className="text-[#75A9E8]">~</span>
                    <span className="text-[#74747A]">$</span>
                    <span className="inline-block w-2.5 h-4 bg-[#F3EEE5] animate-cursor-blink ml-1.5" />
                  </div>
                </div>
              )}

              {activeTabId === "tab-stage-1" && (
                <div className="space-y-3">
                  <div className="text-[#74747A] text-[11px] pb-1 border-b border-[#1C1D22]">
                    cendra: connected to staging-worker.infra.cendra.internal (172.16.4.19)
                  </div>
                  <div>
                    <span className="text-[#E8B45C]">deploy@staging-worker</span>
                    <span className="text-[#74747A]">:</span>
                    <span className="text-[#75A9E8]">/opt/cendra</span>
                    <span className="text-[#74747A]">$</span> git status
                    <div className="text-[#56B88A] pl-2">
                      On branch main. Your branch is up to date with &apos;origin/main&apos;.
                      <br />
                      nothing to commit, working tree clean
                    </div>
                  </div>
                  <div>
                    <span className="text-[#E8B45C]">deploy@staging-worker</span>
                    <span className="text-[#74747A]">:</span>
                    <span className="text-[#75A9E8]">/opt/cendra</span>
                    <span className="text-[#74747A]">$</span> pnpm test:integration
                    <div className="text-[#A6A39C] pl-2">
                      ✓ 48 test suites passed (0 failures)
                      <br />
                      Execution time: 3.412s
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 pt-1">
                    <span className="text-[#E8B45C]">deploy@staging-worker</span>
                    <span className="text-[#74747A]">:</span>
                    <span className="text-[#75A9E8]">/opt/cendra</span>
                    <span className="text-[#74747A]">$</span>
                    <span className="inline-block w-2.5 h-4 bg-[#F3EEE5] animate-cursor-blink ml-1.5" />
                  </div>
                </div>
              )}

              {activeTabId === "tab-pg-1" && (
                <div className="space-y-3">
                  <div className="text-[#74747A] text-[11px] pb-1 border-b border-[#1C1D22]">
                    cendra tunnel active: localhost:5432 -&gt; pg-master-01:5432 (via bastion-01)
                  </div>
                  <div>
                    <span className="text-[#75A9E8]">postgres@pg-master-01</span>
                    <span className="text-[#74747A]">:</span>
                    <span className="text-[#75A9E8]">~</span>
                    <span className="text-[#74747A]">$</span> psql -c &quot;SELECT datname, numbackends FROM pg_stat_database WHERE datname=&apos;cendra_prod&apos;;&quot;
                    <div className="text-[#A6A39C] pl-2 font-mono">
                      +-------------+-------------+
                      <br />
                      | datname     | numbackends |
                      <br />
                      +-------------+-------------+
                      <br />
                      | cendra_prod | 42          |
                      <br />
                      +-------------+-------------+
                      <br />
                      (1 row)
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 pt-1">
                    <span className="text-[#75A9E8]">postgres@pg-master-01</span>
                    <span className="text-[#74747A]">:</span>
                    <span className="text-[#75A9E8]">~</span>
                    <span className="text-[#74747A]">$</span>
                    <span className="inline-block w-2.5 h-4 bg-[#F3EEE5] animate-cursor-blink ml-1.5" />
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Status Bar */}
            <div className="flex flex-wrap items-center justify-between px-4 py-2 bg-[#111216] border-t border-[#222329] text-[11px] font-mono text-[#74747A] select-none">
              <div className="flex items-center space-x-3">
                <span className="text-[#A6A39C] flex items-center">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#56B88A] mr-1" />
                  chacha20-poly1305@openssh.com
                </span>
                <span className="text-[#3A3B42]">|</span>
                <span>OpenSSH 9.6p1</span>
              </div>

              <div className="flex items-center space-x-3">
                <span className="flex items-center text-[#56B88A]">
                  <Activity className="w-3.5 h-3.5 mr-1" />
                  {latencyJitter}ms
                </span>
                <span className="text-[#3A3B42]">|</span>
                <span className="hidden sm:inline">CPU 14%</span>
                <span className="text-[#3A3B42] hidden sm:inline">|</span>
                <span className="hidden sm:inline">RAM 4.2GB / 16GB</span>
                <span className="text-[#3A3B42] hidden sm:inline">|</span>
                <span>UTF-8</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopAppPreview;
