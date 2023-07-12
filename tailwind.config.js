/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    colors: {
      'black': 'rgb(24, 24, 24)',
      'white': 'rgb(255, 255, 255)',
      'blue': 'rgb(63, 100, 227)',
      'dark-grey': 'rgb(152, 152, 152)',
      'light-grey': 'rgb(217, 217, 217)',
      'green': 'rgb(95, 209, 134)',
      'yellow': 'rgb(255, 242, 122)',
      'brown': 'rgb(130, 110, 95)',
      'orange': 'rgb(233, 142, 59)',
      'pink': 'rgb(216, 23, 150)',
    },
    fontFamily: {
      sans: ['Vercetti-Regular', 'sans-serif']
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
