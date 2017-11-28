<template>
  <div class="destination">
    <DestinationHeader></DestinationHeader>
    <DestinationBanner></DestinationBanner>
    <DestinationDetails></DestinationDetails>
    <DestinationJourney></DestinationJourney>
  </div>
</template>

<script>
import DestinationHeader from '@/components/Destination/destination-header'
import DestinationJourney from '@/components/Destination/destination-journey'
import DestinationBanner from '@/components/Destination/destination-banner'
import DestinationDetails from '@/components/Destination/destination-details'


export default {
  name: 'plan',
  methods:{
    jump(path){
      this.$parent.jump(path);
    }
  },
  components:{
    DestinationHeader,
    DestinationJourney,
    DestinationBanner,
    DestinationDetails
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.destination{
  background-color: #deeae8;
}
</style>
