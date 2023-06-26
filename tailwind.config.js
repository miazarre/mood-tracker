/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "design-mood": "url('./assets/images/Scribble-32.svg')",
      },
      fontFamily: {
        main: ["EricaOne", "sans-serif"],
      },
    },
  },
  plugins: [],
};
