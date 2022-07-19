/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: "#101820ff",
        secondary: "#f2aa4cff"
      },
      fontFamily: {
        varela: "'Varela Round', sans-serif",
      }
    },
  },
  plugins: [],
}
