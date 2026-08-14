/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        editorial: {
          DEFAULT: '#FAF7F2',
          light: '#FFFFFF',
          warm: '#F3ECE0',
          border: '#E8DFD1',
          darkBorder: '#3A332C',
        },
        carbon: {
          DEFAULT: '#161413',
          card: '#1E1B19',
          light: '#2A2522',
          border: '#3D352F',
        },
        terracota: {
          DEFAULT: '#D96B27',
          hover: '#C05718',
          light: '#FCF3EC',
          glow: 'rgba(217, 107, 39, 0.28)',
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
        'subtle': '0 2px 8px rgba(22, 20, 19, 0.04), 0 1px 2px rgba(22, 20, 19, 0.02)',
        'elevated': '0 12px 32px -4px rgba(22, 20, 19, 0.08), 0 4px 12px -2px rgba(22, 20, 19, 0.04)',
      }
    },
  },
  plugins: [],
};
