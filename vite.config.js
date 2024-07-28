import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/E-commerce-website/',
  plugins: [react()],
  server :{
    // host : '10.13.1.8',
  }
})
