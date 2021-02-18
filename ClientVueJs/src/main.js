import Vue from 'vue';
import Router from './router.js';
import App from './app/app.vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.devtools = true;
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  el: '#app',
  render: h => h(App),
  components: {
    App
  },
  router: Router
})