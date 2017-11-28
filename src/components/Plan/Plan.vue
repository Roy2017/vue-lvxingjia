<template>
  <div class="plan">
    <PlanHeader></PlanHeader>
    <PlanMyPlan></PlanMyPlan>
    <PlanBanner :planList=planList></PlanBanner>
    <PlanItems :planList=planList></PlanItems>
  </div>
</template>

<script>
import PlanHeader from '@/components/Plan/plan-header'
import PlanMyPlan from '@/components/Plan/plan-myPlan'
import PlanBanner from '@/components/Plan/plan-banner'
import PlanItems from '@/components/Plan/plan-items'


export default {
  name: 'plan',
  data() {
    return {
      cid:null,
      planList:null,
    }
  },
  methods:{
    jump(path){
      this.$parent.jump(path);
    }
  },
  created(){
    this.cid = this.$route.params.cid;
    /*http获取数据*/
    this.$http.get(
      `${__api__}data.json`
    )
      .then(function (response) {
//          console.log(response);
          this.planList = response.data.goods.filter((value)=>{

            return value.cid == this.cid?true:false;
          })[0];
//          console.log(this.planList);
        },
        function (error) {
          console.log("error:",error);
        });

  },
  components:{
    PlanHeader,
    PlanMyPlan,
    PlanBanner,
    PlanItems,
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
