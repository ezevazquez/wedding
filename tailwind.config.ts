/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Josefin Sans', 'sans-serif'],
        serif: ['Philosopher', 'serif'],
      },
    },
  },
  plugins: [],
}
