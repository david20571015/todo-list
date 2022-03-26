import VueRouter from "vue-router";

import TodoList from "../components/TodoList.vue";
import Statistics from "../components/Statistics.vue";

const routes = [
  { path: "/", component: TodoList },
  { path: "/statistics", component: Statistics },
];

const router = new VueRouter({ routes });

export default router;
