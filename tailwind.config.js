/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      screens:{
        "md":"857px"
      },
      fontFamily: {
        'roboto': ['Roboto'],
      },
      boxShadow: {
        custom: '0px 20px 50px 2px rgba(26, 26, 26, 0.1)',
      },
      backgroundColor:{
        'primary': '#E5133A',
      },
      colors:{
        'primary': '#E5133A',
      },

      backgroundImage: {
        'currency-background': "url('/src/assets/images/Mask group.png')",
      },
    },
  },
  plugins: [],
}