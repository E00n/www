import Vue from "vue";
import Router from "vue-router";

import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Product from "./views/Product.vue";
import News from "./views/News.vue";
import Notice from "./views/Notice.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/product",
      name: "product",
      component: Product
    },
    {
      path: "/news",
      name: "news",
      component: News
    },
    {
      path: "/notice",
      name: "notice",
      component: Notice
    }
  ]
});
