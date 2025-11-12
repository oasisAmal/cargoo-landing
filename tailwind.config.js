/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        container: {
            center: true,
            padding: "1rem",
        },
        extend: {
            fontFamily: {
                manrope: ["Manrope", "sans-serif"],
                stan: ['"Stan Grotesk"', "sans-serif"],
            },
            colors: {
                primary: "rgba(10, 76, 38, 1)",
                secondary: "rgba(41, 48, 50, 1)",
                foreground: "rgba(22, 22, 22, 1)",
            },
            backgroundColor: {
                "custom-gray": "rgb(237, 235, 235)",
            },
        },
    },
    plugins: [require("tailwind-scrollbar-hide")],
};
