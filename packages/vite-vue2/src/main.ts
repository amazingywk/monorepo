import Vue from 'vue';
import App from './App.vue'


import MTD from '@ss/mtd-vue2';
import './index.scss';
// import '@ss/mtd-vue/lib/theme2/index.css'


// import MTD from '@ss/mtd-vue';

// import VueCompositionAPI from '@vue/composition-api';
// Vue.use(VueCompositionAPI);


// MTD.config({ prefixCls: 'mtd' });


Vue.prototype.$mtd = Vue.prototype.$mtd || {};
Vue.use(MTD);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
