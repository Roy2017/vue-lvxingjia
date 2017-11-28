<template>
  <div id="app">
    <Drawer :show="drawerShow"
            :pos="pos"
            :tran="tran"
            @change-show="changeDrawerShow"
            @on-hide=""
            @on-show="">
      <div slot="mainBody">
        <keep-alive :include="/^keepAlive\S+/">
          <router-view @showDrawer="drawerToggle"></router-view>
        </keep-alive>
      </div>
      <div class="layout" slot="drawer" >
        <DrawerList :navItems="navItems"></DrawerList>
      </div>
    </Drawer>

  </div>
</template>


<script>
/*
打通父子之间所有数据和方法的共享：
　　　　　　父模板：<child ref="子名称"></child>
　　　　　　父访问子:	父组件: this.$refs.子名称.子数据/方法名()
　　　　　　子访问父:	子组件: this.$parent.子数据/方法名()
 */
//import Router from 'vue-router'
import Drawer from '@/components/Drawer'
import DrawerList from '@/components/DrawerList'
import {mapState} from 'vuex';
import {mapMutations} from 'vuex';

export default {
  name: 'app',
  data() {
    return {
      urlDev: 'localhost',
      urlBuild: 'kflvue.applinzi.com',

      pos: 'left',
      tran: '',//overlay
      drawerShow: false,
      navItems: [
        {
          icon:'icon-add.png',
          title:'我的加入'
        },
        {
          icon:'icon-foot.png',
          title:'我的足迹'
        },
        {
          icon:'icon-heart.png',
          title:'我的收藏'
        },
        {
          icon:'icon-book.png',
          title:'我的优惠卷'
        },
        {
          icon:'icon-view.png',
          title:'旅途趣闻'
        },
        {
          icon:'icon-geographic.png',
          title:'度假地图'
        },
        {
          icon:'icon-pic.png',
          title:'旅行相册'
        },
        {
          icon:'icon-warning.png',
          title:'意见反馈'
        },
        {
          icon:'icon-gear.png',
          title:'设置'
        },
      ]
    }
  },
  methods: {
    jump: function (path) {
      this.$router.push(path)
    },
    drawerToggle:function () {
      this.drawerShow=!this.drawerShow
    },
    changeDrawerShow(state) {
      this.drawerShow=state;
      console.log('drawer was changed from components');
    },
  },
  created() {
//    window.serverUrl = this.urlDev;
  },
  components:{
    Drawer,
    DrawerList
  }
}
</script>

<style>
  html {
    height: 100%;
  }
  body {
    height: 100%;
  }
  #app {
    height: 100%;
    width: 100%;
  }
  .layout{
    width: 3.5rem;
    /*border: 1px solid red;*/
  }

</style>
