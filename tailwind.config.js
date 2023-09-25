/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT"

export default withMT({
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        normal: "url('../public/bg_desktop.jpg')",
        mobile: "url('../public/bg_mobile.jpg')",
      },
      fontSize: {
        xs: "0.6rem",
        sm: "0.8rem",
      },
    },
  },
  plugins: [],
})
