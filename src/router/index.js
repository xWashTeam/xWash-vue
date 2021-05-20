import { createRouter, createWebHashHistory } from "vue-router";
import hello from "../views/Home.vue";
import Page from "../components/Page.vue";
// import BetterFeedback from "../components/BetterFeedback.vue";
import Feedback from "../components/Feedback.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: hello,
  },
  {
    path: "/s/:building",
    name: "building",
    component: Page,
  },
  {
    path : "/feedback",
    name : "feedback",
    component: Feedback
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
