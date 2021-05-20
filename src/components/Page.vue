<template>
  <div class="hello">
    <div class="box" v-show="show">
      <StatusDiv
        v-for="(item, index) in json"
        :key="index"
        v-bind:json="item"
      >
      </StatusDiv>
    </div>
    <div class="error" v-show="!show">
      <h1>出错啦 !!!</h1>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import StatusDiv from "./StatusDiv.vue";
export default {
  name: "Page",
  components: {
    StatusDiv,
  },
  data: function () {
    return {
      json: "",
      timer: null, // 定时器用于定时刷新页面
      building: this.$route.params.building,
      show: true,
    };
  },
  methods:{
    getStatus:function(){
      axios.get(this.$store.state.apiLink + this.$route.params.building).then(
        (response) => {
          this.json = response["data"]["data"];
          this.show = true;
        },
        () => {
          this.show = false;
        }
      );
    }
  },
  props: {
    // building: String,
  },
  mounted() {
    this.getStatus();
    this.timer = setInterval(() => {
      this.getStatus();
    }, 30000);
    
    this.$watch(
      () => this.$route.params,
      () => {
        // 对路由变化做出响应...
        this.getStatus();
      }
    );
  },
  unmounted(){
    clearInterval(this.timer)
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  margin: 0 auto;
  width: 850px;
  height: auto;
  display: grid;
  grid-template-rows: repeat(6, 200px);
  grid-template-columns: repeat(2, 400px);
  gap: 10px;
}
.error {
  color: rgb(255, 98, 25);
}
</style>
