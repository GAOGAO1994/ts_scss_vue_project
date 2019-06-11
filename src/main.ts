import '@/polyfill' // ?
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import ElementUI from 'element-ui'
import '@/directive'
import '@/axios'
import '@/filter' // ?
// import '@/directive' // ?
// import '@/rxjs'  // ??? +
// /*import '@/UI'*/
// import "@/persistence/injection/ModuleManager"  // ?? +

Vue.config.productionTip = false;
Vue.use(ElementUI);

export default new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
