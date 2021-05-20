<template>
    <div class="container">
	<div class="row">
			<h1>联系我们</h1>
	</div>
	<div class="row">
			<h4 style="text-align:center">期待收到您的反馈!</h4>
	</div>
	<div class="row input-container">
			<div class="col-xs-12">
				<div class="styled-input wide">
					<input type="text" v-model="name"/>
					<label>姓名(非必填)</label> 
				</div>
			</div>
			<div class="col-xs-12">
				<div class="styled-input wide">
					<input type="text" v-model="email" />
					<label>电子邮箱(非必填)</label> 
				</div>
			</div>
			<div class="col-xs-12">
				<div class="styled-input wide">
					<textarea required v-model="text"></textarea>
					<label>反馈信息*</label>
				</div>
			</div>
			<div class="col-xs-12">
				<div class="btn-lrg submit-btn" @click="postFeedback">  提交反馈  </div>
			</div>
	</div>
</div>


</template>
<script>
import axios from "axios";
export default {
  name: "BetterFeedback",

  data: () => ({
      text: "",
      email:"",
      name:"",
  }),
  methods: {
    successAlter:function(){
        alert("提交成功, 感谢您的反馈!")
    },
    errorAlter:function(error){
        alert("提交失败, 请查看是否有非法内容! 期待您的反馈")
        console.log(error)
    },
    vaildText:function(){
        if(this.text==undefined || this.text==""){
            alert("反馈信息不能为空")
            return false;
        }
        return true;
    },
    postFeedback: function () {
      if(this.vaildText() == false){
          return;
      }
      let jsonData={
          "text":this.text,
          "email":this.email,
          "name":this.name,
      }
      axios
        .post(this.$store.state.feedbackLink, {
          jsonData:jsonData
        },{
          headers:{ 'Content-Type': 'application/json' }
        })
        .then((response) => {
            console.log(response)
          this.successAlter();
        })
        .catch((error) => {
          this.errorAlter(error)
        });
    },
  },
};
</script>
<style scoped>
body {
    background-color: #444442;
    font-family: Arial, "Microsoft YaHei", "微软雅黑";
    padding-top: 85px;
}

h1 {
    font-family: 'Poppins', sans-serif, 'arial';
    font-weight: 600;
    font-size: 56px;
    color: white;
    text-align: center;
}

h4 {
    font-family: 'Roboto', sans-serif, 'arial';
    font-weight: 400;
    font-size: 18px;
    color: #9b9b9b;
    line-height: 1.5;
}

/* ///// inputs /////*/

input:focus ~ label, textarea:focus ~ label, input:valid ~ label, textarea:valid ~ label {
    font-size: 0.75em;
    color: #999;
    top: -5px;
    -webkit-transition: all 0.225s ease;
    transition: all 0.225s ease;
}

.styled-input {
    float: left;
    width: 293px;
    margin: 1rem 0;
    position: relative;
    border-radius: 4px;
}

@media only screen and (max-width: 768px){
    .styled-input {
        width:100%;
    }
}

.styled-input label {
    color: #999;
    padding: 1.3rem 30px 1rem 30px;
    position: absolute;
    top: 10px;
    left: 0;
    -webkit-transition: all 0.25s ease;
    transition: all 0.25s ease;
    pointer-events: none;
}

.styled-input.wide { 
    width: 650px;
    max-width: 100%;
}

input,
textarea {
    padding: 30px;
    border: 0;
    width: 100%;
    font-size: 1rem;
    background-color: #2d2d2d;
    color: white;
    border-radius: 4px;
}

input:focus,
textarea:focus { outline: 0; }

input:focus ~ span,
textarea:focus ~ span {
    width: 100%;
    -webkit-transition: all 0.075s ease;
    transition: all 0.075s ease;
}

textarea {
    width: 100%;
    min-height: 15em;
}

.input-container {
    width: 650px;
    max-width: 100%;
    margin: 20px auto 25px auto;
}

.submit-btn {
    float: right;
    padding: 7px 35px;
    border-radius: 60px;
    display: inline-block;
    background-color: #4b8cfb;
    color: white;
    font-size: 18px;
    cursor: pointer;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.06),
              0 2px 10px 0 rgba(0,0,0,0.07);
    -webkit-transition: all 300ms ease;
    transition: all 300ms ease;
}

.submit-btn:hover {
    transform: translateY(1px);
    box-shadow: 0 1px 1px 0 rgba(0,0,0,0.10),
              0 1px 1px 0 rgba(0,0,0,0.09);
}

@media (max-width: 768px) {
    .submit-btn {
        width:100%;
        float: none;
        text-align:center;
    }
}

input[type=checkbox] + label {
  color: #ccc;
  font-style: italic;
} 

input[type=checkbox]:checked + label {
  color: #f00;
  font-style: normal;
}
</style>