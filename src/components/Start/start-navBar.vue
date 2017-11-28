<template>
  <div>
    <div class="navBar-container am-flexbox">
    <div @click="isShowCont1=!isShowCont1;isShowCont2=false;isShowCont3=false;" class="am-flexbox am-flexbox-justify-center am-flexbox-item text-sm">
      域外揽胜
      <i class="bg-allCover"></i>
    </div>
    <div @click="isShowCont2=!isShowCont2;isShowCont1=false;isShowCont3=false;" class="am-flexbox am-flexbox-justify-center am-flexbox-item text-sm">
      国内好去处
      <i class="bg-allCover"></i>
    </div>
    <div @click="isShowCont3=!isShowCont3;isShowCont1=false;isShowCont2=false;" class="am-flexbox am-flexbox-justify-center am-flexbox-item text-sm">
      旅行推荐
      <i class="bg-allCover"></i>
    </div>
  </div>
    <MainNavBarContent @navItemClick="handleClickItems" :isOpen="isShowCont1"></MainNavBarContent>
    <MainNavBarContent2 @navItemClick="handleClickItems" :isOpen="isShowCont2"></MainNavBarContent2>
    <MainNavBarContent3 @navItemClick="handleClickItems" :isOpen="isShowCont3"></MainNavBarContent3>

  </div>

</template>


<script>
/*
打通父子之间所有数据和方法的共享：
　　　　　　父模板：<child ref="子名称"></child>
　　　　　　父访问子:	父组件: this..子名称.子数据/方法名()
　　　　　　子访问父:	子组件: this..子数据/方法名()
 */
import MainNavBarContent from '@/components/Start/start-navBarContent'
import MainNavBarContent2 from '@/components/Start/start-navBarContent2'
import MainNavBarContent3 from '@/components/Start/start-navBarContent3'
import eventBus from '../../../static/eventBus.js'
export default {
  name: 'slider',
  props: ['closeItems'],
  data(){
       return {
         publicPath:__api__,
         bannerList:null,
         isShowCont1: false,
         isShowCont2: false,
         isShowCont3: false,
//         closeItemsProp:this.closeItems,
       }
   },
  watch:{
    closeItems:function (val) {
      console.log('closeItemsProp',val);
      if(val===true){
        this.isShowCont1=this.isShowCont2=this.isShowCont3=false;
      }
    },
  },
  computed:{

  },
   methods: {
     handleClickItems:function (msg) {
       console.log('get msg:',msg);
       this.$router.push('/destination');
     },
     navBarState:function () {
//       if(this.closeItemsProp){
//         this.isShowCont1=this.isShowCont2=this.isShowCont3=false;
//       }
       if(!(this.isShowCont1||this.isShowCont2||this.isShowCont3)){
         eventBus.$emit('navBarState','closed');
         console.log("navBarState emit:",'closed');
         return false;
       }
       else{
         eventBus.$emit('navBarState','opened');
         console.log("navBarState emit:",'opened');
         return true;
       }
     },

   },
   created(){
//     console.log('closeItemsProp',this.closeItemsProp);
//     console.log('closeItems',this.closeItems);

//     this.$http.get(
//       `${__api__}adm/banner/bannerlist?tk=&imgType=1`
//     )
//     .then(function (response) {
//         //console.log(response.data.data.list);
//         this.bannerList = response.data.data.list;
//       },
//       function (error) {
//         console.log("error",error);
//       });
   },
   mounted(){
//     this.$nextTick(function () {
//       console.log("mounted! next Tick!");
//    })
   },
   updated(){
     console.log("COM updated!");
     this.navBarState();
//       var slideDom = document.getElementsByClassName('swiper-slide');
//       console.log(slideDom);
       /* 焦点图 */
//       var mySwiper = new Swiper('.swiper-container', {
//         loop: true,
//         autoplay: {
//           delay: 3000,
//         },
//         // 如果需要分页器
//         pagination: {
//           el: '.swiper-pagination',
//           clickable:true,
//           type:'bullets',
//         },
//       });
    },
    components:{
      MainNavBarContent,
      MainNavBarContent2,
      MainNavBarContent3,
    },

}
</script>

<style>
  .navBar-container {
    width: 100%;
    height: 0.6rem;
    /*font-size: 0.2rem;*/
    border-bottom: 0.03rem solid #d5d5d5;
    margin-bottom: 0.12rem;
    position: relative;
    z-index: 99;
  }
  .navBar-container>div>i{
    width: 0.11rem;
    height: 0.1rem;
    margin-left: 0.23rem;
    background-image: url("../../assets/images/triangle-down.png");
  }
</style>
