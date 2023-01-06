<template>
  <view class="content">
    <swiper indicator-dots circular autoplay>
      <swiper-item>
        <image src="../../static/3.png"></image>
      </swiper-item>
      <swiper-item>
        <image src="../../static/3.png"></image>
      </swiper-item>
      <swiper-item>
        <image src="../../static/3.png"></image>
      </swiper-item>
    </swiper>
  </view>
</template>

<script>
  export default {
    name:"carousel",
    data() {
      return {
        
      };
    }
  }
</script>

<style>
.content{
  width: 100%;
}
.content swiper image {
  width: 100%;
  height: 400rpx;
}
</style>