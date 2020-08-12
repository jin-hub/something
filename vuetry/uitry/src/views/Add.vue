<template>
  <div>
    <p>新闻标题</p>
    <input type="text" v-model="title" />
    <p>新闻内容</p>
    <input type="text" v-model="content" />
    <div>
      <button class="btn" @click="add()">提交</button>
    </div>
  </div>
</template>

<script>
import store from "@/store";
export default {
  name: "Add",
  data() {
    return {
      title: "",
      content: "",
      time: new Date(),
    };
  },
  methods: {
    add() {
      store.commit(
        "addItem",
        {
          title: this.title,
          content: this.content,
          timeNow: this.time.toLocaleString()
        },
        (this.title = ""),
        (this.content = ""),
        (this.timeNow = ""),
        this.$router.push("/home/list")
      );
    },
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
</style>