/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "design-mood": "url('./assets/images/smiley.svg')",
      },
      fontFamily: {
        main: ["EricaOne", "sans-serif"],
        second: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
