import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/ProjectHandler-LandingPage', // 👈 IMPORTANT: replace with your GitHub repo name

})
