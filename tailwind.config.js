/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#BFDBFE',
          100: '#326383',
          200: '#154C6B',
          300: '#1F2937',
        },
        secondary: {
          50: '#E2C8EE',
          100: '#9875A8',
          200: '#784E8B',
          300: '#603574',
        },
        warning: {
          50: '#FFC899',
          100: '#FEB270',
          200: '#F09646',
          300: '#D07220',
        },
        success: {
          50: '#C3FFA8',
          100: '#7ED756',
          200: '#61A442',
          300: '#44762D',
        },
        danger: {
          50: '#FBAEAF',
          100: '#DD6769',
          200: '#B24749',
          300: '#762D2E',
        },
      },
    },
  },
  plugins: [],
}
