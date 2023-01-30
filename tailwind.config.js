/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,jpg,mp4}",
    "./pages/**/*.{js,ts,jsx,tsx,jpg,mp4,svg}",
    "./components/**/*.{js,ts,jsx,tsx,jpg,mp4}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,jpg,mp4}",
  ],
  theme: {
    extend: { 
      fontFamily: {
        burton: "burtons"
      },
      cursor: {
        default: 'url(/assets/cursor-svgrepo-com(1).svg), default',
        pointer: 'url(/assets/cursor-svgrepo-com(1).svg), pointer',
      },
    },
  },
  plugins: [],
  
}