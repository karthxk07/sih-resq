/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2D6A4F", // Forest Green
        secondary: "#40916C", // Sage Green
        accent: "#95D5B2", // Mint Green
        light: "#D8F3DC", // Very Light Green
        dark: "#081C15", // Dark Green
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        suse: ["SUSE", "sans-serif"],
      },
    },
  },
  plugins: [],
};
