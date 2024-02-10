module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        green: {
          300: "#76b296",
          900: "#255a2f",
          A200: "#4ee19e",
          "300_00": "#76b29600",
        },
        white: { A700_7e: "#ffffff7e", A700: "#ffffff" },
        light_green: { A400: "#7bf000" },
        light_blue: { 700: "#0088cc" },
        blue_gray: {
          400: "#868686",
          500: "#5c8b75",
          "400_a4": "#868686a4",
          "400_68": "#86868668",
          "400_02": "#8d8d8d",
          "400_01": "#8a8a8a",
          "400_00": "#86868600",
        },
        black: { 900: "#000000", "900_3f": "#0000003f" },
        teal: {
          200: "#84c8a9",
          800: "#007559",
          "700_b2": "#007576b2",
          "800_a4": "#007559a4",
          "800_80": "#00755980",
          "800_00": "#00755900",
          "800_bf": "#007559bf",
          "200_01": "#86cbac",
          "800_9c": "#0075599c",
          "200_03": "#85c8aa",
          "200_02": "#86cbab",
          "800_3f": "#0075593f",
        },
        gray: {
          200: "#edeeef",
          600: "#757575",
          900: "#121212",
          "600_01": "#727272",
          "900_01": "#002219",
          "300_7a": "#e3e5e47a",
        },
        blue: { 800: "#2867b2" },
      },
      backgroundImage: {
        gradient: "linear-gradient(161deg ,#007559,#e3e5e47a,#00755900)",
        gradient1: "linear-gradient(145deg ,#007559,#002219,#000000,#00755900)",
        gradient2:
          "linear-gradient(166deg ,#007559,#0075599c,#007559a4,#00755980,#00755900)",
        gradient3:
          "linear-gradient(197deg ,#868686,#868686a4,#86868668,#86868600)",
        gradient4:
          "linear-gradient(157deg ,#007559,#007559bf,#0075593f,#00755900,#76b296)",
        gradient5: "linear-gradient(125deg ,#76b296,#76b29600)",
      },
      fontFamily: {
        poppins: "Poppins",
        abhayalibresemibold: "Abhaya Libre SemiBold",
        abhayalibreextrabold: "Abhaya Libre ExtraBold",
      },
      boxShadow: { bs: "10px 7px  4px 7px #0000003f" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
