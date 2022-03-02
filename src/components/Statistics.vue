<template>
  <div>
    <div class="pro-bar">
      <h4>Done</h4>
      <b-progress
        :value="numOfDoneTodos()"
        :max="numOfTodos()"
        show-value
        variant="success"
      />
    </div>
    <div class="pro-bar">
      <h4>Undone</h4>
      <b-progress
        :value="numOfUndoneTodos()"
        :max="numOfTodos()"
        show-value
        variant="warning"
      />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    numOfDoneTodos: function () {
      return this.$store.getters.doneTodos.length;
    },
    numOfUndoneTodos: function () {
      return this.$store.getters.undoneTodos.length;
    },
    numOfTodos: function () {
      return this.numOfDoneTodos() + this.numOfUndoneTodos();
    },
  },
};
</script>

<style>
.pro-bar {
  padding: 10px 50px;
}
</style>
