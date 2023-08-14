/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors:{
        purple:{
          100:'#6D5A73', 
          200:'#7F507D',
          300:'#703C6E',
          400:'#371723', 
          500:'#76417e',
          600:'#5F3445', // cor do navBar e footer
          
        },
        green:{
          100:'#2d717d', //cor do login 'entrar'
          200:'#1e4850',
          300:'#B8B393',
          400:'#346E00',
          500:'#D6D0A9',
          600:'#7B9B5F'
          
          
        },
        pink:{
          100:'#F2D1CE',  //cor do background 
          200:'#C69999', //cor do formulario login
          300:'#D8B9B9', 
          400:'#D6A4A0',
          500:'#B27671',
          600:'#A61D2A'
           
          
        },
        blue:{
          100:'#4689ba'
        },
        yellow:{
          100:'#E6C58A'
        },
        white:{
          100:'#E2D9D9', //cor dos textos e títulos
          200:'#7B7864', 
          300:'#FFFFFF', //branco padrão
          400: '#EBDFCB', //off-white
          500: '#F3F4F6'
          
        }
      },
      fontFamily:{
        'title': ['Rajdhani', 'sans-serif'], //font-title
        'base': ['Prompt', 'sans-serif']

      },
      borderRadius: {
      'nav': ['10rem','12px'],
      'height': '10px'
      },

    },
    
    
    
  },
  plugins: [],
}