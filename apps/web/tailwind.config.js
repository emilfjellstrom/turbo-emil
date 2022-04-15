module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "cartoon-red": "#c32e2f",
      "cartoon-blue": "#4aa9d0",
      "cartoon-grey": "#d4d4d4",
      "cartoon-black": "#1c1c1c",
    },
    typography: (theme) => ({}),
    extend: {
      typography: (theme) => ({
        dark: {
          css: {
            color: "white",
          },
        },
      }),
    },
  },
  variants: {
    typography: ["dark"],
  },
  plugins: [require("@tailwindcss/typography")],
};
