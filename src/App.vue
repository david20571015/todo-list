<!-- Use preprocessors via the lang attribute! e.g. <template lang="pug"> -->
<template>
  <div id="app">
    <h1>Todo List</h1>
    <TodoList />
  </div>
</template>

<script>
import TodoList from "./components/TodoList.vue";

export default {
  components: {
    TodoList,
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