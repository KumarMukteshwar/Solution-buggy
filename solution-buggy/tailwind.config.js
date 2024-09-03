/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8B5CF6', // Custom color for buttons, etc.
        secondary: '#A78BFA', // Custom color for the background
      }
    },
  },
  plugins: [],
}
