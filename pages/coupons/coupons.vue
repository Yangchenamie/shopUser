<template>
  <view class="container">
    <view class="con-tab">
      <ul>
        <li :class="flag == true ? 'active' : 'llll'" @click="changeTrue">有效券</li>
        <li :class="flag == false ? 'active' : ''" @click="changeFalse">已使用</li>
      </ul>
    </view>

    <view v-if="flag">
      <view class="content">
        <view class="items">
          <view class="con-item">
            <view class="item-top">
              <view class="money">
                ￥5
              </view>
              <view class="text">
                满30可用
              </view>
              <view class="gotoExchange" @click="gotoUse">去使用</view>
            </view>
            <view class="date">
              有效期至2023.03.31 23:59
            </view>
          </view>
        </view>
        <view class="items">
          <view class="con-item">
            <view class="item-top">
              <view class="money">
                ￥5
              </view>
              <view class="text">
                满30可用

              </view>
              <view class="gotoExchange" @click="gotoUse">去使用</view>
            </view>
            <view class="date">
              有效期至2023.03.31 23:59
            </view>
          </view>
        </view>
      </view>
    </view>
    <view v-else>
      122
    </view>
  </view>

</template>

<script>
  export default {
    data() {
      return {
        flag: true,
      }
    },
    mounted() {

    },
    methods: {
      changeFalse() {
        this.flag = false
        console.log(this.flag);
      },
      changeTrue() {
        this.flag = true;
        console.log(this.flag);
      },
      gotoUse(){
        uni.navigateTo({
          url:'/pages/index/index'
        })
      }

    },
    components: {

    }
  }
</script>

<style scoped lang="less">
  .container {
    border-top: 18rpx solid #f1f1f1;

    & .con-tab {
      width: 100%;
      border-top: 9px solid #F1F1F1;
      padding-left: 64rpx;
      padding-top: 54rpx;
      box-sizing: border-box;
      height: 116rpx;
      line-height: 50rpx;
      border: 2rpx solid #F1F1F1;

      & ul {
        display: flex;

        & li {
          color: #848484;
          margin-right: 31px;
        }

        & .active {
          font-size: 40rpx;
          color: #000;
        }
      }
    }

    & .content {
      padding: 0 40rpx;

      & .items {
        width: 100%;
        height: 200rpx;
        border-top-right-radius: 60rpx;
        border-bottom-left-radius: 60rpx;
        background-color: #1296DB;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
        margin: 30rpx 0;

        & .con-item {
          position: relative;
          float: right;
          width: 95%;
          height: 100%;
          background-color: #fff;
          border-top-right-radius: 60rpx;
          border-bottom-left-radius: 60rpx;

          & .item-top {
            padding: 0 40rpx;
            display: flex;
            align-items: center;
            justify-content: space-between;
            transform: translateY(50%);

            & .money {
              font-size: 72rpx;
            }

            & .gotoExchange {
              color: #FFFFFF;
              padding: 10rpx 38rpx;
              background-color: #1296DB;
              border-radius: 33px;
            }
          }

          & .date {
            float: right;
            font-size: 26rpx;
            // margin-right: 20rpx;
            position: absolute;
            bottom: 0;
            right: 20rpx;
          }
        }
      }
    }
  }
</style>
