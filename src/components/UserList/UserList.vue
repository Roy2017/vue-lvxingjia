<template>
  <div class="userList">
    <userListHeader :listName=listConfig.listTitle></userListHeader>

    <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10">
      <div v-for="tmp in listResult" class="userList-items am-flexbox">
        <div class="userList-items-avatar bg-allCover" :style="{backgroundImage: 'url('+imgPublicPath+tmp.imgPath+')'}"></div>
        <span class="text-md">{{tmp.userName}}</span>
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
import userListHeader from '@/components/UserList/userList-header'
export default {
  name: 'plan',
  props:['ListConfig'],
  data(){
    return{
      imgPublicPath:__api__+'img/',
      listConfig:null,
      listResult:[
        {
          imgPath:'user-1.png',
          userName:'天天向上'
        },
        {
          imgPath:'user-2.png',
          userName:'天天向上'
        },
        {
          imgPath:'user-3.png',
          userName:'天天向上'
        },
        {
          imgPath:'user-4.png',
          userName:'天天向上'
        },
        {
          imgPath:'user-5.png',
          userName:'天天向上'
        },
        {
          imgPath:'user-6.png',
          userName:'天天向上'
        },
        {
          imgPath:'user-7.png',
          userName:'天天向上'
        },
      ],
      loading:false,
      loadMoreCount:7,
      loadMoreIndex:0,
      noMore:false
    };
  },
  computed:{
    avatarImgPath:function () {
//      return `${this.imgPublicPath}${this.userInfo.pic}`;
      return `${this.imgPublicPath}user-1.png`;
    }
  },
  methods:{
    jump(path){
      this.$parent.jump(path);
    },
    loadList:function (start,count) {

    },
    loadMore:function () {
      this.loading = true;
      setTimeout(() => {

        this.listResult = this.listResult.concat(this.listResult);
        this.noMore = true;
        this.loading = true;
      }, 2000);
    }
  },
  created(){
    console.log("getUserList:",this.$route.params.ListConfig);
    this.listConfig = this.$route.params.ListConfig;
  },
  components:{
    userListHeader,
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.userList{
  text-align: center;
    /*background-color: rgba(233,231,231,0.38);*/
  /*min-height: 100vh;*/
}
.userList-items{
  border-bottom: 1px solid #aaa;
  padding: 0.15rem 0.25rem;
}
.userList-items-avatar{
  width: 0.52rem;
  height: 0.52rem;
  border-radius: 50%;
  margin-right: 0.29rem;
}
.userList-items-loading{
  display: inline-block;
  height: 0.72rem;
  margin-top: 0.2rem;
}

/*控制placeholder的颜色*/
::-webkit-input-placeholder { /* WebKit browsers */
  color:    #999;
}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
  color:    #999;
}
::-moz-placeholder { /* Mozilla Firefox 19+ */
  color:    #999;
}
:-ms-input-placeholder { /* Internet Explorer 10+ */
  color:    #999;
}
</style>
