import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
  server: {
    port: 5173,
    proxy: {
      // Forward API calls to the ASP.NET Core backend during development
      // so the browser sees same-origin requests (no CORS needed locally).
      '/api': {
        target: 'http://localhost:5009',
        changeOrigin: true,
      },
    },
  },
})
