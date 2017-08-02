// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import store from './store';
import filters from './common/filters'

Vue.config.productionTip = false;
Vue.use(axios)
/* eslint-disable no-new */
Object.keys(filters).forEach((ele, index) => {
  Vue.filter(ele, filters[ele])
})
// const formatTab = Vue.filter('formatTab')
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
