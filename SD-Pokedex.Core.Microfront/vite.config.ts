import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.tsx'),
      name: 'core',
      formats: ['es']
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'single-spa'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'single-spa': 'singleSpa'
        }
      }
    }
  }
});
