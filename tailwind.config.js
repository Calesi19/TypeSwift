module.exports = {
  content: [
    './src/renderer/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],

  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        custom: ['Agbalumo', 'sans-serif'],
        custom: ['Racing', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#FFF5F2',
          100: '#FFF1EE',
          200: '#FFE4DE',
          300: '#FFD5CC',
          400: '#FFBCAD',
          500: '#FE795D',
          600: '#EF562F',
          700: '#EB4F27',
          800: '#CC4522',
          900: '#A5371B',
        },
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};