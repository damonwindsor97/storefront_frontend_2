/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },

      dropShadow: {
        'blue-glow': '0px 50px 200px rgba(59, 130, 246, 0.6)',
      },
    },
  },
  plugins: [],
}

