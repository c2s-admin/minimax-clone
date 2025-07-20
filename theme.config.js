export const themeConfig = {
  // Color Palette extracted from MiniMax.io
  colors: {
    primary: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#38bdf8',
      500: '#47a2f8', // Main blue from MiniMax
      600: '#0284c7',
      700: '#0369a1',
      800: '#075985',
      900: '#13253c', // Dark blue from MiniMax
    },
    secondary: {
      50: '#fef2f2',
      100: '#fee2e2',
      200: '#fecaca',
      300: '#fca5a5',
      400: '#f87171',
      500: '#ea4e51', // Red accent from MiniMax
      600: '#dc2626',
      700: '#b91c1c',
      800: '#991b1b',
      900: '#7f1d1d',
    },
    accent: {
      50: '#fffbeb',
      100: '#fef3c7',
      200: '#fde68a',
      300: '#fcd34d',
      400: '#fbbf24',
      500: '#e2af4a', // Yellow/Orange accent from MiniMax
      600: '#d97706',
      700: '#b45309',
      800: '#92400e',
      900: '#78350f',
    },
    neutral: {
      50: '#faf9fa', // Light background from MiniMax
      100: '#f5f5f5',
      200: '#e5e5e5',
      300: '#d4d4d4',
      400: '#a3a3a3',
      500: '#737373',
      600: '#525252',
      700: '#404040',
      800: '#262626',
      900: '#171717',
    },
    supporting: {
      lightBlue: '#a0bbd5',
      peach: '#e99197',
      lightYellow: '#eecf94',
      gray: '#c2c7c9'
    }
  },

  // Typography - Poppins font family from MiniMax
  fonts: {
    sans: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
    mono: ['Monaco', 'Cascadia Code', 'Segoe UI Mono', 'monospace'],
  },
  fontWeights: {
    light: '300',
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },

  // Spacing and sizing
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    '2xl': '4rem',
    '3xl': '6rem',
  },

  // Border radius
  borderRadius: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    '2xl': '1.5rem',
    full: '9999px',
  },

  // Animation settings
  animations: {
    morphing: {
      duration: '8s',
      timingFunction: 'ease-in-out',
      iterationCount: 'infinite',
    },
    slider: {
      duration: '0.5s',
      timingFunction: 'ease-out',
    },
    hover: {
      duration: '0.3s',
      timingFunction: 'ease-in-out',
    },
  },

  // Component specific settings
  components: {
    hero: {
      gradientColors: ['#47a2f8', '#13253c', '#a0bbd5'],
      morphingShapes: {
        count: 3,
        sizes: ['120px', '80px', '60px'],
        opacities: [0.8, 0.6, 0.4],
      }
    },
    cards: {
      shadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      hoverShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
      borderRadius: '1rem',
    },
    buttons: {
      primary: {
        bg: '#47a2f8',
        hover: '#0284c7',
        text: 'white',
      },
      secondary: {
        bg: 'white',
        hover: '#f8fafc',
        text: '#13253c',
        border: '1px solid #e2e8f0',
      }
    },
    navigation: {
      height: '80px',
      backdrop: 'rgba(255, 255, 255, 0.8)',
      blur: '12px',
    }
  },

  // Breakpoints for responsive design
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
}
