<template>
  <div class="main-header am-flexbox  am-flexbox-justify-between">
    <div class="am-flexbox  main-header-lside bg-allCover" @click="userClickFunc"></div>
    <div class="am-flexbox am-flexbox-item am-flexbox-justify-center main-header-logo text-lg">
     旅行家
    </div>
    <div @click="jump('/search')" class="am-flexbox  main-header-rside bg-allCover"></div>

  </div>
</template>


<script>
     /*
打通父子之间所有数据和方法的共享：
　　　　　　父模板：<child ref="子名称"></child>
　　　　　　父访问子:	父组件: this..子名称.子数据/方法名()
　　　　　　子访问父:	子组件: this..子数据/方法名()
 */

export default {
  name: '',
        data() {
        return {
        }
  },
  props:{
    userClickFunc:{
      type: Function
    }
  },
  methods: {
    jump(path){
      this.$parent.jump(path);
    },
  },
}
</script>

<style>
  .main-header{
    height: 0.88rem;
    width: 100%;
    background-color: #2bbea6;
  }
  .main-header-lside{
    width: 0.28rem;
    height: 0.34rem;
    background-image: url("../../assets/images/header-user.png");
    margin-left: 0.22rem;
  }
  .main-header-rside{
    width: 0.24rem;
    height: 0.32rem;
    background-image: url("../../assets/images/header-search.png");
    margin-right: 0.22rem;
  }
  .main-header-logo{
    width: auto;
    height: auto;
    font-family: STXihei;
    /*font-size: 0.36rem;*/
    font-weight: normal;
    font-stretch: normal;
    /*line-height: 0.28rem;*/
    letter-spacing: 0rem;
    color: #ffffff;
  }
</style>
