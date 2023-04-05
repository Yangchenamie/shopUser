<template>
  <view class="con">
    <view class="con-item" v-for="(item,index) in reverseOrderList" :key="index">
      <view class="item-fl">
        <view class="orderNum">
          机器编号: {{item.orderNumber}}
        </view>
        <view class="product">
          <view class="productName">
            {{item.orderDescriptions[0].productName}}
          </view>
          <view class="productNum">
            共1件商品
          </view>
        </view>
        <view class="time">
          {{item.gmtCreate}}
        </view>
      </view>
      <view class="item-fr">
        <view class="">
          订单已完成 >
        </view>
        <view class="money">
          ${{item.totalPrice}}
        </view>
        <view class="comment">
          <view class="" v-if="item.productEvaluate[0].star">
            <image src="/static/star.png" mode=""></image>
            <image src="/static/star.png" mode=""></image>
            <image src="/static/star.png" mode=""></image>
            <image src="/static/star.png" mode=""></image>
            <image src="/static/star.png" mode=""></image>
          </view>
          <view class="" v-else>
            立即评价
          </view>
        </view>

      </view>
    </view>
  </view>
</template>

<script>
  export default {
    props: ["orderList"],
    name: "orderAlll",
    data() {
      return {

      };
    },
    mounted() {
      // console.log(orderList);
    },

    computed: {
      reverseOrderList() {
        return this.orderList.reverse();
      }
    },
    methods: {

    }
  }
</script>

<style lang="less">
  .con {

    // padding-left: 64rpx;
    // padding-right: 56rpx;
    // box-sizing: border-box;
    & .con-item {
      display: flex;
      height: 250rpx;
      justify-content: space-between;
      font-size: 28rpx;
      padding: 44rpx 56rpx 0 64rpx;
      box-sizing: border-box;
      border-bottom: 2rpx solid #F1F1F1;

      & .item-fl {
        display: flex;
        flex-flow: column;
        align-items: flex-start;

        // align-content: space-around;
        & .orderNum {
          width: 400rpx;
          overflow: hidden;
          // height: 37rpx;
          white-space: nowrap;
          text-overflow: ellipsis;

        }

        & .product {
          display: flex;
          margin: 15rpx 0;

          & .productName {
            width: 200rpx;
            overflow: hidden;
            margin-right: 40rpx;
          }

          & .productNum {
            color: #B7B5B5;
          }
        }

        & .time {
          font-size: 20rpx;
          color: #808080;
        }
      }

      & .item-fr {
        & .money {
          margin: 15rpx 0;
        }

        & .comment {
          display: flex;
          width: 170rpx;
          height: 56rpx;

          // padding:10rpx 30rpx ;
          background-color: rgba(103, 146, 255, 0.7);
          border-radius: 40rpx;
          align-items: center;
          // text-align: center;
          justify-content: space-evenly;

          & image {
            width: 22rpx;
            height: 22rpx;
          }
        }
      }
    }
  }
</style>