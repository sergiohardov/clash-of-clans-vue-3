import { createRouter, createWebHashHistory } from "vue-router";

const routerHistory = createWebHashHistory();

import HomePage from "@/pages/homePage";
import AboutPage from "@/pages/aboutPage";
import NotFoundPage from "@/pages/notfoundPage";

const routers = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/about",
      name: "about",
      component: AboutPage,
    },
    {
      path: "/:CatchAll(.*)",
      name: "404",
      component: NotFoundPage,
    },
  ],
});

export default routers;
