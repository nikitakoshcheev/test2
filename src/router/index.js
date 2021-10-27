import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import About2 from "../views/About2.vue";
import About3 from "../views/About3.vue";
import About4 from "../views/About4.vue";
import anim from "../views/anim.vue";
import anim2 from "../views/anim2.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/anim",
    name: "anim",
    component: anim,
  },
  {
    path: "/anim2",
    name: "anim2",
    component: anim2,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/about2",
    name: "About2",
    component: About2,
  },
  {
    path: "/about3",
    name: "About3",
    component: About3,
  },
  {
    path: "/about4",
    name: "About4",
    component: About4,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
