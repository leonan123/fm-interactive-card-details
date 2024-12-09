/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '450px',
      },
      
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
      },
      
      colors: {
        'light-grayish-violet': "hsla(270, 3%, 87%)",
        'dark-grayish-violet': "hsla(279, 6%, 55%)",
        'very-dark-violet': "hsla(278, 68%, 11%)",
        error: "hsla(0, 100%, 66%)",
      }
    },
  },
  plugins: [],
}