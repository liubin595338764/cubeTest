// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill';
// import Vue from 'vue'
import App from './app';

Vue.use(cube);
import cubePack from "./cubePack"
Vue.use(cubePack);    //此方法一定要在 Vue.use(cube) 之后使用；


Vue.config.devtools = true;
Vue.config.productionTip = false;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
});

