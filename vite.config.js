import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/proyecto1/',
  plugins: [react()],
  preview: {
    host: true,
    port: 8080
  }
  });

