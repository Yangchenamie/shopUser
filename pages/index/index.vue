<template>
  <view class="content">
    <carousel></carousel>
    <search></search>
    <indexNav></indexNav>
    <!-- <uniPop></uniPop> -->
  </view>
</template>

<script>
  import carousel from '../../components/carousel/carousel.vue';
  import search from '../../components/search/search.vue'
  import indexNav from '../../components/indexNav/indexNav.vue'
  import uniPop from '../../components/uniPop/uniPop.vue'
  export default {
    data() {
      return {
        
      }
    },
    methods: {
      
    },
    components:{
      carousel,search,indexNav,uniPop
    }
  }
</script>

<style>
/* .content{
  position: relative;
} */

</style>
