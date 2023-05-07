/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      primary: '#5c6ac4',
      secondary: '#ecc94b',
      white: '#FFFFFF',
      black: '#000000',
      transparent: 'transparent',
      weirdblue: '#7F00FF',
      weirdorange: '#E100FF',
      gray: "#1f2937",
    },
    extend: {
      fontFamily: {
        'Lobster': ['Lobster', 'cursive'],
        'Quicksand':['Quicksand', 'sans-serif']
      },
      animation: {
        typing: " typing 2s steps(14), blink 0.1s infinite"
      },
      keyframes: { 
        typing: {
        from: { width: "0" },
        to: { width: "9ch" }
      },
    blink: {
  from: { "border-right-color": "transparent" },
  to: { "border-right-color": "#FFFF" },
},},
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}