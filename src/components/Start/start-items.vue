<template>
  <div v-if="startPlansList" style="text-align: center">
    <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10">
      <div v-for="(tmpObj,index) in itemsList" :key="tmpObj.cid" class="items text-sm">
        <div @click="jump({ name: 'Plan', params: { cid: tmpObj.cid }})" class="items-img bg-allCover" :style="{backgroundImage: 'url('+tmpObj.pic+')'}">
        </div>
        <div class="items-leftBar am-flexbox am-flexbox-justify-center">
          <img src="../../assets/images/icon-hot.png" alt="">
          <span class="text-sm items-text">推荐</span>
          <!--<span class="text-md">{{tmpObj.joinInCount}}</span>-->
        </div>
        <div class="items-bottombar am-flexbox am-flexbox-justify-between text-sm">
          <span class="items-text text-clamp-1">{{tmpObj.title}}</span>
          <span @click="handleLike(tmpObj)" class="am-flexbox items-text">
            <span class="items-bottombar-likeImg bg-allCover">
              <img v-if="!tmpObj.isLiked" class="animated fadeOutUp"  src="../../assets/images/header-likeChecked.png" alt="">
              <img class="animated fadeInDown" v-else src="../../assets/images/header-likeChecked.png" alt="">
            </span>
            <span class="text-sm">{{tmpObj.likeCount}}</span>
          </span>
        </div>
      </div>
      <mt-spinner v-show="loading&&!noMore"
                  type="triple-bounce"
                  color="#2bbea6"
                  :size="70"
                  class="userList-items-loading">
      </mt-spinner>
      <div v-show="noMore" class="userList-items-loading text-sm">木有更多数据了！</div>
    </ul>

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
  name: 'slider',
  props:['startPlansList'],
  data()
     {
       return {
         itemsList:[],
//           {
//             cid:1,
//             imgPath:'./static/img/banner-1.jpg',
//             joinInCount:25,
//             likeCount:211,
//             isLiked:true,
//             title:'你有梦想你就来，旅行让梦想更有意义'
//           },
//           {
//             cid:2,
//             imgPath:'./static/img/banner-2.jpg',
//             joinInCount:25,
//             likeCount:211,
//             isLiked:false,
//             title:'你有梦想你就来，旅行让梦想更有意义'
//           },
//           {
//             cid:3,
//             imgPath:'./static/img/banner-3.jpg',
//             joinInCount:25,
//             likeCount:211,
//             isLiked:false,
//             title:'你有梦想你就来，旅行让梦想更有意义'
//           },
//         ],
         loading:false,
         loadMoreCount:4,
         loadMoreIndex:0,
         noMore:false,
       }
     }
     ,
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

       jump(path){
         this.$router.push(path);
       },

       loadList:function (start,count) {

       },
       loadMore:function () {
         this.loading = true;
         setTimeout(() => {
           var tmpArray = this.startPlansList.splice(this.loadMoreIndex,this.loadMoreCount);
           if(tmpArray.length === 0){
             this.itemsList = this.itemsList.concat(this.startPlansList);
             this.noMore = true;
             this.loading = true;
           }
           else {
             this.itemsList = this.itemsList.concat(tmpArray);
             this.loadMoreIndex +=4;
             this.loading = false;
           }


//            console.log("tmpArray.length:",tmpArray.length);



         }, 1500);
       }

     },

     mounted(){

     },
    updated(){

    },
}
</script>

<style>
  .items{
    width: 100%;
    height: 50vw;
    position: relative;
    margin-bottom: 0.18rem;

  }
  .items-img{
    width: 100%;
    height: 100%;
  }
  .items-leftBar{
    width: 0.96rem;
    height: 0.65rem;
    /*padding: 0 0.2rem;*/
    background-color: rgba(1,1,1,0.57);

    position: absolute;
    top: 0.19rem;
  }
  .items-leftBar>img{
    width: 0.3rem;
    height: 0.3rem;
  }
  .items-leftBar>span:last-child{
    color: #ffc000;
    /*font-size: 0.24rem;*/
  }
  .items-bottombar{
    width: 100%;
    height: 0.46rem;
    padding: 0 0.2rem;
    background-color: rgba(1,1,1,0.57);

    position: absolute;
    bottom: 0;
  }
  .items-bottombar-likeImg{
    width: 0.24rem;
    height: 0.22rem;
    line-height: 0.22rem;
    text-align: center;
    margin-right: 0.08rem;
    background: url("../../assets/images/header-like.png");
  }
  .items-bottombar-likeImg>img{
    width: 100%;
    height: 103%;
  }
  .items-text{
    opacity: 1!important;
    color: white;
  }
</style>
