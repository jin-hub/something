<template>
  <div>
    <div v-if="score != 100">你的分数是{{ score }}</div>
    <div>100分？小伙子是不是偷看了正确答案</div>
    <div>用时{{ time }}秒</div>
  </div>
</template>

<script>
import store from "@/store";
export default {
  name: "Score",
  store,
  computed: {
    score() {
      return store.state.score;
    },
    time() {
      return store.state.time;
    }
  }
};
</script>

<style></style>
