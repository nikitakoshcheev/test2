import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import * as VueThreejs from "vue-threejs";
Vue.use(VueThreejs);
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.config.productionTip = false;
Vue.directive('sticky', {
  bind: function (el, binding) {
    el.style.position = 'sticky'
    el.style.background = '#f1f1f1'
    el.style.border = '2px'
    el.style.top = binding.value + 'px'
  }
})
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
