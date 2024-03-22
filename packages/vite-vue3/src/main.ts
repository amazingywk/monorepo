import { createApp } from 'vue'
import App from './App.vue'
import MTD from '@ss/mtd-vue3';
import '@ss/mtd-vue3/lib/theme-chalk/index.css'
import router from './routers';

createApp(App).use(router).use(MTD).mount('#app');
