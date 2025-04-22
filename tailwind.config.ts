import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: '#000000', // Pure black background
        foreground: '#FFFFFF', // Pure white text
        primary: {
          DEFAULT: '#ff7e00', // Orange from logo
          foreground: '#FFFFFF'
        },
        secondary: {
          DEFAULT: '#0c8b45', // Green from logo
          foreground: '#FFFFFF'
        },
        destructive: {
          DEFAULT: '#ea384c', // Red from logo
          foreground: '#FFFFFF'
        },
        muted: {
          DEFAULT: '#222', // Dark gray
          foreground: '#FFFFFF'
        },
        accent: {
          DEFAULT: '#FFD600', // Yellow accent
          foreground: '#000000'
        },
        card: {
          DEFAULT: '#000000', // Black
          foreground: '#FFFFFF' // White
        },
        brand: {
          orange: '#ff7e00',
          green: '#0c8b45',
          red: '#ea384c',
          black: '#000000',
          yellow: '#FFD600'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
