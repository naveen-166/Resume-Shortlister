/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure this matches your component file paths
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        edu: ['Edu AU VIC WA NT Hand'],
        Courgette: ['Courgette'],
        Kanit: ['Kanit'],
        // Add other custom fonts here if needed
      },
      animation: {
        bounce: 'bounce 2s infinite',
        pulse: 'pulse 1s infinite',
        shake: 'shake 0.5s ease-in-out',
        // Add other custom animations here if needed
      },
      keyframes: {
        bounce: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-30px)' },
          '60%': { transform: 'translateY(-15px)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        shake: {
          '0%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-10px)' },
          '50%': { transform: 'translateX(0)' },
          '75%': { transform: 'translateX(10px)' },
          '100%': { transform: 'translateX(0)' },
        },
        // Add other custom keyframes here if needed
      },
    },
  },
  plugins: [],
}
