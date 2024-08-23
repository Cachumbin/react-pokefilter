/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Pixelify Sans"', 'sans-serif'], // Agrega "Pixelify Sans" como fuente personalizada
      },
    },
  },
  plugins: [
    require('tailwindcss-bg-patterns'), // Añade el plugin para patrones de fondo
  ],
}
