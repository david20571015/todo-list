<template>
  <li>
    <label v-if="!item.done">{{ item.title }}</label>
    <del v-else>{{ item.title }}</del>

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
  methods:{
      toggleDone: function(index){
        this.$store.commit("toggleDone", index);
        console.log(index);
      },
  }
};
</script>
