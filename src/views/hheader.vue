<template>
<div class="container">
  <header>
    
      <div class="title">
        <h3>{{ title }}</h3>
      </div>
      <div class="navigation">
        <router-link to="/">首页</router-link> |
        <router-link to="/s/d19">东十九</router-link> |
        <router-link to="/s/xi1">西一</router-link> | 
        <router-link to="/s/xi2">西二</router-link> |
        <!-- <router-link to="/s/test">神秘楼</router-link> | -->
        <router-link to="/feedback">反馈</router-link>
      </div>
  </header>
  </div>
</template>
<script>
export default {
  name: "hheader",
  data() {
    return {
      title: "xWash",
    };
  },
};
</script>
<style scoped lang="scss">
.container {
  position: sticky;
  top:0%;
  z-index: 99;
}

.title {
  position: absolute;
  top: 33%;
  left: 1%;
  h3 {
    color: #3679bd;
    padding: 0px 0px 10px 0px;
  }
}
.navigation {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
header {
  text-align: left;
  background-color: aliceblue;
  width: 100%;
  height: 52px;
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
