/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#2b3945",
        "darker-blue": "#202c37",
        "dark-gray": "#202c37",
        "light-gray": "#fafafa",
      },
      backgroundColor: {
        "dark-blue": "#2b3945",
        "darker-blue": "#202c37",
        "dark-gray": "#202c37",
        "light-gray": "#fafafa",
      },
      textColor: {
        "dark-blue": "#2b3945",
        "darker-blue": "#202c37",
        "dark-gray": "#202c37",
        "light-gray": "#fafafa",
      },
    },
  },
  plugins: [],
}