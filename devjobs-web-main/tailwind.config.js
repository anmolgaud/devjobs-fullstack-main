/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily : {
      sans: ['Open Sans', sans-serif],
      poppins : ['Poppins', sans-serif],
    },
    colors : {
      'white' : '#ffffff',
      'offWhite' : '#eeeeee',
      'darkOffWhite' : '#d4d4d4',
      'lightGray' : '#37414f',
      'darkGray' : '#222831',
      'blue' : '#0092ca',
    },
    extend: {},
  },
  plugins: [],
}