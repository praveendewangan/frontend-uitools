/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        '3xl': 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
      },
      colors: {
        headerBgLightcyan:{
          DEFAULT: '#98cedf'
        },
        darkcyan: {
          DEFAULT: '#386162'
        },
        green: {
          DEFAULT: "#00f260",
        },
        dark: {
          DEFAULT: "#010101",
          100: "#0a0b0e",
          200: "#16181d",
          300: "#16181d",
          500: "#0f1115",
          700: "#202125",
        },
      },
    },
  },
  plugins: [],
}
