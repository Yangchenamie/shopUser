<template>
  <view class="content">
    <view class="content-header">
      <view class="con-left"  @click="preview">
        <img :src="avatarurl" alt="">
      </view>
      <view class="con-right">
        <view class="con-name">
          {{nickname}}
        </view>
      </view>
    </view>
    <view class="content-icon">
      <view class="icon-fl" @click="gotoCoupons">
        <image src="../../static/money.png" alt="">
          <view class="">优惠卷</view>
      </view>
      <view class="icon-fr" @click="gotoIntergral">
        <image src="../../static/jifen.png" mode=""></image>
        <view class="">积分</view>
      </view>
    </view>
  </view>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name:"person-header",
    data() {
      return {
        
      };
    },
    computed:{
      ...mapState('m_user',['avatarurl','nickname'])
    },
    methods:{
      gotoCoupons(){
        uni.navigateTo({
          url:'/pages/coupons/coupons'
        })
      },
      gotoIntergral(){
        uni.navigateTo({
          url:'/pages/Integral/Integral'
        })
      },
      preview(){
        const imgUrl = uni.getStorageSync('avatarurl')
        let imgList=[];
        imgList.push(imgUrl)
        console.log(imgList);
        uni.previewImage({
          current:0,
          urls:imgList,
        })
        console.log(2222222);
      },
    }
  }
</script>

<style>
  .content-header{
    padding-left: 80rpx;
    padding-top: 20rpx;
    width: 100%;
    height: 260rpx;
    display: flex;
    background-color: #6792FF;
    box-sizing: border-box;
  }
  .con-left {
    margin-right: 34rpx;
  }
  
  .con-left image{
    width: 130rpx;
    height: 130rpx;
    border-radius: 50%;
  }
  .con-right{
    display: flex;
    flex-flow: column;
    line-height: 56rpx;
    padding-top: 10rpx;
  }
  .con-name{
    font-size: 40rpx;
    margin-top: 25rpx;
  }
  .content-icon{
    margin-top: -40rpx;
    width: 100%;
    height: 160rpx;
    display: flex;
    justify-content: space-around;
    background-color: #fff;
    border-top-left-radius: 32rpx;
    border-top-right-radius: 32rpx;
    font-size: 36rpx;
    padding-top: 40rpx;
  }
  .content-icon image{
    width: 60rpx;
    height: 60rpx;
  }
  .icon-fl{
    display: flex;
    align-items: center;
    flex-flow: column;
  }
</style>