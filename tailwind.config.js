/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 'navyBlue': '#000a0f',
        // 'glowBlue': '#00c7aa',
        'navyBlue': '#0f0f0f',
        'glowBlue': '#aaaaaa',
        'dimBlack': '191A19',
        'green-1': '1E5128',
        'green-2': '4E9F3D',
        'lightwhite': 'D8E9A8'
      },
    },
  },
  plugins: [],
}