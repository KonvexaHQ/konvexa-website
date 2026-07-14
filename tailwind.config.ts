import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        void: "#F8F5EF",
        signal: "#1F1A17",
        gold: "#C8A97E",
        surface: {
          DEFAULT: "#FFFFFF",
          raised: "#FAF8F4",
        },
        border: {
          DEFAULT: "#E5E2DA",
          subtle: "#F0EAE0",
          dark: "#2D2923",
        },
        muted: "#6F6A63",
        scan: "#8B6F47",
        breach: "#A0522D",
        clear: "#5C7A5C",
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
