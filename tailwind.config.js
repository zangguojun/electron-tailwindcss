const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './src/renderer/**/*.{js,jsx,ts,tsx,ejs,html}',
    './src/pages/**/**/*.{js,jsx,ts,tsx,ejs,html}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        sky: colors.sky,
        cyan: colors.cyan,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
