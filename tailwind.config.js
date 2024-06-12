module.exports = {
  purge: ['./index.html', './assets/js/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        pink: {
          100: '#ffe4e6',
          500: '#ec4899',
          700: '#db2777',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}