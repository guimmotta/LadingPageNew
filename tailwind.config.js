/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0f172a',
        light: '#f8fafc',
        'light-mid': '#eef2ff',
        'light-light': '#ffffff',
        cream: '#0f172a',
        gold: '#b45309',
        'gold-dark': '#92400e',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
