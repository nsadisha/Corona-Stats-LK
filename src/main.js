import Vue from 'vue'
import App from './App.vue'
import router from './router';

//Import global components
import Footer from './components/Footer.vue'

//Register components
Vue.component('Footer',Footer)

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
