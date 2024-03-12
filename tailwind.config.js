/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: {
        peach: "#E7816B",
        black: "#1D1C1E",
        white: "#FFFFFF",
      },
      secondary: {
        light_peach: "#FFAD9B",
        dark_grey: "#333136",
        light_grey: "#F1F3F5",
      },
      fontFamily: {
        jost: ["Jost", "sans-serif"],
      },
    },
  },
  plugins: [],
};
