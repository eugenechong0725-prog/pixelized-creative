import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#f0f3f8",
          100: "#d9e0ec",
          200: "#b3c1d9",
          300: "#7a93b8",
          400: "#4a6a96",
          500: "#2f4d7a",
          600: "#1e3558",
          700: "#152844",
          800: "#0f1c30",
          900: "#0a1320",
          950: "#060c14",
        },
        brand: {
          cyan: "#00c2d4",
          "cyan-dark": "#0099a8",
          magenta: "#e91e8c",
          orange: "#ff6b2c",
          yellow: "#ffd400",
        },
        accent: {
          DEFAULT: "#00c2d4",
          light: "#33d4e3",
          bright: "#00a8b8",
          cyan: "#00c2d4",
        },
        cream: "#f7f8fa",
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
        display: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 24px -4px rgba(15, 28, 48, 0.08)",
        card: "0 8px 32px -8px rgba(15, 28, 48, 0.12)",
        glow: "0 8px 40px -8px rgba(0, 194, 212, 0.35)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
