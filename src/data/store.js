import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todos: [],
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push(todo);
    },
    removeTodoEntry(state, index) {
      state.todos.splice(index, 1);
    },
    toggleDone(state, index) {
      state.todos[index].done = !state.todos[index].done;
    }
  },
  actions: {
    removeTodo({ commit }, index) {
      commit("removeTodoEntry", index);
    },
  },
});

export default store;
