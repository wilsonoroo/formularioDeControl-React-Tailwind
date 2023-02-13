/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**", "./index.html", "./src/**/*.jsx"],
  theme: {
    colors: {
      primaryColorKinRoss: "#0070c0",
      secondaryColorKinRoss: "#262626",
      tertiaryColorKinRoss: "#262626",
      primaryColorSierrGorda:"#d7874a",
      secondaryColoSierraGorda:"#676a6b",
      white: "#ffffff",
      black: "#000000",
      red: "#cb3a3e",
    },
    extend: {
      fontFamily: {
        'sans': ['"Arial"', 'sans-serif']
      }
    },
  },
  plugins: [],
}
