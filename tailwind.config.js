/** @type {import('tailwindcss').Config} */

module.exports = {

   content: ["./*.html", "./js/*.js"],

   purge: ["./*.html", "./js/*.js"],

   theme: {
      extend: {
         colors: {
            'saurus': '#6C7289',
            'aquamarine': '#3D8168',
            'deep-aquamarine': '#1A4032',
            'gunmetal': '#1C232B',
            'cream': '#F2EAE2'
         },

         fontFamily: {
            serif: ['Fraunces', 'serif'],
            sans: ['Montserrat', 'sans-seif']
         }
      },
   },

   plugins: [],
   
}