/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
   theme: {
      extend: {
         colors: {
            primary: '#2756AA',
         },
         animation: {
            fadeIn: 'fadeIn 0.3s ease-in-out',
            fadeOut: 'fadeOut 0.3s ease-in-out',
         },

         keyframes: (theme) => ({
            fadeIn: {
               '0%': { opacity: '0' },
               '100%': { opacity: '1' },
            },
            fadeOut: {
               '0%': { opacity: '1' },
               '100%': { opacity: '0' },
            },
         }),
      },
   },
   plugins: [],
};
