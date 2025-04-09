import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',  // Where the build output will be placed
    rollupOptions: {
      input: 'index.html', // Ensure it points to your entry HTML file
    },
    chunkSizeWarningLimit: 1000,  // You can adjust chunk size warnings if necessary
  },
});
