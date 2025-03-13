import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const PUBLIC_PATH = process.env.PUBLIC_PATH
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: PUBLIC_PATH,
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})
