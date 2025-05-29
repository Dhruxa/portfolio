/**  @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(79, 70, 229, 0.6)' },
          '100%': { boxShadow: '0 0 20px rgba(79, 70, 229, 0.8)' }
        }
      },
      backgroundImage: {
        'space': "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw1fHxzcGFjZSUyMGdhbGF4eSUyMGRhcmslMjBiYWNrZ3JvdW5kfGVufDB8fHx8MTc0ODUxNDcyNnww&ixlib=rb-4.1.0')",
        'stars': "url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw0fHxzcGFjZSUyMGdhbGF4eSUyMGRhcmslMjBiYWNrZ3JvdW5kfGVufDB8fHx8MTc0ODUxNDcyNnww&ixlib=rb-4.1.0')",
      }
    },
  },
  plugins: [],
  darkMode: 'class',
};
  