<template>
  <div class="container">
    <div :class="json.status == 'AVAILABLE' ? 'available' : json.status=='USING'?'using':'unknown'">
      <div class="pic">
        <svg
          style="position: absolute; left: 0%"
          t="1620397730618"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1423"
          width="150px"
          height="150px"
        >
          <path
            d="M476.16 780.8c93.87 0 170.24-76.37 170.24-170.24S570 440.32 476.16 440.32s-170.24 76.37-170.24 170.24S382.29 780.8 476.16 780.8z m0-304.64c74.11 0 134.4 60.29 134.4 134.4S550.27 745 476.16 745s-134.4-60.29-134.4-134.4S402 476.16 476.16 476.16zM807.68 64h-492.8v53.76A17.92 17.92 0 0 1 297 135.68h-35.88a17.92 17.92 0 0 1-17.92-17.92V64h-26.88a53.82 53.82 0 0 0-53.76 53.76v143.36h698.88V117.76A53.82 53.82 0 0 0 807.68 64zM601.6 209a17.92 17.92 0 0 1-17.92 18H440.32a17.92 17.92 0 0 1-17.92-18v-44.8a17.92 17.92 0 0 1 17.92-17.92h143.36a17.92 17.92 0 0 1 17.92 17.92z"
            fill="#35495e"
            p-id="1424"
          ></path>
          <path
            d="M162.56 906.24A53.82 53.82 0 0 0 216.32 960h591.36a53.82 53.82 0 0 0 53.76-53.76V297H162.56z m313.6-519.68a223.94 223.94 0 0 1 200 123.14h70.4a17.92 17.92 0 0 1 17.92 17.92V693.5a17.92 17.92 0 0 1-17.92 17.92h-70.4a223.94 223.94 0 0 1-200 123.14c-123.71 0-224-100.28-224-224s100.29-224 224-224z"
            fill="#35495e"
            p-id="1425"
          ></path>
        </svg>
      </div>
      <div class="right">
        <p>位置 : {{ json.location }}</p>
        <p v-show="json.name != '' ">机器名 : {{ json.name }}</p>
        <p>状态 : {{ json.status=="USING"?"使用中":"空闲中" }}</p>
        <p>剩余时间 : {{ json.remainTime }}分钟</p>
        <p v-show="json.message != ''">提示信息 : {{ json.message }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StatusDiv",
  data() {},
  props: {
    json: Object,
  },
  created() {},
};
</script>
<style scoped>
.container {
  position: relative;
  
  margin: 5px;
  border-radius: 10px;
  width: 400px;
  height: 200px;
}
.available {
  border-radius: 10px;
  width: 100%;
  height: 100%;
  background-color: #a8dadcbb;
}
.using {
  border-radius: 10px;
  width: 100%;
  height: 100%;
  background-color: #da6161b9;
}
.unknown {
  border-radius: 10px;
  width: 100%;
  height: 100%;
  background-color: #927a54;
}
.right {
  position: absolute;
  text-align: left;
  top: 8%;
  left: 35%;
}
.pic {
  position: absolute;
  top: 10%;
  left: 0%;
  width: auto;
  height: auto;
}
p {
  font-size: 14pt;
  font-family: Arial, "Microsoft YaHei", "微软雅黑";
  padding: 10px 0px 0px 0px;
  color: #1d3557;
}
</style>