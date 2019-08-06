// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'core-js/es6/promise'
import 'core-js/es6/string'
import 'core-js/es7/array'

import Vue from 'vue'
// import VueSweetalert2 from 'vue-sweetalert2'
import App from './App'
import router from './router'
import Vuelidate from 'vuelidate'
import VueTheMask from 'vue-the-mask'
import vSelect from 'vue-select'
import alert from './plugin/alert'
import notif from './plugin/notification'
// import Snotify from "vue-snotify";

// import "vue-snotify/styles/material.css";


// import Notification from "./plugin/notification";

// import Multiselect from 'vue-multiselect';
// import 'vue-multiselect/dist/vue-multiselect.min.css'

import {ServerTable, ClientTable} from 'vue-tables-2';
import BootstrapVue from 'bootstrap-vue';

import VueCurrencyFilter from 'vue-currency-filter';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// todo
Vue.use(notif);
Vue.use(alert);
Vue.component('v-select', vSelect);
Vue.use(ServerTable);
Vue.use(ElementUI);
Vue.use(ClientTable);
Vue.use(Vuelidate);
Vue.use(VueTheMask);
Vue.use(BootstrapVue);
// Vue.use(VueSweetalert2);
Vue.use(VueCurrencyFilter,{
  symbol : 'Rp',
  thousandsSeparator: '.',
  fractionCount: 2,
  fractionSeparator: ',',
  symbolPosition: 'front',
  symbolSpacing: true
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
});
