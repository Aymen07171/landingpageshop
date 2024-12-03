/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        lexend: ['Lexend', 'sans-serif'],
        golos : ["Golos Text", "serif"],
        Coustard : ["Coustard", "serif"],
      },

      colors: {
        'greenbackground': '#2D5437',
        'lightgreenbackground': '#8A9E81',
        'lightwhite' : '#F9F0E3',
        'lightcreme' : '#E0D9CC',
        'orangebackground' : '#DA8F67',

        
    },

    

  },
  plugins: [],
}
}