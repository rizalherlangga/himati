/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      primary: ['Inter', 'sans-serif'],
    },
    extend: {
      fontSize: {
        header1: '1.5rem',
        header2: '1.25rem',
        header3: '1.125rem',
        body1: '1rem',
        body2: '0.875rem',
        body3: '0.75rem',
      },
      transitionProperty: {
        width: 'width',
      },
    },
  },
  plugins: [],
}
