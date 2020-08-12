<template>
<div>
  <router-view />
  <ul class="footer">
    <li class="icons"><router-link :to="{name: 'list'}">新闻列表</router-link></li>
    <li class="icons"><router-link :to="{name: 'user'}">个人中心</router-link></li>

  </ul>
</div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scopd lang="scss">
li{
  list-style: none;
}
a{
  text-decoration: none;
  color: skyblue;
  display: block;
  &.active{
    color: tomato;
    background: #42b983;
  }
}
.footer{
  position: fixed;
  width: 100%;
  height: 60px;
  line-height: 60px;
  left: 0;
  bottom: 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  padding: 0;
}
.icons{
  font-size: 16px;
  flex: 1;
  text-align: center;
  border-top: 1px solid gray;
  text-decoration: none;  
}
</style>