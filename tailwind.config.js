/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*',
    './public/**/*',
    './views/*',
  ],
  theme: {
    extend: {
      colors:{
        "thered": "#ce2718"
      }
    },
  },
  plugins: [],
}

