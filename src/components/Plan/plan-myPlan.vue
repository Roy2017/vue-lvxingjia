<template>
  <div class="plan-myPlan am-flexbox  am-flexbox-justify-center am-flexbox-align-center">

    <a class="am-flexbox plan-myPlanTitle am-flexbox-align-end text-mdp">
      <i class="plan-myPlanIcon bg-allCover"></i>
      <span>记录您的旅行计划</span>
    </a>

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
//  computed:{
//    bannerImgPath:function () {
//      return `${this.imgPublicPath}banner-${this.bannerId}.jpg`
//    }
//  },
  methods: {

  },
//  created(){
//    this.bannerId = this.$route.params.cid;
//    console.log(this.bannerId);
//  },
}
</script>

<style>
.plan-myPlan{
  width: 100%;
  height: 1.28rem;
}
.plan-myPlanTitle{
  width: auto;
  height: 0.33rem;
  /*font-size: 0.3rem;*/
  line-height: 0.3rem;
  color: #afafaf;
}
.plan-myPlanIcon{
  display: inline-block;
  width: 0.32rem;
  height:0.32rem;
  background-image: url("../../assets/images/plan-icon1.png");
  margin-right: 0.07rem;
}
</style>
