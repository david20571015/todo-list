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
import { useVuex } from "@vueblocks/vue-use-vuex";

export default {
  setup() {
    const { useGetters } = useVuex();
    return {
      ...useGetters(["doneTodos", "undoneTodos"]),
    };
  },
  computed: {
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
