import Vue from 'vue';
import App from '@/app';
import router from './router';
import store from './store/index.js'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
