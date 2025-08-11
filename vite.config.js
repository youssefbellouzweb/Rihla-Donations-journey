import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // This tells your website where to find all your files
  base: '/Rihla-Donations-journey/',
  
  plugins: [react()],
})