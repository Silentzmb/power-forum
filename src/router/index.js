import Vue from "vue";
import VueRouter from "vue-router";
import _import from "./_import";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: _import("home/index"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
