/* makes it quicker to write and maintain the code of your application. *\

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#F5385D',
        },
      },
    },
    plugins: [],
  }