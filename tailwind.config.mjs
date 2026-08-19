/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#FAF7F0', // Fondo pergamino marfil / vellum
          warm: '#F2ECE1',    // Fondo secundario cálido
          card: '#FFFFFF',    // Tarjeta blanca pura
          border: '#E3D7C5',  // Filete de encuadernación
          line: '#D1C2AC',    // Línea de separación
        },
        ink: {
          DEFAULT: '#191614', // Tinta carbón puro
          deep: '#0B0A09',    // Negro obsidiana profundo
          card: '#141210',    // Superficie oscura de lujo
          muted: '#4A443E',   // Gris grafito de lectura
          faint: '#7A7268',   // Metadatos y colofón
        },
        cacao: {
          DEFAULT: '#B84E20', // Terracota cálido de Tabasco
          light: '#F8EDE7',
          dark: '#8F3812',
          glow: 'rgba(184, 78, 32, 0.35)',
        },
        oro: {
          DEFAULT: '#9E782F', // Oro viejo / Bistre con contraste accesible
          bright: '#C4973B',  // Destello dorado
          subtle: '#F6F0E2',
          dark: '#7A5B1E',
        },
        editorial: {
          DEFAULT: '#FAF7F0',
          warm: '#F2ECE1',
          border: '#E3D7C5',
        },
        carbon: {
          DEFAULT: '#191614',
          card: '#141210',
          light: '#2D2926',
          border: '#3A3430',
        },
        terracota: {
          DEFAULT: '#B84E20',
          light: '#F8EDE7',
          dark: '#8F3812',
          hover: '#8F3812',
        },
        dorado: {
          DEFAULT: '#9E782F',
          subtle: '#F6F0E2',
          light: '#E8CA78',
        }
      },
      fontFamily: {
        monograph: ['Newsreader', 'EB Garamond', 'Georgia', 'serif'],
        serif: ['EB Garamond', 'Newsreader', 'Georgia', 'serif'],
        display: ['Cinzel', 'EB Garamond', 'serif'],
        swiss: ['Plus Jakarta Sans', 'Inter', '-apple-system', 'sans-serif'],
        title: ['Plus Jakarta Sans', 'Montserrat', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      letterSpacing: {
        'widest-editorial': '0.22em',
        'loose-caps': '0.15em',
        'tight-title': '-0.025em',
      },
      boxShadow: {
        elevated: '0 16px 36px -6px rgba(25, 22, 20, 0.08), 0 4px 12px -2px rgba(25, 22, 20, 0.04)',
        subtle: '0 2px 8px rgba(25, 22, 20, 0.04), 0 1px 3px rgba(25, 22, 20, 0.02)',
        'book-spine': '-4px 0 12px rgba(0,0,0,0.08), 8px 12px 24px rgba(25,22,20,0.08)',
        'folio-hover': '0 20px 35px -8px rgba(25,22,20,0.12), 0 1px 3px rgba(25,22,20,0.05)',
        'glow-terracota': '0 0 25px rgba(184, 78, 32, 0.25)',
      }
    },
  },
  plugins: [],
};
