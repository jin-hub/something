<template>
  <div>
    <ul>
      <li v-for="(item,index) in pageLists" :key="index">标题：{{item.title}}<br>内容：{{item.content}}<br>上传时间：{{item.timeNow}}</li>
    </ul>
  </div>
</template>

<script>
import store from "@/store";
export default {
  name: "List",
  store,
  computed: {
    pageLists() {
      return store.state.lists;
    },
  },
};
</script>

<style>
</style>