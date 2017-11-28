<template>
  <div class="search">
    <mt-search
      v-model="value"
      cancel-text="×"
      placeholder="搜索旅行家们都去那儿"
      >
      <mt-cell class="rankingList"
        v-for="(item,index) in result"
        :key="index"
        :title="item"
        @click.native="jump('/destination')"
        >
      </mt-cell>
    </mt-search>
    <div v-show="!value" @click="jump('/destination')" class="rankingList">
      <mt-cell title="塞班天宁">
      <span class="search-ranking " slot="icon">
        1
      </span>
      </mt-cell>
      <mt-cell title="杭州西湖">
      <span class="search-ranking " slot="icon">
        2
      </span>
      </mt-cell>
      <mt-cell title="三亚度假村">
      <span class="search-ranking " slot="icon">
        3
      </span>
      </mt-cell>
    </div>
    <div v-show="!value" class="search-history-list">
      <mt-cell title="海南岛">
      <span class="search-history-icon bg-allCover" slot="icon">
      </span>
      </mt-cell>
      <mt-cell title="巴厘岛度假村">
      <span class="search-history-icon bg-allCover" slot="icon">
      </span>
      </mt-cell>
      <mt-cell title="澳大利亚悉尼">
      <span class="search-history-icon bg-allCover" slot="icon">
      </span>
      </mt-cell>
    </div>


  </div>
</template>

<script>



export default {
  name: 'plan',
  data(){
    return{
      backResult:[
//        'e','r','y'
      ],
      value:'',
      result:'',
      timeout:null,
    };
  },
  computed:{
//    result: function(){
////      console.log('value',this.value);
//
//
//    }
  },
  watch:{
    value:function () {
//      console.log('value',this.value);
      this.debounce(function(){
        this.value!=''&&this.backResult.push(this.value);
        this.result = this.backResult;
      },500,true);
    }
  },
  methods:{
    jump(path){
      this.$parent.jump(path);
    },
    debounce:function(func, wait, debounced) {
//      var timeout;

//      return function() {
//        console.log(this);
        var context = this, args = arguments;
        // 封装函数,用于延迟调用
        var throttler = function() {
          // 只是节流函数的时候,对其timeout进行赋值为null,这样可以设置下一次的setTimtout
          this.timeout = null;
//          console.log('timeout!!!',context);
          func.apply(context, args);
        };
        // 如果debouce是true的话,前一个函数的调用timeout会被清空,不会被执行
        // 就是debounce函数的调用,这个前一个函数的不会执行.下面会重新设定setTimeout用于
        // 执行这一次的调用.
        // 但是如果是throttle函数,则会执行前一个函数的调用,同时下面的setTimeout在
        // 函数没有运行的时候,是无法再次设定的.
        if (debounced) clearTimeout(this.timeout);
        // 如果debouce是true 或者 timeout 为空的情况下,设置setTimeout
        if (debounced || !this.timeout) this.timeout = setTimeout(throttler, wait);
        console.log('setTimeout');
//      };
    },

  },
  updated(){
    console.log('result:',this.result);
  },
  components:{

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.search{
    background-color: rgba(233,231,231,0.38);
  min-height: 100vh;
}
.mint-search{
  height:auto !important;
}
.mint-searchbar{
  height: 0.7rem;
  background-color: white !important;
}
.mint-searchbar-inner{
  width: 100%;
  height: 0.5rem !important;
  background-color: rgba(171,178,188,0.3) !important;
  border-radius: 0.09rem!important;
  padding: 0 0.15rem!important;
}
.mint-searchbar-core{
  padding-left: 0.22rem;
  background-color: rgb(230,232,235) !important;
  font-size: 0.24rem;
  font-weight: normal;
  font-stretch: normal;
  line-height: 0.28rem;
  letter-spacing: 0rem;
  color: #000000;
}
/*放大镜*/
.mintui-search{
  width: 0.3rem;
  height: 0.3rem;
  line-height: 0.3rem;
  font-size: 0.3rem !important;
  color: #999!important;
}
.mint-search-list{
  margin-top: 0.3rem;
}
/*取消按钮*/
.mint-searchbar-cancel{
  color: rgba(0,0,0,0.49)!important;
  width: 0.45rem;
  height: 0.4rem;
  line-height: 0.4rem;
  text-align: center;
  font-size: 0.5rem;
}
/*排名列表*/
.rankingList{
  padding-left: 0.29rem;
  padding-top: 0.09rem;
}
.mint-cell:nth-child(2) span.search-ranking{
  opacity: 0.75;
}
.mint-cell:nth-child(3) span.search-ranking{
  opacity: 0.5;
}
.mint-cell-wrapper{
  background-image: none !important;
}
.mint-cell:last-child{
  background-image: none !important;
}
.mint-cell{
  background-color: transparent!important;
  min-height: 0!important;
  margin-bottom: 0.14rem;
}
.mint-cell-title{
  height: 0.35rem;
  font-size: 0.26rem;
  line-height: 0.3rem;
  color: rgba(0,0,0,0.49);
  vertical-align: middle;
}
.mint-cell-text {
  vertical-align: baseline !important;
}
.search-ranking{
  background-color: #ff8d27;
  width: 0.27rem;
  height: 0.27rem;
  line-height: 0.27rem;
  text-align: center;
  color: white;
}
.search-history-list{
  padding-left: 0.29rem;
  /*padding-top: 0.09rem;*/
}
.search-history-icon{
  width: 0.27rem;
  height: 0.27rem;
  background: url("../../assets/images/search-history.png") no-repeat;
  vertical-align: text-bottom;
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
