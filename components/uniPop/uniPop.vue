<template>
  <view class="uniPop">
    <image src="../../static/4.png" mode=""></image>
    <button>确认购买</button>
  </view>
</template>

<script>
  export default {
    name:"uniPop",
    data() {
      return {
        
      };
    }
  }
</script>

<style>
.uniPop{
  z-index: 99;
    position: fixed;
    display: block;
    width: 100%;
    height: 650rpx;
    bottom: 0;
    left: 0;
    background-color:red;
    border-top-left-radius: 32rpx;
    border-top-right-radius: 32rpx;
  }
  .uniPop image{
    width: 390rpx;
    height: 390rpx;
    transform: translateX(50%);
    margin-top: 70rpx;
  }
  .uniPop button{
    width: 320rpx;
    height: 120rpx;
    font-size: 60rpx;
    border-radius: 24rpx;
    color: #fff;
    line-height: 120rpx;
    background-color: #E85757;
  }
</style>