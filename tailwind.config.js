/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      //   sans: ["Inter", "ui-sans-serif", "system-ui"],
      //   serif: ["Georgia", "ui-serif", "serif"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
