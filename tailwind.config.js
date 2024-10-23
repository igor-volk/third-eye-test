/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'app-blue': '#E6F1F8',
      'main': '#29293D'
    },
    extend: {
      backgroundImage: {
        'wave-pattern': "url('../public/assets/wave-pattern-background.png')",
      }
    },
    fontFamily: {
      'grotesk': ['Aktiv Grotesk Regular'],
      'grotesk-bold': ['Aktiv Grotesk Bold'],
      'domaine': ['Domaine Display Regular'],
      'domaine-bold': ['Domaine Display Bold'],
      'haikus': ['Haikus Script Regular'],
      'haikus-bold': ['Haikus Script Bold']
    }
  },
  plugins: [],
}

