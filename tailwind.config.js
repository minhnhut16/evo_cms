module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './my-bricks/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        white: '#ffffff',
        blue: '#0276f1',
        green: '#55c771',
        indigo: '#0e2d52',
        red: '#ee364c',
        orange: '#F58220',
        violet: '#5e2e86',
        transparentGray: '#00000073',
        gray: {
          200: '#f3f4f5',
          500: '#e6e8ec',
          600: '#828282',
          700: '#777e90',
          800: '#646464',
          900: '#23262f',
        },
      },
    },
  },
  plugins: [],
};
