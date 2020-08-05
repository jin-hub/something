<template>
  <div>
    <ul>
      <li
        v-for="(item,index) in lists"
        :key="index"
        @click="choose(index)"
        :class="{active: index == current && current !== ''}"
      >{{item}}</li>
    </ul>
    <button type="button" @click="add()">add</button>
    <ul>
      <li v-for="(item,index) in target" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "demo1",
  data() {
    return {
      current: "",
      lists: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      target: [],
    };
  },
  methods: {
    choose(index) {
      this.current = index;
    },
    add() {
      if (this.current === '') {
        //   全等非常关键 否则会导致1无法添加到target数组里
        // 原因是''==0返回true，''===0返回false
        return;
      }
      this.target.push(this.lists[this.current]);
      this.current = '';
    },
  },
};
</script>

<style>
li.active {
  background: skyblue;
}
</style>