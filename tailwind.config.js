/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".red": {
          "border-width": "2px",
          "border-color": "#ef4444",
        },
      });
    },
    function ({ addBase }) {
      addBase({
        "*": { boxSizing: "border-box" }, // Existing base rule
        html: { height: "100%" }, // Add 100% height to the html element
        body: { height: "100%", margin: "0", padding: "0" }, // Add 100% height to the body, reset margin & padding
      });
    },
  ],
};
