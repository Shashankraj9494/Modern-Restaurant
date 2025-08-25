/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['ui-sans-serif','system-ui','-apple-system','Segoe UI','Roboto','Ubuntu','Cantarell','Noto Sans','Helvetica Neue','Arial','Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'],
      },
      colors: {
        brand: {
          50: '#f1faf6',
          100: '#dff4ea',
          200: '#bfe9d6',
          300: '#95d9bb',
          400: '#5cc397',
          500: '#35a777',
          600: '#268763',
          700: '#216b51',
          800: '#1e5643',
          900: '#1a4738',
          950: '#0d2620'
        }
      },
      boxShadow: {
        'soft': '0 10px 25px rgba(0,0,0,0.25)'
      }
    },
  },
  plugins: [],
}
