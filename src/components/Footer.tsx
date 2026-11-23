import React from "react";
import { CendraLogo } from "./CendraLogo";
import { Github, Twitter, ShieldCheck, Terminal, Disc as Discord } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B0C0F] border-t border-[#1C1D22] text-[#A6A39C] text-xs pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          {/* Brand Col */}
          <div className="col-span-2 space-y-4">
            <a href="/" className="inline-flex items-center space-x-3 text-[#F3EEE5]">
              <CendraLogo size={28} variant="squircle" animateCursor />
              <span className="font-bold tracking-tight text-base text-[#F3EEE5]">CENDRA</span>
            </a>
            <p className="text-sm text-[#74747A] max-w-sm leading-relaxed">
              A focused workspace for every server, connection and terminal. Minimal,
              uncompromisingly technical, and engineered for quiet developer flow.
            </p>
            <div className="inline-flex items-center space-x-2 text-[11px] font-mono text-[#56B88A] bg-[#56B88A]/10 px-2.5 py-1 rounded-md border border-[#56B88A]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#56B88A] animate-pulse" />
              <span>All Systems Operational · v1.4.2</span>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <div className="font-mono text-xs uppercase tracking-wider text-[#F3EEE5] mb-3">
              Product
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#product-showcase" className="hover:text-[#F3EEE5] transition-colors">
                  Desktop Workspace
                </a>
              </li>
              <li>
                <a href="#interactive-story" className="hover:text-[#F3EEE5] transition-colors">
                  Workflow Story
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-[#F3EEE5] transition-colors">
                  Server Fleet
                </a>
              </li>
              <li>
                <a href="#terminal-showcase" className="hover:text-[#F3EEE5] transition-colors">
                  Terminal Engine
                </a>
              </li>
              <li>
                <a href="#security" className="hover:text-[#F3EEE5] transition-colors">
                  Security Model
                </a>
              </li>
            </ul>
          </div>

          {/* Resources & Docs */}
          <div>
            <div className="font-mono text-xs uppercase tracking-wider text-[#F3EEE5] mb-3">
              Resources
            </div>
            <ul className="space-y-2">
              <li>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-[#F3EEE5] transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-[#F3EEE5] transition-colors">
                  CLI Reference
                </a>
              </li>
              <li>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-[#F3EEE5] transition-colors">
                  OpenSSH Config Spec
                </a>
              </li>
              <li>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-[#F3EEE5] transition-colors">
                  Release Notes
                </a>
              </li>
              <li>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-[#F3EEE5] transition-colors">
                  Security Bug Bounty
                </a>
              </li>
            </ul>
          </div>

          {/* Community & Legal */}
          <div>
            <div className="font-mono text-xs uppercase tracking-wider text-[#F3EEE5] mb-3">
              Community
            </div>
            <ul className="space-y-2">
              <li>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-[#F3EEE5] transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-[#F3EEE5] transition-colors">
                  X / Twitter
                </a>
              </li>
              <li>
                <a href="https://discord.com" target="_blank" rel="noreferrer" className="hover:text-[#F3EEE5] transition-colors">
                  Discord
                </a>
              </li>
              <li>
                <a href="#security" className="hover:text-[#F3EEE5] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#security" className="hover:text-[#F3EEE5] transition-colors">
                  MIT License
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#1C1D22] flex flex-col sm:flex-row items-center justify-between text-[#74747A] text-[11px] font-mono gap-4">
          <div>
            &copy; {new Date().getFullYear()} Cendra Technologies. Built with precision for developers.
          </div>
          <div className="flex items-center space-x-4">
            <span>Terminal Minimal Design</span>
            <span>·</span>
            <span>OpenSSH Protocol 2.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
