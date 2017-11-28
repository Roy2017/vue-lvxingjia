<template>
  <div class="userPage bg-allCover">
    <userPageHeader></userPageHeader>
    <userPageBanner></userPageBanner>
    <userPageItems></userPageItems>
  </div>
</template>

<script>
import userPageHeader from '@/components/UserPage/userPage-header'
import userPageBanner from '@/components/UserPage/userPage-banner'
import userPageItems from '@/components/UserPage/userPage-items'


export default {
  name: 'userPage',
  methods:{
    jump(path){
      this.$parent.jump(path);
    }
  },
  components:{
    userPageHeader,
    userPageBanner,
    userPageItems,
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.userPage{
  background-image: url("../../assets/images/drawer-background.jpg");
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
