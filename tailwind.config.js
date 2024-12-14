/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        slowPulse: "pulse 5s ease-in-out infinite",
        blob: "blob 15s infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-6deg)" },
          "50%": { transform: "rotate(6deg)" },
        },
        blob: {
          "0%": { transform: "translate(0%, 0%) scale(1)" },
          "25%": { transform: "translate(50%, -50%) scale(1.2)" },
          "50%": { transform: "translate(-50%, 50%) scale(0.8)" },
          "75%": { transform: "translate(25%, -25%) scale(1.1)" },
          "100%": { transform: "translate(0%, 0%) scale(1)" },
        },
      },
      extend: {
        animationDelay: {
          0: "0s",
          2000: "2s",
          8000: "8s",
        },
      },
    },
  },
  plugins: [],
};
