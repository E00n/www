import Vue from "vue";
import ElementUI from "element-ui";
import "../theme/index.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

Vue.config.productionTip = false;
Vue.config.devtools = true;

Vue.use(ElementUI);
NProgress.inc(0.2);
NProgress.configure({ easing: "ease", speed: 500, showSpinner: false });

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
