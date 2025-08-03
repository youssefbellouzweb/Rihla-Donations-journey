import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Add this 'base' property:
  base: '/bbdbd/', // <-- IMPORTANT: Replace 'rihla-vision' with your repository name
  plugins: [react()],
})