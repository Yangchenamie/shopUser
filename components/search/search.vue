<template>
  <view class="content">
    
    <view class="con-sear">
      <image src="../../static/search.png" mode=""></image>
      <input type="text" placeholder="搜索" @click="goto">
    </view>
  </view>
</template>

<script>
  export default {
    name:"search",
    data() {
      return {
        
      };
    },
    methods:{
      goto(){
        console.log(1);
        uni.navigateTo({
          url:'../search/search'
        })
      }
    }
  }
</script>

<style>
  /* .content{ */
 /*   width: 100%;
    display: flex;
    flex-flow: column; */
/*    border-bottom: 18rpx solid #F1F1F1;
  } */
  
  
  .con-sear{
    width: 100%;
    position: relative;
    margin-bottom: 20rpx;
  }
  .con-sear input{
    margin:0  50rpx;
    width: 85%;
    border: 1px solid #5081FF;
    height: 68rpx;
    border-radius: 18rpx;
    padding-left: 80rpx;
    padding-right: 30rpx;
    box-sizing: border-box;
    font-size: 24rpx
  }
  .con-sear image{
    width: 40rpx;
    height: 40rpx;
    position: absolute;
    top: 16rpx;
    left: 10rpx;
    margin-left: 64rpx;
  }
  
</style>