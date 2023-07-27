/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    color: {
      transparent: "transparent",
      current: "currentColor",
    },
    fontFamily: {
      sans: ["Quicksand", "sans-serif"], // p
      serif: ["Noticia Text", "serif"], // h
    },
    extend: {
      colors: {
        asparagus: "#6C9553", // primary
        celeste: "#D7DCD1", // secondary
        heather: "#ADC0C9", // background
        "deep-forest-green": "#18350B", // alt
      },
    },
  },
  plugins: [],
};
