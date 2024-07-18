/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#76D5D8',
        'executive-blue':'#293139'
      }
    },
  },
  plugins: [],
}

