<template>
  <li :style="[item.done ? {'background-color':'#a0d8ef'} : {'background-color':'#ee827c'}]">
    <label>{{ item.title }}</label>

    <label>{{ item.date }}</label>

    <span>
      <b-button @click="toggleDone(index)">
        {{ item.done ? "Uncompleted" : "Completed" }}
      </b-button>
      <b-button
        variant="danger"
        @click="$emit('remove', index)"
      > X </b-button>
    </span>
  </li>
</template>

<script>
export default {
  props: {
    item: { type: Object, required: true },
    index: { type: Number, required: true },
  },
  methods: {
    toggleDone: function (index) {
      this.$store.commit("toggleDone", index);
      console.log(index);
    },
  },
};
</script>
