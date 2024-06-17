/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'merienda': ['Merienda', 'cursive'],
        'lobster': ['Lobster', 'sans-serif'],
        'inter': ['Inter', 'sans-serif']
      },
      colors: {
        primary: '#e476cd',
        secondary: '#94a3b8',
        background: '#1e293b',
      },
    },
  },
  plugins: [],
}

