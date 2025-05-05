const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "border-gradient": "borderGradient 3s linear infinite",
      },
      keyframes: {
        borderGradient: {
          "0%": {
            "border-image-source":
              "linear-gradient(90deg, #4F46E5, #22C55E, #4F46E5)",
          },
          "50%": {
            "border-image-source":
              "linear-gradient(90deg, #22C55E, #4F46E5, #22C55E)",
          },
          "100%": {
            "border-image-source":
              "linear-gradient(90deg, #4F46E5, #22C55E, #4F46E5)",
          },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".border-gradient": {
          "border-image-source":
            "linear-gradient(90deg, #4F46E5, #22C55E, #4F46E5)",
          "border-image-slice": 1,
        },
      });
    }),
  ],
};
