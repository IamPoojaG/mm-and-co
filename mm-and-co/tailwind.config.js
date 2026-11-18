/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#101e2e",
        "navy-light": "#1b2d42",
        orange: "#f58216",
        "orange-dark": "#e66d08",
        ink: "#182638",
        mist: "#f4f6f8",
      },
      fontFamily: {
        sans: ["DM Sans", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        soft: "0 12px 35px rgba(16, 30, 46, 0.10)",
      },
    },
  },
  plugins: [],
};
