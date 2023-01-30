/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,jpg,mp4}",
    "./pages/**/*.{js,ts,jsx,tsx,jpg,mp4}",
    "./components/**/*.{js,ts,jsx,tsx,jpg,mp4}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,jpg,mp4}",
  ],
  theme: {
    extend: { 
      fontFamily: {
        burton: "burtons"
      }
    },
  },
  plugins: [],
  
}