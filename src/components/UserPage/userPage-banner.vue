<template>
  <div class="userPage-banner am-flexbox am-flexbox-dir-column text-md">
    <div class="userPage-avatar bg-allCover" :style="{backgroundImage: 'url('+avatarImgPath+')'}"></div>
    <div class="userPage-userName">{{userInfo.name}}</div>
    <div class="userPage-geographic am-flexbox">
      <span class="userPage-geographicIcon bg-allCover"></span>
      <span class="text-sm">{{userInfo.location}}</span>
    </div>
    <div class="userPage-navBar am-flexbox">
      <div @click="jump({ name: 'userList', params: { ListConfig: friendsListConfig }})" class="am-flexbox-item am-flexbox am-flexbox-justify-center" >
        <img class="userPage-navBarIcon" src="../../assets/images/icon-friends.png"/>
        <span>{{userInfo.friendsCount}}</span>
      </div>
      <div @click="jump({ name: 'userList', params: { ListConfig: likedListConfig }})" class="am-flexbox-item am-flexbox am-flexbox-justify-center">
        <img class="userPage-navBarIcon" src="../../assets/images/header-like.png"/>
        <span>{{userInfo.likeCount}}</span>
      </div>
      <div @click="jump({ name: 'userList', params: { ListConfig: footmarkListConfig }})" class="am-flexbox-item am-flexbox am-flexbox-justify-center">
        <img class="userPage-navBarIcon" src="../../assets/images/icon-foot.png"/>
        <span>{{userInfo.footmarkCount}}</span>
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

export default {
  name: '',
  data() {
    return {
      imgPublicPath:__api__+'img/',
      userInfo:{
        pic:'avatar.jpg',
        name:'学习熊',
        location:'广州',
        friendsCount:300,
        likeCount:350,
        footmarkCount:900
      },
      friendsListConfig:{
        listTitle:'好友列表',
      },
      likedListConfig:{
        listTitle:'点赞旅友',
      },
      footmarkListConfig:{
        listTitle:'访客列表',
      },
    }
  },
  computed:{
    avatarImgPath:function () {
      return `${this.imgPublicPath}${this.userInfo.pic}`;
    }
  },
  methods: {
    jump(path){
      this.$parent.jump(path);
    }
  },
  created(){
//    this.userInfo = this.$route.params;
//    console.log(this.userInfo);
  },
}
</script>

<style>
.userPage-banner{
  width: 100%;
  height: 4.41rem;
  position: relative;
  color: white;
}
.userPage-avatar{
  margin-top: 0.51rem;
  width: 2.19rem;
  height: 2.19rem;
  border-radius: 50%;
}
.userPage-userName{
  /*font-size: 0.24rem;*/
  margin-top: 0.22rem;
}
.userPage-geographic{
  margin-top: 0.1rem;
}
.userPage-geographicIcon{
  width: 0.25rem;
  height: 0.25rem;
  /*margin-right:0.1rem;*/
  background-image: url("../../assets/images/geographic-white.png");
}
.userPage-navBar{
  width:100%;
  height: 0.67rem;
  background-color: rgba(0,0,0,0.13);
  position: absolute;
  bottom: 0;
}
.userPage-navBarIcon{
  width: 0.33rem;
  /*height: 0.28rem;*/
  margin-right: 0.11rem;
}
</style>
