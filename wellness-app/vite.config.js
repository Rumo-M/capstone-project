import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // Output directory for the build
    assetsDir: 'assets', // Place your static assets in the "assets" folder
  },
});
