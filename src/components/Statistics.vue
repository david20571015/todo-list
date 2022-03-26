<template>
  <div>
    <div class="pro-bar">
      <h4>Done</h4>
      <b-progress
        :value="doneTodos.length"
        :max="numOfTodos"
        show-value
        variant="success"
      />
    </div>
    <div class="pro-bar">
      <h4>In process</h4>
      <b-progress
        :value="undoneTodos.length"
        :max="numOfTodos"
        show-value
        variant="warning"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({ doneTodos: "doneTodos", undoneTodos: "undoneTodos" }),
    numOfTodos: function () {
      return this.doneTodos.length + this.undoneTodos.length;
    },
  },
};
</script>

<style>
.pro-bar {
  padding: 10px 50px;
}
</style>
