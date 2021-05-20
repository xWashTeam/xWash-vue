<template>
  <v-container>
    <div class="hint">
      <ul>
        <li><h1>{{ title }}</h1></li>
        <li v-for="(item,index) in text" :key="index">
          <h2 class="manual">{{ item }}</h2>
        </li>
        <li><h3 style="color:darkgrey;">{{manual}}</h3></li>
        <li><h3 style="color:rgb(127, 184, 192);margin:12px">蓝色 - 空闲</h3></li>
        <li><h3 style="color:rgb(162, 95, 105);margin:12px">红色 - 占用</h3></li>
        <li><h3 style="color:rgb(146, 122, 84);margin:12px">黄色 - 故障</h3></li>
      </ul>
    </div>
    <div class="back"></div>

    <div class="todo">

    </div>
  </v-container>

</template>

<script>

export default {
  name: "Home",

  data: () => ({
    title:"关于xWash的一些说明",
    text:[
      "❗❗❗开发这个网站只是为了方便大伙, 也请不要利用网站数据去do evil.",
      "💥 由于网络原因, 有时候可能会出现洗衣机显示不全, 甚至干脆不显示了的情况.",
      "麻烦耐心等待几分钟, 过段时间换个服务器情况就会有所好转了.",
      "有些机器由于接口问题无法查看剩余时间, 后期会找时间自动计算剩余时间.",
    ],
    manual:"使用方法 : 点击导航栏上的宿舍楼, 即可看见当前宿舍楼的所有洗衣机使用情况, \
    \n洗衣机背景即为洗衣机状态:",
    todo:[""],
  }),
};
</script>

<style scoped>
h1{
  font-size: 48px;
  color: whitesmoke;
}
h2{
  color: rgb(24, 245, 135);
}
.hint{
  border-radius: 12px;
  position: absolute;
  left: 20%;
  white-space: pre-wrap;
  text-align: left;
}
.back{
  background-color: rgba(0, 0, 0, 0.623);
  position: absolute;
  left: 5%;
  top:5%;
  width: 90%;
  height: 1000px;
  z-index: -1;
}
</style>