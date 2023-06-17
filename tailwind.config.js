/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ['Plus Jakarta Sans'],
      }
    },
  },
  plugins: [],
}