"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Search,
  Server,
  Terminal,
  Key,
  FolderTree,
  Network,
  X,
  ArrowRight,
  Shield,
  Zap,
} from "lucide-react";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectHost?: (hostId: string) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onSelectHost,
}) => {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Trigger open if closed
          const btn = document.getElementById("cmd-k-trigger");
          btn?.click();
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const items = [
    {
      id: "tab-prod-1",
      category: "Servers",
      title: "Connect to prod-api-01",
      subtitle: "10.0.12.44 · eu-central-1 · 18ms",
      icon: Server,
      badge: "LIVE",
    },
    {
      id: "tab-pg-1",
      category: "Servers",
      title: "Connect to pg-master-01",
      subtitle: "10.0.88.2 · eu-west-1 · 12ms",
      icon: Server,
      badge: "DB",
    },
    {
      id: "tab-stage-1",
      category: "Servers",
      title: "Connect to staging-worker",
      subtitle: "172.16.4.19 · us-east-1 · 24ms",
      icon: Server,
      badge: "STAGING",
    },
    {
      id: "cmd-docker",
      category: "Quick Actions",
      title: "Inspect Docker Containers",
      subtitle: "Runs 'docker ps' on active host",
      icon: Terminal,
      badge: "EXEC",
    },
    {
      id: "cmd-keys",
      category: "Quick Actions",
      title: "Audit SSH Keyrings",
      subtitle: "Verify ED25519-SK YubiKey hardware certificates",
      icon: Key,
      badge: "FIDO2",
    },
    {
      id: "cmd-sftp",
      category: "Quick Actions",
      title: "Open SFTP File Browser",
      subtitle: "Synchronize remote /var/www with local directory",
      icon: FolderTree,
      badge: "SFTP",
    },
    {
      id: "cmd-tunnel",
      category: "Quick Actions",
      title: "Forward Port: 5432 -> 5432",
      subtitle: "Local PostgreSQL tunnel via bastion-01",
      icon: Network,
      badge: "TUNNEL",
    },
  ];

  const filtered = items.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-150">
      <div
        className="relative w-full max-w-xl rounded-2xl bg-[#141519] border border-[#2B2C32] shadow-[0_25px_70px_rgba(0,0,0,0.85)] overflow-hidden animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Search Field */}
        <div className="flex items-center px-4 py-3 border-b border-[#222329]">
          <Search className="w-4 h-4 text-[#74747A] mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search hosts..."
            className="flex-1 bg-transparent text-sm text-[#F3EEE5] placeholder-[#74747A] focus:outline-none font-sans"
          />
          <button
            onClick={onClose}
            className="p-1 rounded text-[#74747A] hover:text-[#F3EEE5] hover:bg-[#1E2026] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="py-8 text-center text-xs font-mono text-[#74747A]">
              No hosts or commands found matching &quot;{query}&quot;
            </div>
          ) : (
            filtered.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    if (onSelectHost && item.category === "Servers") {
                      onSelectHost(item.id);
                    }
                    onClose();
                  }}
                  className="w-full flex items-center justify-between p-2.5 rounded-lg text-left hover:bg-[#1C1D23] transition-colors group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-1.5 rounded-md bg-[#181920] border border-[#262730] text-[#A6A39C] group-hover:text-[#F3EEE5] transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-[#F3EEE5] font-sans">
                        {item.title}
                      </div>
                      <div className="text-[11px] font-mono text-[#74747A]">
                        {item.subtitle}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-mono text-[#74747A] border border-[#2B2C32] px-1.5 py-0.5 rounded bg-[#111216]">
                      {item.badge}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#74747A] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 bg-[#0F1014] border-t border-[#222329] flex items-center justify-between text-[11px] font-mono text-[#74747A]">
          <span>Navigate with ↑↓ · Select with ↵</span>
          <span>ESC to close</span>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;

