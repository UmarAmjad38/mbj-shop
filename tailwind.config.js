/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'bus-blue': '#3b82f6',
        'bus-green': '#10b981',
        'bus-brown': '#92400e',
        'bus-blue-light': '#60a5fa',
        'bus-green-light': '#34d399',
        'bus-brown-light': '#b45309',
      },
      fontFamily: {
        sans: ['Quicksand', 'sans-serif'],
      },
      animation: {
        'smooth-float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
}


