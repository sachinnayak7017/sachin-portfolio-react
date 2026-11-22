
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  plugins: [react()],

  // GitHub Pages uses a repository subpath.
  // Vercel serves from the domain root.
  base: isGitHubActions ? '/sachin-portfolio-react/' : '/',
});
