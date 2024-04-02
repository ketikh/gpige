/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      screens: {
        'xl': '1170px',
        'lg': '992px',
        'md': '768px',
        'sm': '360px',
      },
      colors: {
        wihte: '#fff',
        blue: {
          100: '#002B7F',
          200: '#0E215E',
          300: '#292562',
        },
        grey: {
          100: '#F4F6FE',
          200: '#E9E8EF',
          300: '#9199B4',
          400: '#DEE0E8',
          500: '#F4F4FE',
          600: '#B1B7CA',
        },
        'pink': '#EE2A7B',
        'green': '#22A336',
        'red': '#ED1C7C'
      },
      fontFamily: {
        'sans': ['Noto Sans Georgian',],
      },

      fontWeight: {
        'sans-regular': 400,
        'sans-medium': 500,
        'sans-demibold': 600,
        'sans-bold': 700,
      },
    },
  },
  plugins: [],
}

