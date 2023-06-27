/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        main: ['Montserrat', 'sans-serif'],
      },
      colors: {
        purple: {
          1: '#332885',
        },
        blue: {
          1: '#0252CD',
          2: '#6F74A7',
          3: '#428DFF',
        },
        grey: {
          1: '#9D9D9D',
          2: '#F6F6F6',
          3: '#BEC1D5',
          4: '#FFFFFF33',
        },
        black: {
          1: '#15141C',
        },
        yellow: {
          1: '#FFBE62',
        },
        green: {
          1: '#56B0B9',
        },
      },
    },
  },
  plugins: [
    'tailwindcss',
    'postcss-preset-env',
  ],
};
