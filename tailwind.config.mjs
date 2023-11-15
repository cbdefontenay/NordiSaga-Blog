/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontSize: {
        main: "1.2rem",
        xl: "2.5rem",
      },
      colors: {
        content: "#282828",
        primary: "#E05346",
        darkBg: "#081a26",
        lightBg: "#354c5b",
        darkHeader: "#bec7ce",
      },
      fontFamily: {
        skranjiBold: ["SkranjiBold", "Skranji-Bold"],
        skranjiRegular: ["skranjiRegular", "Skranji-Regular"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
