/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        glow: {
          '0%': {
            boxShadow: '0 0 10px 10px rgba(39,23,51,0.66)',
          },
          '50%': {
            boxShadow: '0 0 10px 30px rgba(39,23,51,0.66)',
          },
          '100%': {
            boxShadow: '0 0 10px 10px rgba(39,23,51,0.76)',
          },
        },
      },
      animation: {
        glow: 'glow 3s infinite',
      },
    },
  },
  
   
    extend: {},
  
  plugins: [],
  
}

