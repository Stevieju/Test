<template>
<div class="row">
  <div id="home" class="col-sm-12 text-center">
    <div class="background">
      <h1>欢迎大家品尝pizza</h1>
      <h2>这里有你喜欢的美食</h2>
      <button @click="goToMenu" class="btn btn-success">Let's order</button>


    </div>
  </div>



</div>


</template>

<script>
    export default {
        name: "Home",
        methods:{
            goToMenu(){
                //跳转到上一次浏览的页面
            // this.$router.go(-1)
                //制定跳转的地址
            // this.$router.replace('/menu')
                //制定跳转到路由的名字下
                // this.$router.replace({name:'menuLink'})
                //通过push进行跳转
                this.$router.push({name:'menuLink'})
            }
        }


    }
</script>

<style >
#home{
  background:url("../../src/assets/pizza.jpg");
height: 85vh;
padding: 10%;
}
h1,h2{
margin:6%;


}
.background{
  background:aliceblue;
opacity: 0.8;
max-width: 70vw;
margin: 0 auto;
padding: 20px 0;
}



</style>
