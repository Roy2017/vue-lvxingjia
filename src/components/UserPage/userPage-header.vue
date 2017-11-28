<template>
  <div>
    <div @click="goBackHandle" class="header-backArrows am-flexbox header-oneIcon-Licon  bg-allCover"></div>
    <div class="main-header header-oneIcon">
    <span class="main-header-logo text-lg">
      个人主页
    </span>
      <!--<div  class="am-flexbox  main-header-rside bg-allCover"></div>-->
    </div>
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
  name: 'app',
  data() {
    return {
//      imgPublicPath:'./static/img/',
//      bannerId:null,
    }
  },
  computed:{
//    bannerImgPath:function () {
//      return `${this.imgPublicPath}banner-${this.bannerId}.jpg`
//    }
  },
  methods: {
    goBackHandle:function () {
      this.$router.back();
    }
  },
//  created(){
//    this.bannerId = this.$route.params.cid;
//    console.log(this.bannerId);
//  },
}
</script>

<style>
.header-oneIcon{
  text-align: center;
  line-height: 0.88rem;
  padding: 0 0.7rem;
}
.header-oneIcon-Licon{
  float: left;
  margin-top: 0.44rem;
}
.header-backArrows{
  width: 0.35rem;
  height: 0.25rem;
  margin-left: 0.22rem;
  transform: translateY(-50%);
  background-image: url("../../assets/images/back-arrows.png");
}
</style>
