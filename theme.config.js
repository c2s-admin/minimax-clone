export const themeConfig = {
  // C2S Healthcare Color Palette
  colors: {
    primary: {
      50: '#e6f1f7',
      100: '#cce3ef',
      200: '#99c7df',
      300: '#66abcf',
      400: '#338fbf',
      500: '#1278B3', // C2S Hellblau (Hauptfarbe)
      600: '#0f6090',
      700: '#0c486c',
      800: '#093048',
      900: '#004166', // C2S Dunkelblau
    },
    secondary: {
      50: '#f9f8e6',
      100: '#f3f1cc',
      200: '#e7e399',
      300: '#dbd566',
      400: '#cfc733',
      500: '#B3AF09', // C2S Grün
      600: '#8f8c07',
      700: '#6b6905',
      800: '#474604',
      900: '#232302',
    },
    accent: {
      50: '#e6f4f7',
      100: '#cce9ef',
      200: '#99d3df',
      300: '#66bdcf',
      400: '#33a7bf',
      500: '#0091BD', // C2S Akzent Hellblau
      600: '#007497',
      700: '#005771',
      800: '#003a4b',
      900: '#001d25',
    },
    neutral: {
      50: '#f8fafb',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
    },
    healthcare: {
      deepBlue: '#001F30', // C2S Tiefblau/Schatten für Footer
      white: '#ffffff',
      cardBg: 'rgba(255, 255, 255, 0.95)',
      glassBg: 'rgba(255, 255, 255, 0.1)',
      glassBlur: 'rgba(18, 120, 179, 0.1)',
    }
  },

  // Roboto Condensed Typography
  fonts: {
    sans: ['Roboto Condensed', 'Arial Narrow', 'system-ui', 'sans-serif'],
    mono: ['Monaco', 'Cascadia Code', 'Segoe UI Mono', 'monospace'],
  },
  fontWeights: {
    light: '300',
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },

  // Healthcare-optimized spacing
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    '2xl': '4rem',
    '3xl': '6rem',
  },

  // Professional border radius
  borderRadius: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    '2xl': '1.5rem',
    card: '16px', // Karten-Rundung
    button: '12px', // Button-Rundung
    full: '9999px',
  },

  // Smooth animations for professional feel
  animations: {
    morphing: {
      duration: '8s', // Normal speed
      timingFunction: 'ease-in-out',
      iterationCount: 'infinite',
    },
    slider: {
      duration: '0.5s', // Normal transition
      timingFunction: 'ease-out',
    },
    hover: {
      duration: '0.3s',
      timingFunction: 'ease-in-out',
    },
    glassmorphism: {
      duration: '0.4s',
      timingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    }
  },

  // Healthcare-specific component settings
  components: {
    hero: {
      gradientColors: ['rgba(18, 120, 179, 0.8)', 'rgba(0, 65, 102, 0.9)', 'rgba(0, 145, 189, 0.7)'],
      morphingShapes: {
        count: 5, // Anzahl der morphenden Formen
        sizes: ['200px', '150px', '120px', '100px', '80px'],
        opacities: [0.3, 0.25, 0.2, 0.15, 0.1],
      },
      ekgLine: {
        color: '#B3AF09',
        width: '2px',
        opacity: 0.6,
      }
    },
    cards: {
      shadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      hoverShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      borderRadius: '16px',
      glassBg: 'rgba(255, 255, 255, 0.1)',
      backdropBlur: '12px',
    },
    buttons: {
      primary: {
        bg: '#1278B3',
        hover: '#004166',
        text: '#ffffff',
        borderRadius: '12px',
      },
      secondary: {
        bg: '#B3AF09',
        hover: '#8f8c07',
        text: '#ffffff',
        borderRadius: '12px',
      },
      glass: {
        bg: 'rgba(255, 255, 255, 0.1)',
        hover: 'rgba(255, 255, 255, 0.2)',
        text: '#ffffff',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        backdrop: 'blur(10px)',
      }
    },
    navigation: {
      height: '80px',
      backdrop: 'rgba(0, 65, 102, 0.9)', // Glassmorphism
      blur: '12px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
    },
    branding: {
      companyName: 'zweitmein.ng',
      tagline: 'complex care solutions',
      logoColors: {
        primary: '#1278B3',
        accent: '#B3AF09',
      }
    }
  },

  // Responsive breakpoints
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  // Healthcare gradients for different components
  gradients: {
    research: {
      card1: ['#1278B3', '#004166'], // Video Model
      card2: ['#0091BD', '#1278B3'], // Text Model
      card3: ['#B3AF09', '#8f8c07'], // Audio Model
      card4: ['#004166', '#001F30'], // MCP
    },
    products: {
      chat: ['#1278B3', '#0091BD'],
      agent: ['#004166', '#1278B3'],
      video: ['#0091BD', '#B3AF09'],
      audio: ['#B3AF09', '#1278B3'],
      videoAgent: ['#004166', '#B3AF09'],
      talkie: ['#1278B3', '#004166'],
    }
  }
}
