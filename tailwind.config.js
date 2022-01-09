module.exports = {
  purge: ["./src/**/*.{js,jsx,tsx}", ".public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "main-oradea": "url('assets/main/oradea.jpg')",
        "main-brasov": "url('assets/main/brasov.jpg')",
        "main-cluj": "url('assets/main/cluj.jpg')",
        "main-sibiu": "url('assets/main/sibiu.jpg')",
      },
      height: { 128: "32rem" },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        purple: "#3f3cbb",
        midnight: "#121063",
        metal: "#565584",
        tahiti: "#3ab7bf",
        silver: "#ecebff",
        "bubble-gum": "#ff77e9",
        bermuda: "#78dcca",
        brand: "#34374c",
      },
    },
  },

  variants: {
    extend: {},
  },

  plugins: [],
};
