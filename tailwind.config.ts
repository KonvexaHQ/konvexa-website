import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        void: "#F8F5EF",        // Primary Background — Warm Ivory
        signal: "#1F1A17",      // Primary Text — Rich Charcoal
        surface: {
          DEFAULT: "#FFFFFF",   // Card Background — Pure White
          raised: "#FAF8F4",    // Slightly lifted surface
        },
        border: {
          DEFAULT: "#E8DFD2",   // Borders — Soft Beige
          subtle: "#F0EAE0",
        },
        muted: "#6F6A63",       // Secondary Text — Slate Gray
        scan: "#8B6F47",        // Accent Brown — links, highlights
        breach: "#A0522D",      // Accent Dark Brown — warnings
        clear: "#5C7A5C",       // Success Green — muted
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        content: "1140px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        "fade-in": "fade-in 0.5s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
