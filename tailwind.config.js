/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        accent: "#7c3aed", // roxo vivo
        "accent-700": "#6d28d9",
        g900: "#061810",
        g800: "#0b2a1c",
        g700: "#11412b",
        g500: "#1f7a4c",
      },
    },
  },
  plugins: [],
};
