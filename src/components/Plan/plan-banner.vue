<template>
  <div v-if="planList" class="plan-banner bg-allCover" :style="{backgroundImage: 'url('+planList.pic+')'}"></div>
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
//  watch:{
//    planList:function () {
//      console.log(this.planList);
//      this.$forceUpdate();
//    },
//  },
  data() {
    return {

    }
  },
  computed:{

  },
  methods: {

  },
  created(){
//    this.bannerId = this.$route.params.cid;
  },
  mounted(){

  },
  update(){

  }
}
</script>

<style>
.plan-banner{
  width: 100%;
  height: 62.5vw;
  -webkit-box-shadow: 0.01rem 0.01rem #4d4d4d;
  -moz-box-shadow: 0.01rem 0.01rem #4d4d4d;
  box-shadow: 0.01rem 0.07rem 0.07rem 0.05rem #dddddd;
}
</style>
