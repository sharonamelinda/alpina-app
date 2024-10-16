/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js,css}",
    "./src/**/*.{html,js,css}"
  ],
  theme: {
    extend: {
      colors: {
        'alpina-grey' : '#f9fafb',
        'alpina-darkblue' : '#060521',
        'alpina-lightblue' : '#362eed',
        'alpina-orange' : '#ff9a3d',
      }
    },
  },
  plugins: [],
}

