<template>
  <view class="content">
    <ul>
      <li>
        <view @click="gotoOrder">
          我的订单
        </view>
        <image src="../../static/right.png" mode=""></image>
      </li>
      <li>
        <view @click="gotoSettings">设置</view>
        <image src="../../static/right.png" mode=""></image>
      </li>
    </ul>
  </view>
</template>

<script>
  export default {
    name:"person-con",
    data() {
      return {
        
      };
    },
    methods:{
      gotoSettings(){
        uni.navigateTo({
          url:'../../pages/settings/settings'
        })
      },
      gotoOrder(){
        uni.navigateTo({
          url:'../../pages/order/order'
        })
      }
    }
  }
</script>

<style>
  .content{
    margin-top: 18rpx;
    background-color: #fff;
  }
  ul li{
    display: flex;
    padding:0 70rpx ;
    font-size: 36rpx;
    height: 120rpx;
    align-items: center;
    border-bottom: 2rpx solid #F1F1F1;
    justify-content: space-between;
  }
  ul li image{
    width: 24rpx;
    height: 24rpx;
  }
</style>