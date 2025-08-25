module.exports = {
  theme: {
    extend: {
      keyframes: {
        smoothBg: {
          "0%": { backgroundPosition: "50% 50%, 50% 50%" },
          "100%": { backgroundPosition: "350% 50%, 350% 50%" },
        },
        blink: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        smoothBg: "smoothBg 60s linear infinite",
        blink: "blink 2s ease-in-out infinite",
      },
      backgroundSize: {
        "200%": "200%",
        "300%": "300%",
      },
    },
  },
  plugins: [require('tailwind-scrollbar'),],
};
