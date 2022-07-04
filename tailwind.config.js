module.exports = {
  purge: {
    options: {
      safelist: ['bg-green-200', 'bg-blue-200', 'bg-indigo-200', 'bg-purple-200']
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('daisyui'),
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '90%',
          '@screen sm': {
            maxWidth: '600px'
          },
          '@screen md': {
            maxWidth: '600px'
          },
          '@screen lg': {
            maxWidth: '750px'
          },
          '@screen xl': {
            maxWidth: '900px'
          }
        }
      })
    }
  ]
}
