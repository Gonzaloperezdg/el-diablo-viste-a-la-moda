import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#0A0A0B",
          elevated: "#141416",
        },
        ink: {
          primary: "#F4F2EE",
          secondary: "#A6A29B",
          tertiary: "#5C5852",
        },
        divider: "#27262A",
        accent: {
          editor: "#FFFFFF",
          translator: "#8B6F4E",
          acolyte: "#A8252A",
          curator: "#3D4A3F",
        },
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-cormorant)", "Georgia", "serif"],
        ui: ["var(--font-jost)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3.5rem,10vw,9rem)", { lineHeight: "0.95", letterSpacing: "-0.02em" }],
        "display-l": ["clamp(2.5rem,6vw,5.5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-m": ["clamp(1.75rem,4vw,3.5rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        headline: ["clamp(1.25rem,2.5vw,2rem)", { lineHeight: "1.2" }],
        subhead: ["clamp(1rem,2vw,1.25rem)", { lineHeight: "1.4" }],
        "body-l": ["clamp(1.05rem,1.5vw,1.2rem)", { lineHeight: "1.65" }],
        body: ["1rem", { lineHeight: "1.6" }],
        caption: ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.08em" }],
      },
      spacing: {
        "2xs": "4px", xs: "8px", s: "16px", m: "24px",
        l: "40px", xl: "64px", "2xl": "96px", "3xl": "144px",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "fade-in-slow": "fadeIn 1.4s ease-out forwards",
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "slide-right": "slideRight 0.2s ease-out forwards",
        "blink": "blink 1.2s steps(1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideRight: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(8px)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
