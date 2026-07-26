import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0D1210",
          50: "#F4F6F4",
          100: "#E4E9E5",
          200: "#B9C4BB",
          300: "#8B9B8F",
          400: "#556358",
          500: "#2B342D",
          600: "#1C221D",
          700: "#161B17",
          800: "#10130F",
          900: "#0D1210",
          950: "#080B09",
        },
        sage: {
          DEFAULT: "#8FAE96",
          light: "#B3CBB8",
          dark: "#5F7D66",
        },
        brass: {
          DEFAULT: "#C9A34E",
          light: "#E1C57F",
          dark: "#9C7B33",
        },
        ivory: "#F3F1EA",
        lavender: "#8E7FB5",
        lemon: "#D8C24A",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      boxShadow: {
        soft: "0 20px 60px -20px rgba(0,0,0,0.6)",
        glow: "0 0 0 1px rgba(143,174,150,0.25), 0 8px 30px -10px rgba(143,174,150,0.35)",
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "marquee": "marquee 30s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
