const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {};

      for (let i = 11; i <= 20; i++) {
        newUtilities[`.w-${i}`] = { width: `${i}rem` };
        newUtilities[`.h-${i}`] = { height: `${i}rem` };
      }

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
});