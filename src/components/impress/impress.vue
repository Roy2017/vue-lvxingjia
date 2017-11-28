<template>
  <div class="impress">
    <div @click="goBackHandle" class="impress-cancel">×</div>
    <div class="impress-flex">
      <div class="circle common" @click="getJob">
        <!--<i class="iconfont icon-biji1 icons"></i>-->
        <p class="write">求职中<br>请联系我</p>
      </div>
      <dailog :isshow="showjob" @on-close="closeDailog('showjob')">
        <p class="ptext">
          <span>tel:18148933008</span>
          <span>email:cxhroy@qq.com</span>
        </p>
      </dailog>
      <dailog :isshow="showPlane" @on-close="closeDailog('showPlane')">
        <p class="ptext text-md">
          <span>已在加紧开发中</span>
          <span>
            <em class="loading loading_one">.</em>
            <em class="loading loading_two">.</em>
            <em class="loading loading_there">.</em>
          </span>
        </p>
      </dailog>
    </div>
  </div>
</template>
<script type="text/javascript">
import Dailog from "../dailog/dailog.vue"
export default {
  data() {
    return {
      showjob: false,
      showPlane: false
    }
  },
  methods: {
    goBackHandle:function () {
      this.$router.back();
      this.$destroy();
    },
    getJob() {
      this.showjob = true
    },
    getPlane() {
      this.showPlane = true
    },
    closeDailog(attr) {
      this[attr] = false
    },
  },
  mounted(){
    this.getPlane();
  },
  components: { dailog: Dailog }
}

</script>
<style lang="less">
.impress {
  position: fixed;
  top: 0;
  left: 0;
  /*bottom: 0.48rem;*/
  bottom: 0;
  width: 100%;
  background: #2bbea6;
  z-index: 200;
  .circle {
    width: 2.2rem;
    height: 2.2rem;
    /*line-height: 2.2rem;*/
    /*background: #fff;*/
    border-radius: 50%;
    margin: 15% auto;
    text-align: center;
    position: relative;
    .icons {
      display: block;
      padding: 13px;
      font-size: 48px;
      color: #3c9;
    }
  }
}
.impress-cancel{
  color: white;
  width: 0.45rem;
  height: 0.45rem;
  line-height: 0.4rem;
  text-align: center;
  font-size: 0.6rem;
  position: absolute;
  right: 0.3rem;
  top: 0.3rem;
}
.write {
  /*width: 50px;*/
  /*height: 20px;*/
  /*font-size: 14px;*/
  /*color: #2bbea6;*/
  color: #fff;
  margin:  35% auto;
}

.single {
  flex: 1;
  /*margin-top: 5%;*/
}

.common {

}

.ptag {
  font-size: 14px;
  color: #fff;
  line-height: 30px;
  padding: 30px;
}

.ptext {
  color: #2bbea6;
  /*font-size: 16px;*/
  font-weight: normal;
}

.single em {
  /*width: 90px;*/
  /*height: 90px;*/
  /*margin: 0 auto;*/
  /*background: #2bbea6 url(http://img04.yesmyimg.com/images/event/2014/11/018403/icon.png) no-repeat center center;*/
  /*cursor: pointer;*/
  /*display: block;*/
  /*position: relative;*/
}

.circle:after {
  content: '';
  position: absolute;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  box-shadow: 0 0 1px 2px rgba(255, 255, 255, 0.8);
  top: 50%;
  left: 50%;
  margin-top: -1rem;
  margin-left: -1rem;
  /*z-index: 3;*/
  opacity: 0;
  -webkit-animation: halo 1s 0.5s infinite ease-out;
  -moz-animation: halo 1s 0.5s infinite ease-out;
  animation: halo 1s 0.5s infinite ease-out;
}

.impress-flex {
  display: flex;
  flex-direction: column;
  /*align-content: ;*/
  justify-content: center;
  text-align: center; // height: 100%;
  padding: 100px 0;
}
.loading{
  /*display: inline-block;*/
  /*width: 0.5rem;*/
  /*height: 0.5rem;*/
}
.loading_one {
  animation: fadein 1s linear 0.2s infinite;
}

.loading_two {
  animation: fadein 1s linear 0.6s infinite;
}

.loading_there {
  animation: fadein 1s linear 1s infinite;
}

@keyframes fadein {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes halo {
  0% {
    opacity: 0;
    -webkit-transform: scale(0.1);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    -webkit-transform: scale(1.2);
  }
}

@-moz-keyframes halo {
  0% {
    opacity: 0;
    -moz-transform: scale(0.1);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    -moz-transform: scale(1.2);
  }
}

@-ms-keyframes halo {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@-o-keyframes halo {
  0% {
    opacity: 0;
    -o-transform: scale(0.1);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    -o-transform: scale(1.2);
  }
}

@keyframes halo {
  0% {
    opacity: 0;
    transform: scale(0.1);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale(1.2);
  }
}

</style>
