/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'hijau_protic' : '#275032',
        'gelap_protic' : '#06291E',
        'sedang_protic' : '#307E52',
        'muda_protic' : '#2A7F68',
      },
      backgroundImage : {
        'gojo' : "url('/asset/gojo.gif')",
      },
      width: {
        '128': '32rem',
        '84': '21rem',
      },
      keyframes: {
        melayang :{
          '0%, 100%' : {transform: 'translateY(-10%)',
                  transition: 'ease 0.5s'},
          '50%' : {transform: 'translateY(10%)',
                   transition: 'ease 0.5s'}
        },
        fadein :{
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },

      animation :{
        melayang : 'melayang 5s ease-in-out infinite',
        fadein : 'fadein 2s ease-in-out'
      }
    },
  },
  plugins: [],
}

