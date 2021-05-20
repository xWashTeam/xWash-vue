<template>
  <v-container style="white-space: pre-wrap;">
    <h1>{{ text }}</h1>
    <h2>电子邮箱 : {{ email }}</h2>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "Feedback",

  data: () => ({
    text: "请麻烦将反馈信息发送至如下电子邮箱.",
    email: "wumqing@yeah.net",
    jsonData:{
      text: "",
      owner:"",
    },
    
  }),
  methods: {
    postFeedback: function () {
      console.log(this.text)
      console.log()
      axios
        .post(this.$store.state.feedbackLink, {
          jsonData:this.jsonData
        },{
          headers:{ 'Content-Type': 'application/json' }
        })
        .then((response) => {
          alert("提交成功, 感谢您的反馈!")
          console.log("response : ")
          console.log(response)
        })
        .catch((error) => {
          alert("提交失败, 请查看是否有非法内容! 期待您的反馈")
          console.log(error)
        });
    },
  },
};
</script>

<style scoped>
.container{
  background-color: azure;
  width: 50%;
  border-radius: 12pt;
}
h1 {
  color: darkgrey;
}
h2 {
  color: darkgrey;
}
.feedback {
  width: 75%;
  background-color: bisque;
  border-radius: 10pt;
  height: 150px;
  font-size: 16pt;
  font-family: Avenir, 微软雅黑, Helvetica, Arial, sans-serif;
}
</style>