/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        greenScreen: '#00FF00',
        buttonGrey: '#6B7280',
        buttonBlue: '#3B82F6',
        buttonRed: '#EF4444',
        iconGrey: '#4B5563',
      },
    },
  },
  plugins: [],
}
