/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgLight: "#fff",
        bgDark: "#212121",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
