import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "var(--cendra-brand)",
          muted: "rgba(243, 238, 229, 0.7)",
          subtle: "rgba(243, 238, 229, 0.12)",
          faint: "rgba(243, 238, 229, 0.05)",
        },
        cendra: {
          bg: {
            primary: "var(--bg-primary)",
            secondary: "var(--bg-secondary)",
            elevated: "var(--bg-elevated)",
            hover: "var(--bg-hover)",
          },
          border: {
            default: "var(--border-default)",
            strong: "var(--border-strong)",
          },
          text: {
            primary: "var(--text-primary)",
            secondary: "var(--text-secondary)",
            muted: "var(--text-muted)",
          },
          status: {
            success: "var(--success)",
            warning: "var(--warning)",
            danger: "var(--danger)",
            info: "var(--info)",
          },
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
      boxShadow: {
        "cendra-window":
          "0 0 0 1px rgba(255, 255, 255, 0.08), 0 24px 68px -12px rgba(0, 0, 0, 0.75), 0 48px 120px -20px rgba(0, 0, 0, 0.9)",
        "cendra-glow": "0 0 40px -10px rgba(243, 238, 229, 0.12)",
        "cendra-card":
          "0 0 0 1px var(--border-default), 0 12px 32px -8px rgba(0, 0, 0, 0.5)",
      },
      animation: {
        "cursor-blink": "blink 1s cubic-bezier(0, 0, 0.2, 1) infinite",
        "pulse-subtle": "pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
