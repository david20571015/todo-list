<!-- Use preprocessors via the lang attribute! e.g. <template lang="pug"> -->
<template>
  <div id="app">
    <h1>Todo List</h1>

    <p>
      <b-button to="/">
        Home
      </b-button>
      <b-button to="/statistics">
        Statistics
      </b-button>
    </p>

    <router-view />
  </div>
</template>

<!-- Use preprocessors via the lang attribute! e.g. <style lang="scss"> -->
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>