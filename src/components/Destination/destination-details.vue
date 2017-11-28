<template>
  <div class="destinationDetail-container am-flexbox am-flexbox-dir-column am-flexbox-align-stretch">
    <div class="destinationDetail-items text-sm">
      <div class="destinationDetail-items-body am-flexbox am-flexbox-dir-column am-flexbox-align-stretch">
        <div class="destinationDetail-items-title am-flexbox am-flexbox-dir-column am-flexbox-align-top">
          <span>旅游推荐</span>
          <span class="am-flexbox">
          <i v-for="tmp in new Array(5)" class="icon-star"></i>
          </span>
        </div>
        <div class="destinationDetail-items-content text-xs">
          <span @click="showDetailClass=''" :class="showDetailClass">是西太平洋中一颗璀璨的明珠，东西岸拥有不同的迷人景色，西案沙滩
绵延，东岸岩石断崖，绚丽的海底世界，热带丛林探险，刺激的水上</span>
        </div>
        <div class="destinationDetail-items-labels am-flexbox am-flexbox-justify-start text-xs">
          <span class="destinationDetail-items-label">沙滩绵延</span>
          <span class="destinationDetail-items-label">沙滩绵延</span>
          <span class="destinationDetail-items-label">沙滩绵延</span>
          <span class="destinationDetail-items-label">沙滩绵延</span>
          <span class="destinationDetail-items-label">沙滩绵延</span>
          <span class="destinationDetail-items-label">沙滩绵延</span>
        </div>
        <div class="destinationDetail-items-button text-md">我要加入</div>
      </div>
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
      imgPublicPath:'./static/img/',
      bannerId:null,
      index:1,
      showDetailClass:'text-clamp-2',
    }
  },
  computed:{
    bannerImgPath:function () {
      return `${this.imgPublicPath}banner-${this.bannerId}.jpg`
    }
  },
  methods: {

  },
  created(){
//    this.bannerId = this.$route.params.cid;
//    console.log("bannerId:",this.bannerId);
  },
}
</script>

<style>
  .destinationDetail-container{
    width: 100%;
    height: auto;
    background-color: rgba(255,255,255,0.8);
    position: relative;
    color: black;
  }
  .destinationDetail-items{
    height:auto;
    margin-bottom: 0.16rem;
    /*font-size: 0.23rem;*/
    background-color: white;
  }
  .destinationDetail-items:last-child{
    margin-bottom: 0;
  }
  .destinationDetail-items-body{
    padding: 0.3rem 0.32rem 0.3rem;
  }
  .destinationDetail-items-title{
    margin-bottom: 0.31rem;
  }
  .destinationDetail-items-title>span:first-child{
    font-family: YouYuan;
    /*font-size: 0.24rem;*/
    margin-bottom: 0.11rem;
  }
  .destinationDetail-items-content{
    /*font-size: 0.16rem;*/
    line-height: 0.3rem;
    opacity: 0.6;
    margin-bottom: 0.19rem;
  }
  .destinationDetail-items-labels{
    flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    margin-bottom: 0.29rem;
    /*height: 0.38rem;*/
  }
  .destinationDetail-items-label{
    /*width: 0.81rem;*/
    height: 0.38rem;
    line-height: 0.38rem;
    margin-left: 0.35rem;
    margin-top: 0.2rem;
    text-align: center;
    background-color: rgba(24,25,25,0.1);
    border-radius: 0.11rem;
    color: rgba(24,25,25,0.7);
    flex: none;
    -webkit-flex: none;
  }
  .destinationDetail-items-label:first-child{
    margin-left: 0;
  }
  .destinationDetail-items-button{
    width: 2.06rem;
    height: 0.52rem;
    background-color: #2bbea6;
    border-radius: 0.1rem;
    color: white;
    /*font-size: 0.3rem;*/
    text-align: center;
    line-height: 0.52rem;
    margin: auto;
  }

</style>
