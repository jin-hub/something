<template>
  <div class="home" id="bg">
    <h2 id="msg">{{ msg }}</h2>
    <div id="msg2">一题20分，共5题，满分100</div>
    <div>
      <button id="start_button" @click="start()"></button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      msg: "检测智商的时候到啦！"
    };
  },
  methods: {
    start() {
      this.$router.push("./question");
    }
  }
};
</script>
<style>
html {
  height: 100%;
  width: 100%;
}
body {
  height: 100%;
  width: 100%;
  background: url(../pic/bgimg.jpg) no-repeat;
  background-size: 100% 100%;
}
div {
  color: aliceblue;
}
#msg {
  font-size: 20px;
  font-family: align-self;
}
#msg2 {
  font-size: 16px;
  margin: 50px;
}
#start_button {
  display: block;
  height: 2.1rem;
  width: 4.35rem;
  background-size: 100% 100%;
  position: absolute;
  top: 16.5rem;
  left: 50%;
  margin-left: -2.4rem;
  background-repeat: no-repeat;
  background-image: url(../pic/start.png);
}
</style>
