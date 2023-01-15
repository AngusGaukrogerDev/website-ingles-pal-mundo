/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'body': ['Patua One'],
  },
  colors: {
    'fade1': '#222626',
    'fade2': '#44494B',
    'main': '#259EF5',
    'highlight': '#DD0EF0',
    'neutraltone': '#FAFBFC',
    'texttone': '#FAFBFC',
    'hovertexttone': '#CACAD2'
  },
  
  plugins: [],
  }
}
