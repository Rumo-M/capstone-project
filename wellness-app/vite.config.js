import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // Ensure that both .js and .jsx files are handled
    extensions: ['.js', '.jsx'],
  },
  build: {
    // Optional: Customize output options if needed
    rollupOptions: {
      output: {
        manualChunks: undefined, // You can split your code here if needed
      },
    },
  },
});
