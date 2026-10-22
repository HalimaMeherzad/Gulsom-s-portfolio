/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#FFF8E8",
          deep: "#FBEFDC",
        },
        coral: {
          DEFAULT: "#FF6B6B",
          deep: "#F04E58",
        },
        sunny: "#FFD166",
        teal: {
          DEFAULT: "#06B6A0",
          deep: "#059584",
        },
        ink: {
          DEFAULT: "#34344A",
          soft: "#5C5C73",
        },
      },
      fontFamily: {
        display: ["'Bricolage Grotesque'", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["'Manrope'", "ui-sans-serif", "system-ui", "sans-serif"],
        script: ["'Caveat'", "cursive"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.75rem",
      },
      boxShadow: {
        soft: "0 24px 60px -24px rgb(52 52 74 / 0.22)",
        lift: "0 32px 72px -28px rgb(52 52 74 / 0.32)",
        glow: "0 18px 40px -18px rgb(255 107 107 / 0.55)",
      },
      container: {
        center: true,
        padding: { DEFAULT: "1.25rem", lg: "2rem" },
        screens: { "2xl": "1200px" },
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        "spin-slow": "spin-slow 24s linear infinite",
      },
    },
  },
  plugins: [],
};
