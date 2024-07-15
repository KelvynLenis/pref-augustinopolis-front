import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      backgroundImage: {
        login: "url('/bg-login.png')",
        menu: "url('/bg-2.png')",
      },
      colors: {
        "login-green": "#4AAAA5",
        "header-purple": "#727CF5",
        header: "#35404F"
      }
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
