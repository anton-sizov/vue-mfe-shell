import path from 'path';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  base: '/vue-mfe-shell/',
  plugins: [
    vue(),
    federation({
      name: 'vue-mfe-shell',
      remotes: {
        'vue-mfe1': 'https://anton-sizov.github.io/vue-mfe1/assets/remoteEntry.js',
      },
      shared: ['vue'],
    }),
  ],
  resolve: {
    alias: {
      find: '@',
      replacement: path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: ['chrome89', 'edge89', 'firefox89', 'safari15'],
  },
})
