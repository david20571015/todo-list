<!-- Use preprocessors via the lang attribute! e.g. <template lang="pug"> -->
<template>
  <div id="app">
    <b-input-group
      class="p-5"
      prepend="New Todo"
    >
      <b-form-input v-model="newTodo" />
      <b-input-group-append>
        <b-button @click="addTodo">
          Add
        </b-button>
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

        <label>{{ item.date }}</label>

        <span>
          <b-button @click="toggleCompletion(index)">
            {{ item.done ? "Uncompleted" : "Completed" }}
          </b-button>
          <b-button
            variant="danger"
            @click="removeTodo(index)"
          > X </b-button>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      newTodo: "",
    };
  },
  computed: mapState(["todos"]),
  methods: {
    addTodo: function () {
      const todoEntry = {
        title: this.newTodo,
        done: false,
        date: new Date().toLocaleString(),
      };

      this.$store.commit("addTodo", todoEntry);
      this.newTodo = "";
    },
    removeTodo: function (index) {
      this.$store.dispatch("removeTodo", index);
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