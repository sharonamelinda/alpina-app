/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js,css}",
    "./src/**/*.{html,js,css}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'light' : '#f9fafb',
        'darkblue' : '#060521',
        'lightblue' : '#362eed',
        'orange' : '#ff9a3d',
      }
    },
  },
  plugins: [],
}

