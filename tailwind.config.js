/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  extend: {
    width: {
      '124px': '124px',
      '364px': '364px',
    },
    height: {
      '52px': '52px',
      '500px':'500px',
      '200px':'200px',
    },
    borderRadius: {
      '15px': '15px',
    },
  },

  plugins: [],
}

