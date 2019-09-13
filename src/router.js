import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Campaigns from "./views/Campaigns.vue";
import { cpus } from "os";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/campaigns",
      name: "Campaigns",
      component: Campaigns
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
