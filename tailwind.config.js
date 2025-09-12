/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Gilroy", "sans-serif"],
      },
      colors: {
        primary: "#003459",
        secondary: "#F7DBA7",
        pinkRed: "#FF564F",
        greenLight: "#34C759",
        orangeShine: "#FF912C",
        blueSea: "#00A7E7",
        "neutral-100": "#00171F",
        "neutral-80": "#242833",
        "neutral-60": "#667479",
        "neutral-40": "#99A2A5",
        "neutral-20": "#CCD1D2",
        "neutral-0": "#EBEEEF",
        "neutral-000": "#FCFCFC",
      },
      fontSize: {
        h1: [
          "3rem",
          { lineHeight: "1.08", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
        h2: ["2.25rem", { lineHeight: "1.12", fontWeight: "700" }],
        h3: ["1.875rem", { lineHeight: "1.18", fontWeight: "600" }],
        h4: ["1.5rem", { lineHeight: "1.25", fontWeight: "600" }],
        h5: ["1.25rem", { lineHeight: "1.35", fontWeight: "500" }],
        h6: ["1rem", { lineHeight: "1.4", fontWeight: "500" }],
        body: ["1rem", { lineHeight: "1.5", fontWeight: "400" }],
        small: ["0.875rem", { lineHeight: "1.4", fontWeight: "400" }],
      },
    },
  },
  plugins: [],
};
