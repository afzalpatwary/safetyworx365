/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "{html,js}", './index.html', './schulung.html', './kontakt.html'
  ], 
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'body': ['"Roboto"'],
    },



    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '992px',
      'xl': '1110px',
      'xxl': '1130px',
    },


    extend: {

      colors: {
        //Primary colors
        blue: "#0078D2",
        dark: "#333333",
        light: "#F5F3FD",

        //Secondary Color
        yellow: "#fbb200",
        yellow2: "#ffd31f",
        secondary_shade: "#FFF3EE",
        secondary_light: "#F3EADA",

        //Dark Color
        dark1: "#000",
        dark2: "#222222",
        dark3: "#5e5e5e",
        dark4: "#6c6c6c",


      },

    },
  },
  plugins: [],
}
