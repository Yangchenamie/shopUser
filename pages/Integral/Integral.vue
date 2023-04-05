<template>
  <view class="container">
    <view class="header">
      <view class="conut">
        <view class="num">
          5280
        </view>
        <view class="">
          我的积分
        </view>
      </view>
      <view class="exchange" @click="gotoExchange">兑换优惠券</view>
    </view>
    <view class="content">
      <view class="title">
        积分明细
      </view>
      <view class="con">
        <view class="item">
          <view class="item-fl">
            <image src="../../static/jifen.png" mode=""></image>
            <view class="item-text">
              <view class="">
                广告积分
              </view>
              <view class="date">
                01-02 10:33
              </view>
            </view>
          </view>
          <view class="item-fr">
            +300
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods: {
      gotoExchange(){
        uni.navigateTo({
          url:'/pages/exchange/exchange'
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .container {
    border-top: 18rpx solid #f1f1f1;

    & .header {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      border-bottom: 2rpx solid #F1F1F1;
      height: 286rpx;

      & .conut {
        display: flex;
        flex-flow: column;

        & .num {
          color: #E03030;
          font-size: 72rpx;
        }
      }

      & .exchange {
        padding: 20rpx 54rpx;
        border: 2rpx solid #A53131;
      }
    }

    & .content {
      & .title {
        padding-left: 20rpx;
        height: 82rpx;
        line-height: 82rpx;
        border-bottom: 2rpx solid #F1F1F1;
      }

      & .con {
        & .item {
          padding: 0 74rpx;
          display: flex;
          font-size: 28rpx;
          justify-content: space-between;
          height: 140rpx;
          align-items: center;
          border-bottom:2rpx solid #F1F1F1;

          & .item-fl {

            display: flex;

            & image {
              width: 46rpx;
              height: 46rpx;
            }

            & .item-text {
              padding-left: 20rpx;

              & .date {
                font-size: 20rpx;
                color: #808080;
                margin-top: 15rpx;
              }
            }

          }
          & .item-fr{
            color: #E03030;
          }
        }
      }
    }
  }
</style>
