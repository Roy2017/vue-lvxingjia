<template>
  <div class="DList am-flexbox am-flexbox-dir-column am-flexbox-align-stretch text-sm">
    <div v-if="isLogin" @click="jump('/userPage/1')" class="Dlist-avatar-container am-flexbox">
      <img class="Dlist-avatar" src="../../static/img/avatar.jpg" alt="">
      <div class="Dlist-avatar-content am-flexbox am-flexbox-dir-column am-flexbox-align-stretch text-xs">
        <span>努力学习</span>
        <span>旅行等级:10级</span>
        <span class="am-flexbox">
          <i v-for="tmp in new Array(5)" class="icon-star"></i>
        </span>
      </div>
    </div>

    <div v-else @click="jump('')" class="Dlist-avatar-container am-flexbox">
      <img class="Dlist-avatar" src="../../src/assets/images/user-unknow.jpg" alt="">
      <span class="Dlist-avatar-content text-bold">请登录</span>
    </div>

    <div v-for="tmpLi in navItems" @click="jump('/impress')" class="Dlist-li am-flexbox">
      <img :src="'./static/img/icons/'+tmpLi.icon" alt="">
      <span>{{tmpLi.title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    navItems: {
      type: Array,
      default: null,
    },
  },
  data(){
    return{
      isLogin:true,
    }
  },
  methods:{
    jump(path){
      this.$parent.hideMask();
      setTimeout(()=>{
        this.$parent.jump(path);
      },200)
    }
  },
  mounted(){
    console.log(this.navItems);
  },
  components:{
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.DList{
  overflow-y: scroll;
  color: white;
}
.Dlist-avatar-container{
  height: 2.48rem;
  margin-left: 0.26rem;
}
.Dlist-avatar{
  width: 1.31rem;
  height: 1.31rem;
  border-radius: 50%;
  -webkit-flex: none;
  flex: none;
}
.Dlist-avatar-content{
  margin-left: 0.15rem;
  line-height: 0.35rem;
}
.Dlist-avatar-content>span:last-child{
  margin-top: 0.02rem;
}
.icon-star{
  width: 0.19rem;
  height: 0.19rem;
  display: inline-block;
  margin-right: 0.03rem;
  background: url("../../src/assets/images/icon-star.png") no-repeat;
  background-size: 100% 100%;
}
.Dlist-li{
  height: 0.58rem;
  background-color: rgba(13,15,15,0.22);
  padding-left: 0.28rem;
  margin-bottom: 0.01rem;
  background-image:url("../../src/assets/images/right-arrows.png");
  background-position:90% center;
  background-repeat: no-repeat;
  background-size: 0.17rem 0.23rem;
}
.Dlist-li>img{
  width: 0.29rem;
  /*height: 0.29rem;*/
}
.Dlist-li>span{
margin-left: 0.24rem}
</style>
