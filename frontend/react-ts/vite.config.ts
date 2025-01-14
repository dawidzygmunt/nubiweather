import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      // Załóżmy, że Twój backend Nest działa na porcie 3000
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
        // Opcjonalnie: jeśli chcesz usunąć '/api' z ścieżki
        // rewrite: (path) => path.replace(/^\/api/, '')
      },
    },
  },
})
