# MiniMax.io Clone

Eine pixel-perfekte Kopie der [MiniMax.io](https://www.minimax.io/) Website mit vollständig konfigurierbaren Themes und modernen Animationen.

## 🚀 Live Demo

**Deployed Website:** [https://same-dvntto23ujh-latest.netlify.app](https://same-dvntto23ujh-latest.netlify.app)

## ✨ Features

- **🎨 Vollständig konfigurierbare Themes** über `theme.config.js`
- **🔄 Morphing-Animationen** im Hero-Bereich mit CSS-Keyframes
- **🎪 Interaktive Slider** in Research und News Sektionen
- **📱 Responsive Design** für alle Geräte
- **🚀 Modern Stack**: Next.js 15 + Tailwind CSS + shadcn/ui
- **⚡ Performance optimiert** mit Bun als Package Manager
- **🎯 Pixel-perfekte UI** basierend auf dem Original

## 🎨 Design Features

### Core Design Elements
- **Hero Section**: Blaue Gradient-Hintergründe mit morphenden organischen Formen
- **Research Cards**: Animierte Karten mit verschiedenen Farbverläufen und "NEW" Badges
- **Product Grid**: 3x2 Grid mit farbkodierten Gradient-Karten
- **News Timeline**: Slider mit echten Bildern und Category-Badges
- **Footer**: Dunkler Footer mit strukturierten Links und Social Media Icons

### Animations & Interactions
- **Morphing Shapes**: Kontinuierlich animierende organische Formen im Hero
- **Card Hover Effects**: 3D-Lift Effekte mit Shadow-Transformationen
- **Slider Transitions**: Smooth Carousel-Navigation mit Dot-Indikatoren
- **Button Animations**: Hover-Lift Effekte für alle interaktiven Elemente

## 🛠 Installation & Lokaler Start

### Voraussetzungen
- Node.js 18+
- Bun (empfohlen) oder npm

### Repository klonen
```bash
git clone <your-repo-url>
cd minimax
```

### Dependencies installieren
```bash
# Mit Bun (empfohlen)
bun install

# Oder mit npm
npm install
```

### Development Server starten
```bash
# Mit Bun
bun dev

# Oder mit npm
npm run dev
```

Die Website ist dann verfügbar unter: `http://localhost:3000`

## 🎨 Theme-Konfiguration

Alle visuellen Aspekte können über die `theme.config.js` Datei angepasst werden:

### Farben anpassen
```javascript
// theme.config.js
export const themeConfig = {
  colors: {
    primary: {
      500: '#47a2f8', // Hauptfarbe ändern
      900: '#13253c', // Dunkle Akzentfarbe
    },
    secondary: {
      500: '#ea4e51', // Sekundärfarbe
    },
    accent: {
      500: '#e2af4a', // Akzentfarbe
    }
  }
}
```

### Schriftarten ändern
```javascript
fonts: {
  sans: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
  // Neue Schriftarten hinzufügen
}
```

### Animationen konfigurieren
```javascript
animations: {
  morphing: {
    duration: '8s',      // Morphing-Geschwindigkeit
    timingFunction: 'ease-in-out',
  },
  slider: {
    duration: '0.5s',    // Slider-Transition
  }
}
```

### Button-Styling anpassen
```javascript
components: {
  buttons: {
    primary: {
      bg: '#47a2f8',     // Button Hintergrund
      hover: '#0284c7',  // Hover-Zustand
      text: 'white',     // Textfarbe
    }
  }
}
```

## 🔧 Erweiterte Konfiguration

### Neue Farb-Themes erstellen
1. Öffne `theme.config.js`
2. Definiere neue Farbpaletten:
```javascript
colors: {
  primary: {
    // Dein neues Theme
    500: '#your-color',
    900: '#your-dark-color',
  }
}
```
3. Die Änderungen werden automatisch übernommen

### Morphing-Effekte anpassen
```javascript
components: {
  hero: {
    gradientColors: ['#new-color1', '#new-color2', '#new-color3'],
    morphingShapes: {
      count: 5,                    // Anzahl der Formen
      sizes: ['200px', '150px'],   // Größen
      opacities: [0.8, 0.6],       // Transparenz
    }
  }
}
```

### Slider-Verhalten konfigurieren
Die Slider-Komponenten können über Props angepasst werden:
```tsx
<Slider
  slidesToShow={3}        // Anzahl sichtbarer Slides
  slidesToScroll={1}      // Slides pro Scroll
  autoPlay={true}         // Auto-Play aktivieren
  autoPlayInterval={6000} // Auto-Play Intervall (ms)
/>
```

## 📦 Build & Deployment

### Production Build erstellen
```bash
bun run build
```

### Lokalen Build testen
```bash
bun start
```

### Auf Netlify deployen
Das Projekt ist bereits für Netlify konfiguriert. Einfach das Repository mit Netlify verbinden.

**Build Einstellungen:**
- Build Command: `bun run build`
- Publish Directory: `.next`

## 🔄 Git Workflow

### Änderungen committen
```bash
# Änderungen hinzufügen
git add .

# Commit mit aussagekräftiger Message
git commit -m "Update theme colors and animations

🤖 Generated with [Same](https://same.new)

Co-Authored-By: Same <noreply@same.new>"
```

### Zum Remote Repository pushen
```bash
git push origin main
```

### Automatisches Re-Deployment
Nach dem Push zu GitHub/GitLab triggert Netlify automatisch ein neues Deployment.

## 📁 Projektstruktur

```
minimax/
├── theme.config.js           # 🎨 Theme-Konfiguration
├── src/
│   ├── components/
│   │   ├── Header.tsx        # Navigation & Logo
│   │   ├── Hero.tsx          # Hero mit Morphing-Animationen
│   │   ├── ResearchSection.tsx   # Research Slider
│   │   ├── ProductSection.tsx    # Product Grid
│   │   ├── NewsSection.tsx       # News Timeline
│   │   ├── Footer.tsx        # Footer mit Links
│   │   ├── Slider.tsx        # Wiederverwendbare Slider-Komponente
│   │   └── ui/               # shadcn/ui Komponenten
│   ├── app/
│   │   ├── globals.css       # Globale Styles & Animationen
│   │   ├── layout.tsx        # App Layout
│   │   └── page.tsx          # Hauptseite
│   └── lib/
│       └── utils.ts          # Utility-Funktionen
├── tailwind.config.ts        # Tailwind-Konfiguration
└── package.json
```

## 🎯 Komponenten-Übersicht

### Header
- Responsive Navigation
- Logo mit Gradient
- Mobile Menu (Sheet)
- Scroll-basierte Backdrop-Blur

### Hero
- Morphing Background Shapes
- Gradient Overlays
- CTA Buttons mit Hover-Effekten
- Floating Particles

### Research Section
- Auto-Play Slider
- Model Cards mit verschiedenen Themes
- "NEW" Badges
- Responsive (3→2→1 Slides)

### Product Section
- 3x2 Grid Layout
- Farbkodierte Gradients
- Hover-Lift Animationen
- Category-basierte Farben

### News Section
- Timeline-Style Cards
- Real Images von MiniMax
- Date & Category Badges
- Slider mit Navigation

### Footer
- Dark Theme
- Strukturierte Link-Kategorien
- Social Media Icons
- Copyright & Legal Links

## 🔧 Troubleshooting

### Build-Fehler beheben
```bash
# Cache löschen
rm -rf .next node_modules
bun install
bun run build
```

### Theme-Änderungen werden nicht angezeigt
1. Development Server neu starten
2. Browser-Cache leeren
3. `theme.config.js` Syntax prüfen

### Deployment-Probleme
1. Lokalen Build testen: `bun run build`
2. Environment Variables prüfen
3. Netlify Logs überprüfen

## 📚 Technologie-Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS + CSS Custom Properties
- **Components**: shadcn/ui (Radix-based)
- **Icons**: Lucide React
- **Fonts**: Poppins (Google Fonts)
- **Package Manager**: Bun
- **Deployment**: Netlify
- **TypeScript**: Vollständig typisiert

## 🤝 Contributing

1. Fork das Repository
2. Erstelle einen Feature Branch: `git checkout -b feature/amazing-feature`
3. Commit deine Änderungen: `git commit -m 'Add amazing feature'`
4. Push zum Branch: `git push origin feature/amazing-feature`
5. Erstelle einen Pull Request

## 📄 Lizenz

Dieses Projekt ist für Bildungs- und Demonstrationszwecke erstellt. Alle Rechte an der Original-Website liegen bei MiniMax.

## 🙏 Credits

- Original Design: [MiniMax.io](https://www.minimax.io/)
- UI Components: [shadcn/ui](https://ui.shadcn.com/)
- Icons: [Lucide](https://lucide.dev/)
- Fonts: [Google Fonts - Poppins](https://fonts.google.com/specimen/Poppins)

---

**Made with ❤️ using [Same](https://same.new)**
