"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Terminal,
  Play,
  RotateCcw,
  Copy,
  Check,
  Shield,
  Activity,
  Sparkles,
  Command,
} from "lucide-react";
import SpotlightCard from "./SpotlightCard";
import ScrollReveal from "./ScrollReveal";

interface TerminalHistoryItem {
  command: string;
  output: React.ReactNode;
}

export const TerminalShowcase: React.FC = () => {
  const terminalScrollContainerRef = useRef<HTMLDivElement>(null);
  const isInitialMount = useRef(true);

  const [history, setHistory] = useState<TerminalHistoryItem[]>([
    {
      command: "ssh production",
      output: (
        <div className="text-[#A6A39C] space-y-1">
          <div className="text-[#74747A]">Connecting to prod-api-01.infra.cendra.internal...</div>
          <div className="text-[#56B88A]">
            Authenticated via ED25519-SK (YubiKey FIDO2) · Latency: 18ms
          </div>
          <div>Welcome to Ubuntu 22.04 LTS (GNU/Linux 6.5.0-35-generic x86_64)</div>
        </div>
      ),
    },
    {
      command: "docker ps",
      output: (
        <div className="pt-1 text-xs font-mono">
          <div className="text-[#74747A]">CONTAINER ID   IMAGE           COMMAND                  STATUS         PORTS</div>
          <div className="text-[#F3EEE5]">a2f31c9e81b2   nginx:alpine    &quot;/docker-entrypoint…&quot;   Up 3 hours     0.0.0.0:443-&gt;443/tcp</div>
          <div className="text-[#F3EEE5]">b8e44d101a07   cendra/api:v1   &quot;./server --port=8080&quot;   Up 2 days      127.0.0.1:8080-&gt;8080/tcp</div>
          <div className="text-[#F3EEE5]">74d9e03fa621   redis:7.2       &quot;docker-entrypoint.s…&quot;   Up 14 days     127.0.0.1:6379-&gt;6379/tcp</div>
        </div>
      ),
    },
  ]);

  const [inputVal, setInputVal] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [copiedBuffer, setCopiedBuffer] = useState(false);

  const predefinedCommands = [
    {
      label: "docker ps",
      cmd: "docker ps",
      run: () => (
        <div className="pt-1 text-xs font-mono">
          <div className="text-[#74747A]">CONTAINER ID   IMAGE           COMMAND                  STATUS         PORTS</div>
          <div className="text-[#F3EEE5]">a2f31c9e81b2   nginx:alpine    &quot;/docker-entrypoint…&quot;   Up 3 hours     0.0.0.0:443-&gt;443/tcp</div>
          <div className="text-[#F3EEE5]">b8e44d101a07   cendra/api:v1   &quot;./server --port=8080&quot;   Up 2 days      127.0.0.1:8080-&gt;8080/tcp</div>
        </div>
      ),
    },
    {
      label: "sysinfo",
      cmd: "cendra sysinfo",
      run: () => (
        <div className="text-xs text-[#D8D4CC] space-y-1 font-mono pt-1">
          <div className="flex items-start space-x-4">
            <div className="text-[#56B88A] whitespace-pre select-none">
{`   ___
  / __|___ _ _  __| |_ _ __ _
 | (__/ -_) ' \\/ _\` | '_/ _\` |
  \\___\\___|_||_\\__,_|_| \\__,_|`}
            </div>
            <div className="space-y-0.5 text-[#A6A39C]">
              <div><span className="text-[#75A9E8]">OS</span>: Ubuntu 22.04.4 LTS x86_64</div>
              <div><span className="text-[#75A9E8]">Host</span>: Apple Silicon M3 Max / AWS EC2 c6i</div>
              <div><span className="text-[#75A9E8]">Kernel</span>: 6.5.0-35-generic</div>
              <div><span className="text-[#75A9E8]">Uptime</span>: 14 days, 3 hours, 42 mins</div>
              <div><span className="text-[#75A9E8]">Shell</span>: zsh 5.9 (x86_64-ubuntu-linux-gnu)</div>
              <div><span className="text-[#75A9E8]">Memory</span>: 4218MiB / 15982MiB (26%)</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "network mtr",
      cmd: "mtr -rw -c 3 prod-api-01",
      run: () => (
        <div className="text-xs font-mono space-y-0.5 text-[#A6A39C] pt-1">
          <div className="text-[#74747A]">HOST: macbook-pro.local      Loss%   Snt   Last   Avg  Best  Wrst</div>
          <div>  1.|-- 192.168.1.1           0.0%     3    1.2   1.4   1.1   1.8</div>
          <div>  2.|-- gateway.edge.cendra   0.0%     3    8.4   8.2   7.9   8.6</div>
          <div className="text-[#56B88A]">  3.|-- prod-api-01 (10.0.12) 0.0%     3   17.8  18.1  17.6  18.4</div>
        </div>
      ),
    },
    {
      label: "tail access.log",
      cmd: "tail -n 3 /var/log/nginx/access.log",
      run: () => (
        <div className="text-xs text-[#A6A39C] space-y-0.5">
          <div>10.0.12.1 - - [12/Nov/2026:20:18:39] &quot;GET /v1/health&quot; 200 42 &quot;-&quot; &quot;CendraHealth/1.4&quot;</div>
          <div>10.0.12.1 - - [12/Nov/2026:20:18:41] &quot;POST /v1/sync&quot; 204 0 &quot;-&quot; &quot;CendraClient/1.4.2&quot;</div>
          <div>10.0.12.4 - - [12/Nov/2026:20:18:43] &quot;GET /metrics&quot; 200 1284 &quot;-&quot; &quot;Prometheus/2.48&quot;</div>
        </div>
      ),
    },
  ];

  // Scroll only internally within the terminal viewport, NEVER scroll the browser window
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    if (terminalScrollContainerRef.current) {
      terminalScrollContainerRef.current.scrollTop =
        terminalScrollContainerRef.current.scrollHeight;
    }
  }, [history]);

  const runScriptedCommand = (commandText: string, outputNode: React.ReactNode) => {
    if (isTyping) return;
    setIsTyping(true);
    setInputVal("");

    let current = "";
    let i = 0;
    const interval = setInterval(() => {
      current += commandText[i];
      setInputVal(current);
      i++;
      if (i >= commandText.length) {
        clearInterval(interval);
        setTimeout(() => {
          setHistory((prev) => [...prev, { command: commandText, output: outputNode }]);
          setInputVal("");
          setIsTyping(false);
        }, 180);
      }
    }, 35);
  };

  const handleManualSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = inputVal.trim();
    if (!trimmed) return;

    if (trimmed === "clear") {
      setHistory([]);
      setInputVal("");
      return;
    }

    let output: React.ReactNode = (
      <div className="text-[#A6A39C]">
        cendra: command executed on prod-api-01 (exit code 0)
      </div>
    );

    if (trimmed === "help") {
      output = (
        <div className="text-xs text-[#74747A] space-y-1">
          <div>Available commands:</div>
          <div>• docker ps, uptime, sysinfo, whoami, clear, mtr, tail access.log</div>
        </div>
      );
    } else if (trimmed === "whoami") {
      output = <div className="text-[#56B88A]">root</div>;
    } else if (trimmed === "uptime") {
      output = <div className="text-[#56B88A]">20:18 up 14 days, 3:42, load average: 0.18, 0.22, 0.25</div>;
    }

    setHistory((prev) => [...prev, { command: trimmed, output }]);
    setInputVal("");
  };

  const copyEntireTerminalBuffer = () => {
    const raw = history
      .map((item) => `$ ${item.command}\n[output]`)
      .join("\n\n");
    navigator.clipboard.writeText(raw);
    setCopiedBuffer(true);
    setTimeout(() => setCopiedBuffer(false), 2000);
  };

  return (
    <section
      id="terminal-showcase"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#090A0C] border-t border-[#1C1D22] relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Editorial Heading with ScrollReveal */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-[#2B2C32] bg-[#141519] text-xs font-mono text-[#A6A39C] mb-4">
            <Terminal className="w-3.5 h-3.5 text-[#56B88A]" />
            <span>INTERACTIVE SCRIPTED CONSOLE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#F3EEE5] mb-5">
            LESS SWITCHING.
            <br />
            <span className="text-[#A6A39C]">MORE BUILDING.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#A6A39C] leading-relaxed">
            Run diagnostics, tail remote container logs and execute multi-hop pipelines
            with sub-millisecond responsiveness. Test the live interactive console below.
          </p>

          {/* Preset Command Runners */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            <span className="text-xs font-mono text-[#74747A] mr-2">Try scripts:</span>
            {predefinedCommands.map((item) => (
              <button
                key={item.label}
                disabled={isTyping}
                onClick={() => runScriptedCommand(item.cmd, item.run())}
                className="btn-pressable flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#141519] border border-[#2B2C32] hover:border-[#3A3B45] text-xs font-mono text-[#A6A39C] hover:text-[#F3EEE5] transition-all disabled:opacity-50"
              >
                <Play className="w-3 h-3 text-[#56B88A]" />
                <span>{item.label}</span>
              </button>
            ))}

            <button
              onClick={() => setHistory([])}
              className="btn-pressable flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#141519] border border-[#2B2C32] text-xs font-mono text-[#74747A] hover:text-[#E16D6D] transition-colors ml-2"
              title="Clear Terminal Output"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          </div>
        </ScrollReveal>

        {/* Large Cinematic Terminal Frame with Spotlight & ScrollReveal */}
        <ScrollReveal delay={120}>
          <SpotlightCard className="rounded-2xl border border-[#2B2C32] bg-[#0B0C0F] shadow-cendra-window overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#131418] border-b border-[#222329] select-none">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56]/80 hover:opacity-100 cursor-pointer" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E]/80 hover:opacity-100 cursor-pointer" />
                <span className="w-3 h-3 rounded-full bg-[#27C93F]/80 hover:opacity-100 cursor-pointer" />
                <span className="text-xs font-mono text-[#A6A39C] pl-3">
                  cendra :: production (session 0x8f2a)
                </span>
              </div>
              <div className="flex items-center space-x-3 text-xs font-mono text-[#74747A]">
                <span className="flex items-center text-[#56B88A]">
                  <Activity className="w-3.5 h-3.5 mr-1" />
                  18ms
                </span>
                <span className="text-[#3A3B42]">|</span>
                <button
                  onClick={copyEntireTerminalBuffer}
                  className="hover:text-[#F3EEE5] transition-colors flex items-center space-x-1"
                  title="Copy Terminal Buffer"
                >
                  {copiedBuffer ? (
                    <Check className="w-3.5 h-3.5 text-[#56B88A]" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                  <span>Copy</span>
                </button>
              </div>
            </div>

            {/* Terminal Console Viewport */}
            <div
              ref={terminalScrollContainerRef}
              className="p-5 md:p-6 font-mono text-xs md:text-sm leading-relaxed min-h-[340px] max-h-[460px] overflow-y-auto space-y-3.5"
            >
              {history.map((item, idx) => (
                <div key={idx} className="space-y-1.5 animate-in fade-in duration-150">
                  <div className="flex items-center space-x-2">
                    <span className="text-[#56B88A]">root@production</span>
                    <span className="text-[#74747A]">:</span>
                    <span className="text-[#75A9E8]">~</span>
                    <span className="text-[#74747A]">$</span>
                    <span className="text-[#F3EEE5] font-semibold">{item.command}</span>
                  </div>
                  <div className="pl-4">{item.output}</div>
                </div>
              ))}

              {/* Active Prompt Input */}
              <form onSubmit={handleManualSubmit} className="flex items-center space-x-2 pt-1">
                <span className="text-[#56B88A]">root@production</span>
                <span className="text-[#74747A]">:</span>
                <span className="text-[#75A9E8]">~</span>
                <span className="text-[#74747A]">$</span>
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  disabled={isTyping}
                  placeholder={isTyping ? "" : "type a command or click presets above..."}
                  className="flex-1 bg-transparent text-[#F3EEE5] focus:outline-none placeholder-[#3A3B42] font-mono text-xs md:text-sm"
                />
                {!isTyping && (
                  <span className="inline-block w-2.5 h-4 bg-[#F3EEE5] animate-cursor-blink ml-1" />
                )}
              </form>
            </div>

            {/* Bottom Bar */}
            <div className="px-4 py-2 bg-[#0F1014] border-t border-[#1C1D22] flex flex-wrap items-center justify-between text-[11px] font-mono text-[#74747A]">
              <div className="flex items-center space-x-2">
                <Shield className="w-3.5 h-3.5 text-[#56B88A]" />
                <span>Isolated Local Sandbox Engine · Zero Ingress Risk</span>
              </div>
              <div>
                <span>Press Enter or click presets above</span>
              </div>
            </div>
          </SpotlightCard>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TerminalShowcase;
