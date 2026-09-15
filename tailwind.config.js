/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#070a0f",
          900: "#0a0e14",
          850: "#0e131b",
          800: "#131922",
          700: "#1b2330",
          600: "#28313f",
        },
        signal: {
          DEFAULT: "#4fd1c5", // marine cyan
          bright: "#5eead4",
          deep: "#0d9488",
        },
        amber: {
          soft: "#f0b429",
        },
        paper: "#e8edf2",
        muted: "#8b97a6",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "'SF Mono'", "Menlo", "monospace"],
      },
      keyframes: {
        "flow": {
          "0%": { strokeDashoffset: "40" },
          "100%": { strokeDashoffset: "0" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
      },
      animation: {
        flow: "flow 1.4s linear infinite",
        "pulse-dot": "pulse-dot 2.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
