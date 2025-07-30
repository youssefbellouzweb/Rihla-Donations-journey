/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#1A1A1A',
        'brand-light': '#F5F5F7',
        'brand-blue': '#007AFF',
        'brand-red': '#C70039',
        'text-primary': '#EAEAEA',
        'text-secondary': '#A0A0A0',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'display': ['"Clash Display"', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'subtle-shine': 'subtleShine 5s infinite linear',
      },
      keyframes: {
        fadeInUp: { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' }, },
        subtleShine: { '0%': { backgroundPosition: '200% 0' }, '100%': { backgroundPosition: '-200% 0' }, }
      }
    },
  },
  plugins: [],
}