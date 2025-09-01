/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#3F2105",
        primaryLight: "#5C3109",
        white: "#ffffff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        black: "#000000",
        brandBlue:"#263b62",
        borderLine:"#815ba5",
        blackLight:"rgb(5, 6, 11)",
        secondary:"rgb(129, 91 ,165)",
        dimWhite2: "rgba(241, 241, 241,1)",
        lightGray: "rgb(166, 166, 166 )",
        black2:"rgb(21, 17, 17)"
      },
      fontFamily: {
        notoSerif: ["Noto Serif", "serif"],
        lato: ["Lato", "sans-serif"],
        playFairDisplay: ["Playfair Display", "serif"],
        raleway: ["Raleway", "normal"],
        raleway: ["Raleway", "normal"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      '2xl': "1536px",
      
    
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',

    },
    fontWeight: {
        thin: 100,
        extralight: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
   
    
  },
  plugins: [],
};

// https://tailwindcss.com/docs/responsive-design