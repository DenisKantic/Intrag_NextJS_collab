/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens:{
      "xxs": "200px",
      "sm": "499px",
      "md": "500px",
      "mdd": "800px",
      "lg": "1000px",
      "xxl": "1200px"
    },
    extend: {},
  },
  plugins: [],
}