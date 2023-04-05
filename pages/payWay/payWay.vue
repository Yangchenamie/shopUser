<template>
  <view>
    <view v-html ="payGateWay">{{payGateWay}}</view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        payGateWay:""
      }
    },
    mounted() {
      const form = this.route
      console.log(this.$route);
      this.payGateWay = form
      console.log(this.payGateWay);
      this.$nextTick(()=>{
        // document.getElementById('paymentSubmit').submit()
      })
    },
    methods: {
      
    }
  }
</script>

<style>

</style>
