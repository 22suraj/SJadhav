module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "pro-img": "url('/src/bg1.jpg')",
        "suraj-img": "url('/src/sj.jpg')",
        "skill-bg": "url('/src/skillbg.jpg')",
      }),
      colors: {
        bground: "#131414",
        skillbar: "#C49B66"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
