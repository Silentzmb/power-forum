import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

/* 第三方框架 */
import Antd from 'ant-design-vue'

/* js */
import ToastClass from './utils/toast'

/* css */
import './assets/css/reset.css'
import './assets/scss/index.scss'
import 'ant-design-vue/dist/antd.css'

Vue.use(Antd)

Vue.prototype.$toast = ToastClass.getInstance()

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
