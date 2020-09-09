<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">返回主页</router-link> |
      <router-link to="/about">版权所有</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #979a9c;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #979a9c;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
