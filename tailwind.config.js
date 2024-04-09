/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"),
  require('flowbite/plugin')],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#fc7035",
          "secondary": "#f6d860",
          "accent": "#37cdbe",
          "neutral": "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  }
}

