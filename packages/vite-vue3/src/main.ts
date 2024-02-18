import { createApp } from 'vue'
import App from './App.vue'
import MTD from '@ss/mtd-vue3';
import '@ss/mtd-vue3/lib/theme-chalk/index.css'

createApp(App).use(MTD).mount('#app')
