import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // This line is the entire fix.
  // It tells your website its address includes '/Rihla-Donations-journey/'.
  base: '/Rihla-Donations-journey/',
  
  plugins: [react()],
})