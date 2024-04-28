/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1098px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '805px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '753px'},
      // => @media (max-width: 639px) { ... }
    },
   
    extend: {
      fontFamily: {
        'knight-souls':['knight-souls'],
        'trajan-pro':['trajan-pro'],
        'Futura-XBlk-BT':['Futura-XBlk-BT'],
      }
     },
  },
  plugins: [
    function({addUtilities}) {
      const newUtilities = {".no-scrollbar": {
        "-ms-overflow-style": "none", /* Internet Explorer */
        "scrollbar-width": "none",    /* Firefox */
      },
      "::-webkit-scrollbar": {
        display: "none",              /* WebKit browsers like Chrome */
      },
      }
  addUtilities(newUtilities);
  },
  function({ addUtilities, addComponents, e, prefix, config }) {
    const newUtilities = {
      '.horizontal-tb': {
        writingMode: 'horizontal-tb',
      },
      '.vertical-rl': {
        writingMode: 'vertical-rl'
      },
      '.vertical-lr': {
        writingMode: 'vertical-lr'
      }
    }
    addUtilities(newUtilities)
  }
]
}

