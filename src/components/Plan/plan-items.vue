<template>
  <div v-if="planList" class="plan-container">
    <div class="plan-items am-flexbox am-flexbox-dir-column am-flexbox-align-stretch text-sm">
      <span @click="handleLike(planList)" class="am-flexbox am-flexbox-justify-end">
        <span class="plan-items-like bg-allCover">
          <img v-if="!planList.isLiked" class="animated fadeOutUp"  src="../../assets/images/header-likeChecked.png" alt="">
          <img class="animated fadeInDown" v-else src="../../assets/images/header-likeChecked.png" alt="">
        </span>
        <span class="text-sm">{{planList.likeCount}}</span>
      </span>
      <div v-for="(tmpObj,index) in planList.detailInfo[0].sites" class="plan-items-wraper">
        <div class="plan-items-title am-flexbox am-flexbox-justify-between">
          <div class="plan-items-titleText am-flexbox am-flexbox-dir-column am-flexbox-align-top">
            <span>第{{index+1}}天</span>
            <span class="text-xs">{{index+1}}th day</span>
          </div>
        </div>
        <div class="plan-items-geographic">
          <span class="plan-items-firstText text-md">目的地：</span>
          <span class="">{{tmpObj.sitesName}}</span>
        </div>
        <div class="plan-items-getWay am-flexbox am-flexbox-align-top">
          <span class="plan-items-firstText text-md">到达方式：</span>
          <span class="am-flexbox-item">{{tmpObj.getWay}}</span>
        </div>
        <div class="plan-items-content  am-flexbox-dir-column am-flexbox-align-top">
          <div class="plan-items-firstText text-md">旅途介绍：</div>
          <img v-for="imgTmp in tmpObj.sitesImg" :src="imgTmp" alt="">
          <div class="plan-items-firstText plan-items-firstTextNo text-md">{{tmpObj.sitesTag}}</div>
          <span class="plan-text-body">{{tmpObj.sitesIntro}}</span>
          <!--<span class="plan-text-body"></span>-->
        </div>
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
  props:['planList'],
  data() {
    return {
//      imgPublicPath:'./static/img/',
//      bannerId:null,
//      index:1,
    }
  },
  computed:{
//    bannerImgPath:function () {
//      return `${this.imgPublicPath}banner-${this.bannerId}.jpg`
//    }
  },
  methods: {
    handleLike:function (cidObj) {
      if(!cidObj.isLiked){
        cidObj.likeCount++;
        cidObj.isLiked = true;
      }
      else {
        cidObj.likeCount--;
        cidObj.isLiked = false;
      }
    },
  },
  created(){
//    this.bannerId = this.$route.params.cid;
//    console.log(this.bannerId);
  },
}
</script>

<style>
.plan-container{
  width: 100%;
  height:auto;
  margin-top: 0.45rem;

}
.plan-items{
  /*width: 100%;*/
  height:auto;
  padding: 0 0.45rem 0.3rem;
}
.plan-items-like{
  width: 0.24rem;
  height: 0.21rem;
  line-height: 0.21rem;
  margin-right: 0.1rem;
  background: url("../../assets/images/header-like.png");
}
.plan-items-like>img{
  width: 0.24rem;
  height: 0.21rem;
  margin-right: 0.08rem;
}
.plan-items div.plan-items-wraper:nth-child(n+3){
  padding-top: 0.2rem;
  border-top: 1px solid #aaa;
}
.plan-items-title{

}
.plan-items-titleText{
  color: #ef497c;

}
.plan-items-titleText>span:last-child{
  /*font-size: 0.2rem;*/
  line-height: 0.21rem;
}
.plan-items-geographic{
  /*width: 100%;*/
  margin-top: 0.3rem;
  background: url("../../assets/images/icon-geographic.png") no-repeat left center;
  background-size:0.2rem 0.29rem;

}
.plan-items-getWay{
  margin-top: 0.3rem;
  background: url("../../assets/images/icon-arrive.png") no-repeat left top;
  background-size:0.23rem 0.28rem;
}
.plan-items-content{
  /*width: 100%;*/
  margin-top: 0.3rem;
  margin-bottom: 0.2rem;
  background: url("../../assets/images/plan-write.png") no-repeat left top;
  background-size:0.25rem 0.28rem;
  flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
}
.plan-items-content img{
  margin:0.2rem 0;
  width: 100%;
}
.plan-items-firstText{
  padding-left: 0.35rem;
  color: #2bbea6;
  -webkit-flex: none;
  flex: none;
}
.plan-items-firstTextNo{
  padding-left: 0;
}
div.plan-items-firstText{
  margin-bottom: 0.08rem;
}
.plan-text-body{
  text-indent: 2em;
  line-height: 0.4rem;
  text-align: justify;
}
</style>
