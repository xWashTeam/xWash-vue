<template>
  <div class="background"></div>
  <hheader />
  <div id="nav">
    <router-view />
  </div>
  <v-footer>
    <h3></h3>
  </v-footer>
</template>
<script>
import hheader from "./views/hheader.vue";
export default {
  components: {
    hheader,
  },
  created(){
  }
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.background {
  background: url("./assets/blue-gradients.jpg");
  background-size: 100% 100%;
  left: -2%;
  top: -3%;
  width: 105%;
  height: 105%; /**宽高100%是为了图片铺满屏幕 */
  z-index: -1;
  position: fixed;
}
#nav {
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
