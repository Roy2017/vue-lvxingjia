<template>
  <div class="destinationJourney-container am-flexbox am-flexbox-dir-column am-flexbox-align-stretch">
    <div class="destinationJourney-title am-flexbox text-sm">
      <span>行程路线</span>
    </div>
    <div class="destinationJourney-wraper text-xs">
      <!--<mt-swipe :show-indicators="false" :auto="0" :continuous="false">-->
        <!--<mt-swipe-item class="destinationJourney-swipeItems">-->
      <div class="destinationJourney-swipeItems-wraper">
          <div class="destinationJourney-swipeItems-title">
            <span v-for="(tmp,index) in dateList" :class="{'on-selected': index == activeIndex}" @click="changeTab('tab-'+(index+1))" class="destinationJourney-swipeItems-items">{{tmp.title}}</span>
          </div>
      </div>
          <mt-tab-container v-model="active" swipeable>
            <mt-tab-container-item id="tab-1">
              <div class="destinationJourney-swipeItems-content am-flexbox am-flexbox-justify-between text-xsm">
                <div class="destinationJourney-swipeItems-date am-flexbox am-flexbox-item am-flexbox-dir-column am-flexbox-align-top">
                  <span>6:00-10:00</span>
                  <span>设备：相机、泳衣</span>
                  <span>适合季节：春天、夏天、秋天</span>
                </div>
                <div class="destinationJourney-swipeItems-date am-flexbox am-flexbox-item am-flexbox-dir-column am-flexbox-align-top">
                  <span>12:00-16:00</span>
                  <span>设备：相机、泳衣</span>
                  <span>适合季节：春天、夏天、秋天</span>
                </div>
                <div class="destinationJourney-swipeItems-date am-flexbox am-flexbox-item am-flexbox-dir-column am-flexbox-align-top">
                  <span>18:00-22:00</span>
                  <span>设备：相机、泳衣</span>
                  <span>适合季节：春天、夏天、秋天</span>
                </div>
              </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="tab-2">
              <div class="destinationJourney-swipeItems-content am-flexbox am-flexbox-justify-between text-xsm">
                <div class="destinationJourney-swipeItems-date am-flexbox am-flexbox-item am-flexbox-dir-column am-flexbox-align-top">
                  <span>6:00-10:00</span>
                  <span>设备：相机、泳衣</span>
                  <span>适合季节：春天、夏天、秋天</span>
                </div>
                <div class="destinationJourney-swipeItems-date am-flexbox am-flexbox-item am-flexbox-dir-column am-flexbox-align-top">
                  <span>12:00-16:00</span>
                  <span>设备：相机、泳衣</span>
                  <span>适合季节：春天、夏天、秋天</span>
                </div>
                <div class="destinationJourney-swipeItems-date am-flexbox am-flexbox-item am-flexbox-dir-column am-flexbox-align-top">
                  <span>18:00-22:00</span>
                  <span>设备：相机、泳衣</span>
                  <span>适合季节：春天、夏天、秋天</span>
                </div>
              </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="tab-3">
            <div class="destinationJourney-swipeItems-content am-flexbox am-flexbox-justify-between text-xsm">
              <div class="destinationJourney-swipeItems-date am-flexbox am-flexbox-item am-flexbox-dir-column am-flexbox-align-top">
                <span>6:00-10:00</span>
                <span>设备：相机、泳衣</span>
                <span>适合季节：春天、夏天、秋天</span>
              </div>
              <div class="destinationJourney-swipeItems-date am-flexbox am-flexbox-item am-flexbox-dir-column am-flexbox-align-top">
                <span>12:00-16:00</span>
                <span>设备：相机、泳衣</span>
                <span>适合季节：春天、夏天、秋天</span>
              </div>
              <div class="destinationJourney-swipeItems-date am-flexbox am-flexbox-item am-flexbox-dir-column am-flexbox-align-top">
                <span>18:00-22:00</span>
                <span>设备：相机、泳衣</span>
                <span>适合季节：春天、夏天、秋天</span>
              </div>
            </div>
          </mt-tab-container-item>
            <mt-tab-container-item id="tab-4">
              <div class="destinationJourney-swipeItems-content am-flexbox am-flexbox-justify-between text-xsm">
                <div class="destinationJourney-swipeItems-date am-flexbox am-flexbox-item am-flexbox-dir-column am-flexbox-align-top">
                  <span>6:00-10:00</span>
                  <span>设备：相机、泳衣</span>
                  <span>适合季节：春天、夏天、秋天</span>
                </div>
                <div class="destinationJourney-swipeItems-date am-flexbox am-flexbox-item am-flexbox-dir-column am-flexbox-align-top">
                  <span>12:00-16:00</span>
                  <span>设备：相机、泳衣</span>
                  <span>适合季节：春天、夏天、秋天</span>
                </div>
                <div class="destinationJourney-swipeItems-date am-flexbox am-flexbox-item am-flexbox-dir-column am-flexbox-align-top">
                  <span>18:00-22:00</span>
                  <span>设备：相机、泳衣</span>
                  <span>适合季节：春天、夏天、秋天</span>
                </div>
              </div>
            </mt-tab-container-item>
          </mt-tab-container>
        <!--</mt-swipe-item>-->
        <!--<mt-swipe-item>2</mt-swipe-item>-->
        <!--&lt;!&ndash;<mt-swipe-item>3</mt-swipe-item>&ndash;&gt;-->
      <!--</mt-swipe>-->
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
import Swiper from '../../../static/js/swiper.min.js'
export default {
  name: '',
  data() {
    return {
      imgPublicPath:'./static/img/',
      dateList:[
        {
          title:'香港-塞班天宁',
          content:['','',''],
        },
        {
          title:'上海-塞班天宁',
          content:['','',''],
        },
        {
          title:'呼和浩特-塞班天宁',
          content:['','',''],
        },
        {
          title:'呼和浩特',
          content:['','',''],
        },
      ],
      bannerId:null,
      index:1,
      active:'tab-1',
    }
  },
  computed:{
    bannerImgPath:function () {
      return `${this.imgPublicPath}banner-${this.bannerId}.jpg`
    },
    activeIndex:function () {
      console.log(this.active.split('-')[1]-1);
      return this.active.split('-')[1]-1;
    }
  },
  methods: {
    changeTab:function (tabId) {
      this.active = tabId;
    }
  },
  created(){
//    this.bannerId = this.$route.params.cid;
//    console.log(this.bannerId);
  },
  mounted(){
//    this.active = '外卖';
  },
  updated(){
    console.log("updated!:",this.active);
  },
}
</script>

<style>
.destinationJourney-container{
  width: 100%;
  margin-top: 0.2rem;
  padding: 0.15rem 0.32rem 0.3rem;
  background-color: white;

}
.destinationJourney-title{
  height: 0.24rem;
  width: auto;
  margin-bottom: 0.2rem;
  font-family: YouYuan;
  /*font-size: 0.24rem;*/
}
.destinationJourney-wraper{
  width: 100%;
  height:1.5rem;
  /*font-size: 0.2rem;*/

}
/*.destinationJourney-swipeItems{*/
  /*width: 100%;*/
/*}*/
.destinationJourney-swipeItems-wraper{
  overflow-x: auto;
  /*overflow-y: hidden;*/
  /*position: relative;*/
  /*height: 0.4rem;*/
  width: 100%;
}
.destinationJourney-swipeItems-title{
  white-space: nowrap;
  /*height: 0.4rem;*/
}
.destinationJourney-swipeItems-items{
  margin-right: 0.2rem;
  border-radius: 0.11rem;
  background-color: #e8e8e8;
  padding: 0.08rem;
  opacity: 0.74;
}
.on-selected{
  background-color: #2bbea6;
  color: white;
  opacity: 1;
}
.destinationJourney-swipeItems-content {
  width: 100%;
  height: auto;
  border-radius: 0.11rem;
  background-color: #e8e8e8;
  margin-top: 0.15rem;
  padding: 0.12rem 0.23rem;
  /*flex-wrap: wrap;*/
  /*-webkit-flex-wrap: wrap;*/
  /*-moz-flex-wrap: wrap;*/
}
.destinationJourney-swipeItems-date{
  width: auto;
  /*font-size: 0.12rem;*/
  line-height: 0.21rem;
  opacity: 0.66;
}
.destinationJourney-swipeItems-date>span:first-child{
  margin-bottom: 0.05rem;
}
</style>
