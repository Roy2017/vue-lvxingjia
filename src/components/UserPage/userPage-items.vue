<template>
  <div class="userPlan-container am-flexbox am-flexbox-dir-column am-flexbox-align-stretch text-sm">
    <div class="userPlan-title am-flexbox am-flexbox-justify-center text-md">旅途趣闻</div>
    <div v-for="tmpObj in itemsList" class="userPlan-items">
      <div @click="jump('/plan/'+tmpObj.cid)" class="userPlan-items-body am-flexbox am-flexbox-dir-column am-flexbox-align-stretch">
        <div class="userPlan-items-title am-flexbox am-flexbox-justify-between">
          <span class="text-sm">{{tmpObj.ptag}}</span>
          <span class="text-xs">{{getTime(tmpObj.publishTime)}}</span>
        </div>
        <div class="userPlan-items-content text-xsm">
          <span class="text-clamp-2">{{tmpObj.detailInfo[0].introduce}}</span>
        </div>
      </div>
      <div class="userPlan-items-footer am-flexbox text-sm">
        <!--<div class="am-flexbox-item am-flexbox am-flexbox-justify-center" >-->
          <!--<img class="userPage-navBarIcon" src="../../assets/images/icon-plus.png"/>-->
        <!--</div>-->
        <div class="am-flexbox-item am-flexbox am-flexbox-justify-center">
          <img class="userPage-navBarIcon" src="../../assets/images/icon-weichat.png"/>
          <span>{{tmpObj.commentCount}}</span>
        </div>
        <div class="am-flexbox-item am-flexbox am-flexbox-justify-center">
          <img class="userPage-navBarIcon" src="../../assets/images/header-like.png"/>
          <span>{{tmpObj.likeCount}}</span>
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
import {getPublishTime} from '../../common/js/data'
export default {
  name: 'app',
  data() {
    return {
      imgPublicPath:__api__+'img/',
      itemsList:[
        {
          cid:1,
          title:'巴厘岛3天游行',
          publishTime:'1511237021',
          content:'巴厘岛久已盛名，但让我深入去了解她的不是因为她是旅游圣地，当然也不是因为2002爆炸案\n' +
          '  其实我早已忘了曾有这样的恶行发生过在这美丽和平的岛上，要不是叶先生提起他，',
          commentCount:500,
          likeCount:300
        },
      ],
      index:1,
    }
  },
  computed:{
//    bannerImgPath:function () {
//      return `${this.imgPublicPath}banner-${this.bannerId}.jpg`
//    }
  },
  methods: {
    getTime:function (pubTime) {
      return getPublishTime(pubTime);
    },
    jump(path){
      this.$parent.jump(path);
    },
  },
  created(){
    /*http获取数据*/
    this.$http.get(
      `${__api__}data.json`
    )
      .then(function (response) {
          console.log(response);
          this.itemsList = response.data.goods;
        },
        function (error) {
          console.log("error:",error);
        });
  },
}
</script>

<style>
.userPlan-container{
  width: 100%;
  height: auto;
  background-color: #deeae8;
  position: relative;
}
.userPlan-title{
  /*font-size: 0.26rem;*/
  padding-top: 0.3rem;
  margin-bottom: -2px;
  background-color: white;
}
.userPlan-items{
  height:auto;
  margin-bottom: 0.16rem;
  /*font-size: 0.23rem;*/
  background-color: white;
}
.userPlan-items:last-child{
  margin-bottom: 0;
}
.userPlan-items-body{
  padding: 0.3rem 0.32rem 0;
}
.userPlan-items-title{
  margin-bottom: 0.2rem;
}
.userPlan-items-title>span:first-child{
  font-family: YouYuan;
  /*font-size: 0.21rem;*/
}
.userPlan-items-title>span:last-child{
  opacity: 0.51;
  /*font-size: 0.17rem;*/
}
.userPlan-items-content{
  /*font-size: 0.15rem;*/
  opacity: 0.51;
  margin-bottom: 0.13rem;
}
.userPlan-items-footer{
  border-top: 1px solid #ddd;
  height: 0.71rem;
}
.userPlan-items-footer span{
  opacity: 0.51;
}

</style>
