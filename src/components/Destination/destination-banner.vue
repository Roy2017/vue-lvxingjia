<template>
    <div class="destination-swiper bg-allCover swiper-container">
    <div class="swiper-wrapper">
      <div @click="handleClickVideo" class="swiper-slide">
        <video  preload="none"  :poster="imgPublicPath+'saiban.jpg'" ref="videoPlayer" src="http://ugcbsy.qq.com/flv/37/84/q03880p4cte.p712.1.mp4?sdtfrom=v1010&guid=c6b5a7974285e9f2e3d22f006320bc96&vkey=EBB58EA3512591ED464ED096439F22F61FCBFB684DD16670C8BDBB811EE9E6D3B9C39B7FAE322ADC1013F4314755D9EEFB648966A97846C81F91135C5DC91570CD70EB095BDD4637184F6B46CADF2C64D5E471B6C487062CE699DCDDF0CE6E4AF7DAD5A83BFAE94547B015E2558FE404BA869A62EBD4B057"></video>
        <img v-show="isPaused" src="../../assets/images/video_logo.png" class="video-playlogo" alt=""/>
      </div>
      <div v-for="(tmpList,index) in bannerList"  class="swiper-slide">
        <a :style="{backgroundImage: 'url(' +imgPublicPath+tmpList.imgPath + ')'}"></a>
      </div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>
</template>


<script>
     /*
打通父子之间所有数据和方法的共享：
　　　　　　父模板：<child ref="子名称"></child>
　　　　　　父访问子:	父组件: this..子名称.子数据/方法名()
　　　　　　子访问父:	子组件: this..子数据/方法名()
 */
import Swiper from '../../../static/js/swiper.min.js'
export default {
  name: 'app',
  data() {
    return {
      imgPublicPath:'./static/img/',
      bannerId:null,
      videoPlay2:null,
      isPaused:true,
      mySwiper:null,
      bannerList:[
        {imgPath:'saiban.jpg'},
        {imgPath:'saiban.jpg'},
        {imgPath:'saiban.jpg'},
        {imgPath:'saiban.jpg'},
      ],
    }
  },
  computed:{
//    isPaused:function () {
//      if(this.videoPlay2){
//        return this.videoPlay2.paused;
//      }
//    }
  },
  methods: {
    handleClickVideo:function () {

      if(this.videoPlay2.paused){
        this.videoPlay2.play();
        this.isPaused = false;
        this.mySwiper.autoplay.stop();
      }
      else{
        this.videoPlay2.pause();
        this.isPaused = true;
        this.mySwiper.autoplay.start();
      }
    }
  },
  created(){
//    this.bannerId = this.$route.params.cid;
//    console.log(this.bannerId);
  },
  mounted(){
    if(this.$refs.videoPlayer){
      this.videoPlay2 = this.$refs.videoPlayer;//this.$refs.videoPlayer[0];
    }
    this.$nextTick(function () {
      // DOM 现在更新了
      /* 焦点图 */
      if(!this.mySwiper){
        this.mySwiper = new Swiper('.swiper-container', {
          loop: false,
          autoplay: {
            delay: 3000,
          },
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
            clickable:true,
            type:'bullets',
          },
        });
      }
    })


  },
  updated(){
    console.log("COM updated!");

//       var slideDom = document.getElementsByClassName('swiper-slide');
//       console.log(slideDom);



  }
}
</script>

<style>
.destination-swiper{
  padding-top: 0.1rem;
  background-color: white;
}
  .swiper-container {
    width: 100%;
    height: 3.3rem;
  }
  .swiper-slide {
    text-align: center;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  .swiper-slide a{
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .swiper-pagination-bullet {
    border-radius: 50% !important;
    width: 0.1rem!important;
    height: 0.1rem!important;


  }
  .swiper-pagination-bullet-active{
    background: white !important;
  }
  .swiper-slide video{
    width: 100%;
    height: 100%;
  }

.video-playlogo{
  width: 0.8rem;
  height: 0.8rem;
  position: absolute;
  left: 50%;
  top: 50%;
  opacity: 0.8;
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
}
</style>
