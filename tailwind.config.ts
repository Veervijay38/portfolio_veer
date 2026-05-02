import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-dm-sans)", "sans-serif"],
        display: ["var(--font-syne)", "sans-serif"],
        mono: ["var(--font-fira-code)", "monospace"],
      },
      colors: {
        bg: "#0A0A0F",
        surface: "#111118",
        card: "#16161E",
        border: "#2A2A38",
        accent: "#6C63FF",
        "accent-light": "#8B85FF",
        "accent-glow": "rgba(108,99,255,0.15)",
        muted: "#6B7280",
        subtle: "#374151",
        text: "#F1F0FF",
        "text-secondary": "#9CA3AF",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "grid-pattern":
          "linear-gradient(rgba(108,99,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(108,99,255,0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        float: "float 6s ease-in-out infinite",
        glow: "glow 3s ease-in-out infinite",
        "slide-in": "slideIn 0.5s ease forwards",
        typewriter: 'typewriter 2s steps(20) forwards',
        caret: 'blink 1s step-end infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        typewriter: {
          to: { width: '100%' },
        },
        blink: {
          '50%': { borderColor: 'transparent' },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        glow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        slideIn: {
          from: { opacity: "0", transform: "translateX(-20px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
      },

    },
  },
  plugins: [],
};

export default config;
