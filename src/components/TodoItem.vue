<template>
  <li :style="[item.done ? {'background-color':'#698aab'} : {'background-color':'#a0d8ef'}]">
    <label v-if="!isEditing">{{ item.title }}</label>
    <b-form-input
      v-else
      v-model="newTitle"
      :placeholder="[[item.title]]"
    />

    <b-button @click="editTitle(newTitle)">
      <b-icon icon="pencil-fill" />
    </b-button>

    <label>{{ item.date }}</label>

    <span>
      <b-button @click="toggleDone(index)">
        {{ item.done ? "Incompleted" : "Completed" }}
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
  data() {
    return { isEditing: false, newTitle: "" };
  },
  methods: {
    editTitle: function (newTitle) {
      if (this.isEditing && newTitle.trim().length > 0) {
        this.$store.commit("updateTitle", {
          index: this.index,
          title: newTitle.trim(),
        });
      }
      this.newTitle = "";
      this.isEditing = !this.isEditing;
    },
    toggleDone: function (index) {
      this.$store.commit("toggleDone", index);
      console.log(index);
    },
  },
};
</script>
