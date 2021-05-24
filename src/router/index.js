import Vue from "vue";
import VueRouter from "vue-router";
import Cars from "../views/Cars";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/cars",
    name: "home",
  },
  {
    path: "/cars",
    component: Cars,
    name: "cars",
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
