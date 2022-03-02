import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import TodoList from "./components/TodoList.vue";
import Statistics from "./components/Statistics.vue";
import store from "./data/store";

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

Vue.config.productionTip = false;

const routes = [
  { path: "/", component: TodoList },
  { path: "/statistics", component: Statistics }
];

const router = new VueRouter({ routes });

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
