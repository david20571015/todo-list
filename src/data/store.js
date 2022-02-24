import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todos: [{ title: "test", date: new Date().toLocaleString() }],
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push(todo);
    },
    removeTodoEntry(state, index) {
      state.todos.splice(index, 1);
    },
  },
  actions: {
    removeTodo({ commit }, index) {
      commit("removeTodoEntry", index);
    },
  },
});

export default store;
