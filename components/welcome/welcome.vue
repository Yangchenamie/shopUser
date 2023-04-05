<template>
  <view class="content">
    <view class="con-title">
      <image src="../../static/shoplogo.png" mode=""></image>
      <view class="con-text">
        <view class="">
          欢迎光临
        </view>
        <view class="numRoot">
          机器编号: 81806104
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    name:"welcome",
    data() {
      return {
        
      };
    }
  }
</script>

<style>

  .con-title{
    width: 100%;
    display: flex;
    height: 160rpx;
    font-size: 48rpx;
    align-items: center;
  }
  
  .con-title image{
    width: 100rpx;
    height: 100rpx;
    margin-left: 64rpx;
    margin-right: 40rpx;
  }
  .con-text{
    display: flex;
    flex-flow: column;
  }
  .numRoot{
    font-size: 28rpx;
  }

</style>