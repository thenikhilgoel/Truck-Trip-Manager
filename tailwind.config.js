// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Blue palette
        primary: {
          light: "#3B82F6",   // roughly tailwind blue-500
          DEFAULT: "#2563EB", // tailwind blue-600
          dark: "#1D4ED8",    // tailwind blue-700
        },
        // Accent Orange palette
        accent: {
          light: "#FB923C",   // roughly tailwind orange-400
          DEFAULT: "#F97316", // tailwind orange-500
          dark: "#EA580C",    // tailwind orange-600
        },
        // Optional neutral background shade
        neutralBg: "#F3F4F6", // tailwind gray-100
      },
    },
  },
  plugins: [],
};
