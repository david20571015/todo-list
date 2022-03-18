<template>
  <div id="app">
    <b-input-group
      class="p-5"
      prepend="New Todo"
    >
      <b-form-input v-model="newTodo" />
      <b-input-group-append>
        <b-button @click="addEntry">
          Add
        </b-button>
      </b-input-group-append>
    </b-input-group>

    <ul class="list-group p-5">
      <TodoItem
        v-for="(item, index) in todos"
        :key="index"
        :item="item"
        :index="index"
        class="
          list-group-item
          d-flex
          justify-content-between
          align-items-center
        "
      />
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

import TodoItem from "./TodoItem.vue";

export default {
  components: {
    TodoItem,
  },
  data() {
    return {
      newTodo: "",
    };
  },
  computed: mapState(["todos"]),
  methods: {
    addEntry: function () {
      const todoEntry = {
        title: this.newTodo,
        done: false,
        date: new Date().toLocaleString(),
      };

      this.newTodo = "";
      this.$store.commit("addTodo", todoEntry);
    },
  },
};
</script>