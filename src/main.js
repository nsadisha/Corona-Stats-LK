import Vue from 'vue'
import App from './App.vue'
import router from './router';

//Import global components
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'

//Register components
Vue.component('Footer',Footer)
Vue.component('Header',Header)

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
