<template>
  <div class="start">
    <MainHeader :userClickFunc="handleDrawer"></MainHeader>
    <MainNavBar :closeItems="closeItems" :startRatingsList="startRatingsList"></MainNavBar>
    <MainItems :startPlansList="startPlansList"></MainItems>
    <div v-show="isShowMask" class="navBarMask" @click="closeItems=true;"></div>
  </div>
</template>

<script>
import MainHeader from '@/components/Start/start-header'
import MainNavBar from '@/components/Start/start-navBar'
import MainItems from '@/components/Start/start-items'
import eventBus from '../../../static/eventBus.js'


export default {
  name: 'keepAlive-start',
  data(){
    return {
      isShowMask:false,
      closeItems:false,
      startPlansList:null,
      startRatingsList:null,
    }
  },
  methods:{
    jump(path){
      this.$parent.jump(path);
    },
    handleDrawer:function () {
      this.$emit('showDrawer');
      console.log("Click showDrawer!!");
    },
  },
  created(){
    /*导航栏事件处理绑定*/
    eventBus.$on('navBarState',state=>{
      console.log("navBarState:",state);
      if(state==='opened'){
        this.isShowMask=true;
      }
      else {
        this.isShowMask=false;
        this.closeItems=false;
      }

      console.log("isShowMask:",this.isShowMask);
    });

    /*http获取数据*/
    this.$http.get(
      `${__api__}data.json`
    )
      .then(function (response) {
          //          console.log(response);
          this.startPlansList = response.data.goods;
          this.startRatingsList = response.data.ratings;

          //          console.log("startPlansList:",this.startPlansList);
          //          console.log("startRatingsList:",this.startRatingsList);
        },
        function (error) {
          console.log("error:",error);
        });


  },
  updated(){
//    console.log('closeItems',this.closeItems);
  },
  components:{
    MainHeader,
    MainNavBar,
    MainItems,
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navBarMask{
  position: absolute;
  left:0;
  right: 0;
  top:0;
  bottom: 0;
  z-index: 9;
}
</style>
