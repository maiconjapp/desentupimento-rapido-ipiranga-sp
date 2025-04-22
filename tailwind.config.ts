
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
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#ff7e00', // Orange from logo
					foreground: '#fff'
				},
				secondary: {
					DEFAULT: '#0c8b45', // Green from logo
					foreground: '#fff'
				},
				destructive: {
					DEFAULT: '#ea384c', // Red from logo
					foreground: '#fff'
				},
				muted: {
					DEFAULT: '#333', // Deep gray/black
					foreground: '#eee'
				},
				accent: {
					DEFAULT: '#FFD600', // Yellow accent (can adjust)
					foreground: '#222'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: '#fff',
					foreground: '#222'
				},
				sidebar: {
					DEFAULT: '#222', // Black for sidebar
					foreground: '#fff',
					primary: '#ff7e00', // Same orange for highlight
					'primary-foreground': '#222',
					accent: '#FFD600',
					'accent-foreground': '#222',
					border: '#333',
					ring: '#ea384c'
				},
				brand: {
					blue: '#0960bd', // can replace if you wish (not central in logo)
					orange: '#ff7e00',
					gray: '#4a5568',
					lightGray: '#f7fafc',
					black: '#222'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'pulse': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.7' },
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
