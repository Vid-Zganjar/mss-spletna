/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [ './src/**/*.{js,jsx,ts,tsx}',],
  theme: {
    theme: {
      colors: {
        'green': '#399b3e',
        'yellow': '#f5Da10',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      extend: {
        spacing: {
          '8xl': '96rem',
          '9xl': '128rem',
        },
        borderRadius: {
          '4xl': '2rem',
        }
      }
    }
   
  },
  plugins: [],
}

