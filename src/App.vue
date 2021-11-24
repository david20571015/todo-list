<!-- Use preprocessors via the lang attribute! e.g. <template lang="pug"> -->
<template>
  <div id="app">
    <b-input-group class="p-5" prepend="New Todo">
      <b-form-input v-model="newTodo"></b-form-input>
      <b-input-group-append>
        <b-button v-on:click="addTodo">Add</b-button>
      </b-input-group-append>
    </b-input-group>

    <ul class="list-group p-5">
      <li
        v-for="(item, index) in todos"
        :key="index"
        class="
          list-group-item
          d-flex
          justify-content-between
          align-items-center
        "
      >
        <label v-if="!item.done">{{ item.title }}</label>
        <del v-else>{{ item.title }}</del>

        <span>
          <b-button v-on:click="toggleCompletion(index)">
            {{ item.done ? "Uncompleted" : "Completed" }}
          </b-button>
          <b-button variant="danger" v-on:click="removeTodo(index)">
            X
          </b-button>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: [],
      newTodo: "",
    };
  },
  mounted() {
    if (localStorage.getItem("todos")) {
      try {
        this.todos = JSON.parse(localStorage.getItem("todos"));
      } catch (e) {
        localStorage.removeItem("todos");
      }
    }
  },
  updated() {
    localStorage.setItem("todos", JSON.stringify(this.todos));
  },
  methods: {
    addTodo: function () {
      this.todos.push({
        title: this.newTodo,
        done: false,
      });
      this.newTodo = "";
    },
    toggleCompletion: function (index) {
      this.todos[index].done = !this.todos[index].done;
    },
    removeTodo: function (index) {
      this.todos.splice(index, 1);
    },
  },
};
</script>

<!-- Use preprocessors via the lang attribute! e.g. <style lang="scss"> -->
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>