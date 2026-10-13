/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // CSS variable (RGB channels) theke ashe -> data file er theme.accent change korlei shob update
        accent: "rgb(var(--accent) / <alpha-value>)",
        accent2: "rgb(var(--accent-2) / <alpha-value>)",
        ink: "#1b2233",
        muted: "#667085",
        canvas: "#f6f8fc",
      },
      fontFamily: { sans: ["Plus Jakarta Sans", "Hind Siliguri", "system-ui", "sans-serif"] },
      borderRadius: { theme: "var(--r)", "theme-sm": "calc(var(--r) * .6)" },
      boxShadow: { soft: "0 18px 50px -18px rgba(27,34,51,.18)" },
      keyframes: {
        float: { "0%,100%": { transform: "translate(0,0) scale(1)" }, "50%": { transform: "translate(40px,-30px) scale(1.1)" } },
        bob: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-12px)" } },
        morph: {
          "0%,100%": { borderRadius: "40% 60% 55% 45% / 50% 45% 55% 50%" },
          "50%": { borderRadius: "58% 42% 40% 60% / 45% 58% 42% 55%" },
        },
        ring: { "0%": { boxShadow: "0 0 0 0 rgb(var(--accent) / .5)" }, "100%": { boxShadow: "0 0 0 10px rgb(var(--accent) / 0)" } },
      },
      animation: {
        float: "float 18s ease-in-out infinite",
        bob: "bob 6s ease-in-out infinite",
        morph: "morph 12s ease-in-out infinite",
        ring: "ring 2s infinite",
      },
    },
  },
  plugins: [],
};
