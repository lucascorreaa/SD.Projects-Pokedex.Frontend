import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: path.resolve(__dirname, 'src/index.ts'),
      preserveEntrySignatures: 'exports-only',
      external: ['single-spa'],
      output: {
        format: 'system',
      }
    }
  },
  assetsInclude: ['**/*.html']
});
