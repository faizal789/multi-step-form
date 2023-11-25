/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "marine-blue-primary": " hsl(213, 96%, 18%)",
        "purplish-blue-primary": "hsl(243, 100%, 62%)",
        "pastel-blue-primary": "hsl(228, 100%, 84%)",
        "light-blue-primary": "hsl(206, 94%, 87%)",
        "strawberry-red-primary": "hsl(354, 84%, 57%)",
        "cool-gray-neutral": "hsl(231, 11%, 63%)",
        "light-gray-neutral": "hsl(229, 24%, 87%)",
        "magnolia-neutral": "hsl(217, 100%, 97%)",
        "alabaster-neutral": "hsl(231, 100%, 99%)",
        "white-neutral": "hsl(0, 0%, 100%)",
      },
      fontFamily:{
        'sans': ['Ubuntu','sans-serif']
      },
      backgroundImage :{
        'sidebar-desktop' : "url('/images/bg-sidebar-desktop.svg')",
        'sidebar-mobile' : "url('/images/bg-sidebar-mobile.svg')"
      }
      
    },
  },
  plugins: [],
};
