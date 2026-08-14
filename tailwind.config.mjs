/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        editorial: {
          DEFAULT: '#FDFBF7', // 70% Fondo Crema Editorial
          light: '#FFFFFF',
          warm: '#F5EFE6',
          border: '#E6DCCE',
          darkBorder: '#3A3430',
        },
        carbon: {
          DEFAULT: '#222222', // 20% Estructura y Texto Negro Carbón
          card: '#1A1817',
          light: '#2D2926',
          border: '#3A3430',
        },
        terracota: {
          DEFAULT: '#EF7B38', // 10% Acentos y CTA Naranja Creador
          hover: '#D96620',
          light: '#FDF1EB',
          glow: 'rgba(239, 123, 56, 0.28)',
        },
        naranja: {
          DEFAULT: '#EF7B38',
          hover: '#D96620',
          light: '#FDF1EB',
          glow: 'rgba(239, 123, 56, 0.28)',
        },
        dorado: {
          DEFAULT: '#C59B27',
          light: '#E8CA78',
          subtle: '#FAF2DE',
        }
      },
      fontFamily: {
        serif: ['"EB Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        title: ['Montserrat', 'sans-serif'],
        display: ['Cinzel', 'serif']
      },
      boxShadow: {
        'book': '14px 18px 30px rgba(0,0,0,0.22), -3px 0 6px rgba(255,255,255,0.6) inset',
        'book-hover': '20px 24px 38px rgba(0,0,0,0.30), -3px 0 6px rgba(255,255,255,0.75) inset',
        'subtle': '0 2px 8px rgba(34, 34, 34, 0.04), 0 1px 2px rgba(34, 34, 34, 0.02)',
        'elevated': '0 12px 32px -4px rgba(34, 34, 34, 0.08), 0 4px 12px -2px rgba(34, 34, 34, 0.04)',
        'portrait': '0 20px 40px -15px rgba(0,0,0,0.18), 0 0 0 1px rgba(230, 220, 206, 0.8)',
      }
    },
  },
  plugins: [],
};
