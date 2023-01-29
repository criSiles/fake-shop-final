import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import haveRoleGuard from "./role-guard";
import ProfileView from "../views/ProfileView.vue";
import ProductView from "../views/ProductView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    beforeEnter: haveRoleGuard,
  },
  {
    // The default route
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfileView,
    beforeEnter: haveRoleGuard,
  },
  {
    path: "/product/:id",
    name: "product",
    component: ProductView,
    beforeEnter: haveRoleGuard,
  },
  // Route for any other path that doesn't match
  // any of the above routes. This route should
  // redirect to the home page.
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
