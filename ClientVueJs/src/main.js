import Vue from 'vue';
import Router from './router.js';
import App from './app/app.vue';

Vue.config.devtools = true;

new Vue({
  el: '#app',
  render: h => h(App),
  components: {
    App
  },
  router: Router
})