import type { Config } from "tailwindcss"
import { themeConfig } from "./theme.config.js"

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: themeConfig.colors.primary[500],
          foreground: "hsl(var(--primary-foreground))",
          ...themeConfig.colors.primary,
        },
        secondary: {
          DEFAULT: themeConfig.colors.secondary[500],
          foreground: "hsl(var(--secondary-foreground))",
          ...themeConfig.colors.secondary,
        },
        accent: {
          DEFAULT: themeConfig.colors.accent[500],
          foreground: "hsl(var(--accent-foreground))",
          ...themeConfig.colors.accent,
        },
        neutral: themeConfig.colors.neutral,
        supporting: themeConfig.colors.supporting,
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        sans: themeConfig.fonts.sans,
        mono: themeConfig.fonts.mono,
      },
      fontWeight: themeConfig.fontWeights,
      spacing: themeConfig.spacing,
      borderRadius: {
        DEFAULT: "var(--radius)",
        "lg": "var(--radius)",
        "md": "calc(var(--radius) - 2px)",
        "sm": "calc(var(--radius) - 4px)",
        "xl": themeConfig.borderRadius.xl,
        "2xl": themeConfig.borderRadius['2xl'],
        "full": themeConfig.borderRadius.full,
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        morphing: {
          '0%, 100%': {
            transform: 'translate(0, 0) scale(1)',
            'border-radius': '30% 70% 70% 30% / 30% 30% 70% 70%'
          },
          '25%': {
            transform: 'translate(30px, -50px) scale(1.1)',
            'border-radius': '58% 42% 75% 25% / 76% 46% 54% 24%'
          },
          '50%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
            'border-radius': '50% 50% 33% 67% / 55% 27% 73% 45%'
          },
          '75%': {
            transform: 'translate(-30px, -30px) scale(1.05)',
            'border-radius': '33% 67% 58% 42% / 63% 68% 32% 37%'
          }
        },
        slideLeft: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' }
        },
        slideRight: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'morphing': `morphing ${themeConfig.animations.morphing.duration} ${themeConfig.animations.morphing.timingFunction} ${themeConfig.animations.morphing.iterationCount}`,
        'slide-left': `slideLeft ${themeConfig.animations.slider.duration} ${themeConfig.animations.slider.timingFunction}`,
        'slide-right': `slideRight ${themeConfig.animations.slider.duration} ${themeConfig.animations.slider.timingFunction}`
      },
      screens: themeConfig.breakpoints,
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
