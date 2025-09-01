import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   server: {
    host: true,         // 👈 Expose to network (i.e., your main browser)
    port: 5173          // 👈 Optional, just to be sure
  }
})
