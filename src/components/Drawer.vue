<template>
  <!-- container -->
  <div class="vue-drawer bg-allCover">
    <div :style="{'transform': 'translate('+translateX+'px,0)scale('+scale+','+scale+')'}"
    class="main" :class="show ? 'active' : ''">
      <!-- main body -->
      <slot name="mainBody"></slot>
    </div>
    <!-- mask -->
    <div class="mask" :class="show ? 'active' : ''" @click="hideMask"></div>
    <div ref="drawer" class="drawer"
         :class="[pos!='left' ? 'drawer-right' : 'drawer-left', show ? 'active' : '']" >
      <!-- drawer -->
      <slot name="drawer"></slot>
    </div>


  </div>
</template>

<script scoped>

 export default {
   props: {
     show: {
       type: Boolean,
       default: false
     },
     pos: {
       type: String,
       default: 'left'
     },
     tran: {
       type: String,
       default: 'overlay'
     }
   },
   data() {
     return {
      drawerWidth:0,
      translateX:0,
      scale:1,
    }
  },
  watch:{
    show:function(){
      //listener
      if (!this.show)
        this.$emit('on-hide');
      else
        this.$emit('on-show');

      //transition
      if (this.tran=='overlay') return;
      if (!this.show)
        this.translateX=0,this.scale=1;
      else
        this.translateX=this.pos=='left'?this.drawerWidth:-this.drawerWidth,            this.scale=0.8;
    }
  },
  mounted(){
    this.$nextTick(function () {
      this.drawerWidth=this.$refs.drawer.clientWidth
  })
  },
  methods: {
    jump: function (path) {
      this.$router.push(path);
    },
   hideMask() {
     // this.show = false;
     this.$emit('change-show',false)
   }
 }
}
</script>

<style >
 .vue-drawer {
   display: block;
   position: relative;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   overflow: hidden;
   background: url("../../src/assets/images/drawer-background.jpg") no-repeat;
   /*max-width: 600px;*/
 }

 .vue-drawer > .main {
  /*max-width: 600px;*/
   background: white;
   height: 100%;
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   transition: transform ease-in-out 0.38s, visibility 0.38s;
   overflow: scroll;
   transform-origin: left;
 }
 .vue-drawer > .main.active {
    box-shadow: 0 0 0.3rem 0.03rem #333;
 }
 .vue-drawer > .mask {
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   visibility: hidden;
   opacity: 0;
   transition: opacity ease-in-out 0.38s, visibility ease-in-out 0.38s;
   /*background-color: rgba(0, 0, 0, 0.3);*/
 }

 .vue-drawer > .mask.active {
   visibility: visible;
   opacity: 1;
 }

 .vue-drawer > .drawer {
  /*max-width: 600px;*/
   /*background-color: #fff;*/
   position: absolute;
   top: 0;
   height:100%;
   overflow: hidden;
   pointer-events: none;
   visibility: hidden;
   transition: transform ease-in-out 0.38s, visibility 0.38s;
   will-change: none;
 }

 .vue-drawer > .drawer-left {
   left: 0;
   transform: translateX(-102%);
 }

 .vue-drawer > .drawer-right {
   right: 0;
   transform: translateX(102%);
 }


 .vue-drawer > .active {
   pointer-events: inherit;
   visibility: visible;
   transform: translateX(0%);
 }
</style>
