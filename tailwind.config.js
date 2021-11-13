module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

    colors: {
      darkblue: '#1F1D36',
      purple: '#3F3351',
      violet: '#864879',
      peach: '#E9A6A6',
      white: '#fff',
      grey: 'gray',
      black:'black',
      cream:'#F7F6F2'
    },

    fontFamily: {
      apple: ["-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"]
    },

    borderColor: theme => ({

      
       DEFAULT: theme('colors.gray.300', 'currentColor'),

      'primary': '#3490dc',

      'secondary': '#ffed4a',

      'danger': '#e3342f',
     })
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
