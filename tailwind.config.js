/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        primary : '#06b6d4',
        dark : '#1e293b',
        secondary :'#64748b'
      },
      screens: {
        '2xl': '1320px'
      }
    },
  },
  plugins: [],
}

