/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        editorial: {
          DEFAULT: '#FDFBF7', // 70% Fondo principal (Crema Editorial)
          warm: '#F5EFE6',    // Fondo cálido secundario
          border: '#E6DCCE',  // Divisores y bordes sutiles
        },
        carbon: {
          DEFAULT: '#222222', // 20% Estructura y texto (Negro Carbón)
          card: '#1A1817',    // Tarjetas oscuras y contraste
          light: '#2D2926',   // Gris grafito
          border: '#3A3430',
        },
        terracota: {
          DEFAULT: '#EF7B38', // 10% Acentos y llamados a la acción (Naranja Creador)
          light: '#FDF1EB',
          dark: '#D96620',
          hover: '#D96620',
        },
        dorado: {
          DEFAULT: '#C59B27', // Distinciones de honor y sellos
          subtle: '#FAF2DE',
          light: '#E8CA78',
        }
      },
      fontFamily: {
        title: ['Montserrat', 'sans-serif'],
        serif: ['EB Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        elevated: '0 12px 32px -4px rgba(34, 34, 34, 0.08), 0 4px 12px -2px rgba(34, 34, 34, 0.04)',
        subtle: '0 2px 8px rgba(34, 34, 34, 0.04), 0 1px 2px rgba(34, 34, 34, 0.02)',
      }
    },
  },
  plugins: [],
};
