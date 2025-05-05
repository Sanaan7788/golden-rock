/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          golden: "#FFD37B",
          darkblue: "#1A365D",
          rust: "#911C00",
          cream: "#FFFCEB",
        },
        fontFamily: {
          raleway: ['Raleway', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }