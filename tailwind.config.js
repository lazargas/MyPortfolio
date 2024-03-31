/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      mori: ['mori', 'sans'], // Replace 'YourFontName' with the name of your font
      helvetica: ['helvetica', 'sans']
    },
    extend: {},
  },
  plugins: [],
}