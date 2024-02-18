import { defineConfig } from 'vite';
// import vue from '@vitejs/plugin-vue';
import {createVuePlugin} from 'vite-plugin-vue2';
import vue from '@vitejs/plugin-vue2';
import Core from '@vueuse/core';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@vue/composition-api': 'vue',
    }
  },
  server: {
    port: 4000,
  },
})
1