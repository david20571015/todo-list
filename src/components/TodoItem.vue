<template>
  <li :style="{'background-color':`${item.done ? '#698aab' : '#a0d8ef'}`}">
    <label v-if="!isEditing">{{ item.title }}</label>
    <b-form-input
      v-else
      v-model="newTitle"
      :placeholder="item.title"
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
        @click="removeEntry(index)"
      > X </b-button>
    </span>
  </li>
</template>

<script>
export class Item {
  constructor(title, date, done) {
    this.title = title;
    this.date = date;
    this.done = done;
  }
}

export default {
  props: {
    item: { type: Item, required: true },
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
    removeEntry: function (index) {
      this.$store.commit("removeTodoEntry", index);
    },
  },
};
</script>
