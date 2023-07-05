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
        'case-studies-banner': "url('/CaseStudiesBanner.png')",
      },
      fontFamily: {
        main: ['Montserrat', 'sans-serif'],
      },
      colors: {
        purple: {
          1: '#332885',
          2: '#312E81',
          3: '#6F74A7',
        },
        blue: {
          1: '#0252CD',
          2: '#6F74A7',
          3: '#428DFF',
          4: '#1E9AFF',
        },
        grey: {
          1: '#9D9D9D',
          2: '#F6F6F6',
          3: '#BEC1D5',
          4: '#FFFFFF33',
          5: '#222330',
          6: '#F5F6FB',
          7: '#303245',
          8: '#2E2F3E',
        },
        black: {
          1: '#15141C',
        },
        yellow: {
          1: '#FFBE62',
        },
        green: {
          1: '#56B0B9',
          2: '#47A34B',
        },
        pink: {
          1: '#FFEDFE',
          2: '#FFE7E3',
          3: '#F0E7F9',
        },
        red: {
          1: '#E15A46',
        },
      },
    },
  },
  plugins: [
    'tailwindcss',
    'postcss-preset-env',
  ],
};
