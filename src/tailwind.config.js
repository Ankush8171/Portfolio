/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        storm: "#1f2937",
        royal: "#4338ca",
        lavender: "#a78bfa",
      },
    },
  },

  plugins: [],
}