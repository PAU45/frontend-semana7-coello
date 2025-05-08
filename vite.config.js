import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
    // Esta es la configuración esencial para React Router
    proxy: {
      // Configura un fallback para que todas las rutas no encontradas
      // vayan al index.html, donde React Router se encargará
      '/*': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        rewrite: (path) => '/index.html'
      }
    }
  }
})