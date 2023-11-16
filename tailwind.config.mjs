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
        primary: "#ce530c",
        darkBg: "#081a26",
        lightBg: "#354c5b",
        darkHeader: "#bec7ce",
        lightHeader: "#15a58d",
      },
      fontFamily: {
        skranjiBold: ["SkranjiBold", "Skranji-Bold"],
        skranjiRegular: ["skranjiRegular", "Skranji-Regular"],
        robotoRegular: ["robotoRegular", "RobotoSerif-Regular"],
        robotoMedium: ["robotoMedium", "RobotoSerif-Medium"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
