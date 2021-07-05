module.exports = {
  // Added by Sonny: jit means just in time compiler:
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // Here we are extending the type of screen to assign a custom size as a 
      //class in the Results.js file. When the screen has this custom size,
      // we'll apply a different layout. See Results.js class definition
      screens: {
        "3xl": "2000px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
