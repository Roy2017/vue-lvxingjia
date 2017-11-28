<template>
  <div>
    <transition name="triangleUp">
      <div v-show="isOpen" class="barContent-triangleUp"></div>
    </transition>
    <transition name="fade">
      <div v-show="isOpen" class="barContent am-flexbox am-flexbox-dir-column am-flexbox-align-stretch">
        <div v-for="tmpObj in countryList" class="barContent-items am-flexbox am-flexbox-align-stretch">
          <div class="barContent-area am-flexbox am-flexbox-justify-center text-sm">
            {{tmpObj.area}}
          </div>
          <div class="barContent-country am-flexbox am-flexbox-dir-column am-flexbox-justify-center am-flexbox-align-stretch text-xs">
          <span v-for="tmpCountry in getCountrySpan(tmpObj.country)" style="white-space: nowrap;" >
            <a @click="itemsHandleClick(tmp)" v-for="tmp in tmpCountry">{{tmp}}</a>
          </span>
          </div>
        </div>
      </div>
    </transition>




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
  data()
     {
       return {
         img:'./static/img/banner-1.jpg',
         img1:'./static/img/banner-2.jpg',
         img2:'./static/img/banner-3.jpg',
         img3:'//www.nidosport.com/images/46969a.png',
         img4:'//www.nidosport.com/images/1ef6ae.png',
         img5:'//www.nidosport.com/images/0a6d0e.png',
         img6:'//www.nidosport.com/images/46969a.png',
         img7:'//www.nidosport.com/images/120c9b.png',
         countryList:[
           {area:'东南亚',country:['泰国','新加坡','新加坡','新加坡','新加坡','新加坡','新加坡','毛里求斯']},
           {area:'海岛',country:['泰国','新加坡','新加坡','新加坡','新加坡','新加坡']},
           {area:'日韩',country:['泰国','新加坡','新加坡','新加坡']},
           {area:'日韩',country:['泰国','新加坡','新加坡','新加坡']},
         ]
       }
     },
     props: ['isOpen'],//0或1
     methods: {
      getCountrySpan:function (arrayCountry) {
//        console.log("arrayCountry:",arrayCountry);
        var cloneArray = [].concat(arrayCountry);
//        console.log(cloneArray);
        var spanArray=[];

        while(cloneArray.length/4 !== 0){
          spanArray.push(cloneArray.splice(0,4));
        }
        if(cloneArray.length%4 !== 0){
          spanArray.push(cloneArray);
        }
//        console.log(spanArray);
        return spanArray;
      },

       itemsHandleClick:function (msg) {
         console.log("msg:",msg);
         this.$emit('navItemClick', msg);
       },

     },

     mounted(){
//       console.log("mounted!!");
     },
     updated(){
//       console.log("update!!");
     },
}
</script>

<style scoped>
  .barContent{
    min-width: 4.49rem;
    height: auto;
    background-color: white;
    box-shadow: 0.01rem 0.07rem 0.12rem 0.01rem;
    position: absolute;
    left: 50%;
    top:1.43rem;
    transform: translateX(-50%);
    z-index: 99;
  }
  .barContent-triangleUp{
    width:0;
    height:0;
    border-left: 0.12rem solid transparent;
    border-right: 0.12rem solid transparent;
    border-bottom: 0.17rem solid #57d0bd;
    position: absolute;
    float: left;
    left:48%;
    top:1.28rem;
    z-index: 100;
  }
  .barContent-items{
    /*width:100%;*/
    min-height: 0.6rem;
    background-color: #57d0bd;
    margin-bottom: 0.1rem;
    color: white;
    /*font-size: 0.18rem;*/
  }
  .barContent-items:last-child{
    margin-bottom: 0;
  }
  .barContent-area{
    width: 1.39rem;
    background-color: #2bbea6;
    flex: none;
    -webkit-flex: none;
  }
  .barContent-country{
    padding:0.1rem 0.1rem 0.1rem 0.18rem;
  }
  .barContent-country>span{
    margin-bottom: 0.12rem;
  }
  .barContent-country>span:last-child{
    margin-bottom: 0;
  }
  .barContent-country>span a{
    line-height: 0.18rem;
    padding-right: 0.06rem;
    border-right: 0.02rem solid white;
    margin-right: 0.06rem;
  }
  .barContent-country>span a:last-child{
    padding-right: 0;
    border-right: 0;
    margin-right: 0;
  }
  .fade-enter-active, .fade-leave-active {
    transition: all  0.3s
  }
  .fade-enter-to,.fade-leave{
    max-height: 3rem;
    /*opacity: 1;*/
  }
  .fade-leave-to,.fade-enter {
    opacity: 0;
    max-height:0px;

  }

  .triangleUp-enter-active, .triangleUp-leave-active {
    transition: all  0.3s
  }
  .triangleUp-leave-to,.triangleUp-enter {
    opacity: 0;
  }

</style>
