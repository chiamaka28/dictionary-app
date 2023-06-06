/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        grey:"#A1A1A178",
        lightPurple:"#B36BE191",
        purple:"#B36BE1FA",
      }
    },
  },
  plugins: [],
};
