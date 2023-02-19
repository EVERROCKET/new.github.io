module.exports = {
  content: [
    '*.html',
    '*.js',
    'node_modules/tw-elements/dist/js/**/*.js'
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'robo': 'Roboto Slab',
        'inter': 'Inter' 
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
