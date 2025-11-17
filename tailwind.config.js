/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "portto-light-gold": "#FFE7C2",
        "portto-purple": "#4920E5", 
        "portto-black": "#0B0B1B",
        "portto-green": "#12BB74",
        "portto-red": "#E64D56",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        slideToR: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        slide: "slide 25s linear infinite",
        slideToR: "slideToR 50s linear infinite",
      },
    },
  },
  plugins: [],
  safelist: [
    // Explicitly include our custom classes
    'bg-portto-black',
    'bg-portto-purple', 
    'bg-portto-green',
    'bg-portto-red',
    'bg-portto-light-gold',
    'text-portto-black',
    'text-portto-light-gold',
    'hover:text-portto-light-gold',
    'border-portto-purple',
    'border-portto-black',
    'hover:ring-portto-black',
    'bg-project-background',
    'animate-slide',
    'animate-slideToR',
    'pause-animate',
    'hide',
  ]
};
