/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'knewave-regular': ['Knewave-Regular', 'serif']
      },
      colors: {
        primary: '#806116',
        'primary-light': '#ECEDC1',
        secondary: '#6DA135',
        // ...
      },
    },
  },
  plugins: [require('@tailwindcss/forms')]
}
