import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/todoproject/', // Base URL for GitHub Pages deployment
  plugins: [react()],
});
