import Vue from 'vue';
import App from './App.vue';
import store from './store'
import Element from 'element-ui'
import router from './router';
import './icons' // icon
import './registerServiceWorker'

Vue.config.productionTip = false;
Vue.use(Element)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app');
