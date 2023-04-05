<template>
  <view class="container">
    <view class="tab">
      可兑换
    </view>
    <view class="content">
      <view class="items" v-show="index != 1 || ishidden == false">
        <view class="con-item">
          <view class="item-top">
            <view class="money">
              ￥5
            </view>
            <view class="text">
              <view class="">
                满30可用
              </view>
              <view class="">
                需花费1200个积分
              </view>
            </view>
               <view class="gotoExchange" @click="show(1)">兑换</view>
          </view>
          <view class="date">
            有效期至2023.03.31 23:59
          </view>
        </view>
      </view>
      <view class="items" v-show="index != 2 || ishidden == false">
        <view class="con-item">
          <view class="item-top">
            <view class="money">
              ￥5
            </view>
            <view class="text">
              <view class="">
                满30可用
              </view>
              <view class="">
                需花费1200个积分
              </view>
            </view>
             <view class="gotoExchange" @click="show(2)">兑换</view>
          </view>
          <view class="date">
            有效期至2023.03.31 23:59
          </view>
        </view>
      </view>
      <view class="items" v-show="index != 3 || ishidden == false">
        <view class="con-item">
          <view class="item-top">
            <view class="money">
              ￥5
            </view>
            <view class="text">
              <view class="">
                满30可用
              </view>
              <view class="">
                需花费1200个积分
              </view>
            </view>
            <view class="gotoExchange" @click="show(3)">兑换</view>
          </view>
          <view class="date">
            有效期至2023.03.31 23:59
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
      index:1,
      ishidden:false
      }
    },
    methods: {
      isExchange(e) {
        uni.showModal({
          content: '是否花费1200个积分兑换',
          confirmText: '确定',
          cancelText: '取消',
          success: (res) => {
            if(res.confirm){
              this.ishidden = true
              console.log(this.ishidden,this.index);
            }
          }
        });
      },
      show(value){
        console.log(this.index);
        console.log('-------');
        this.index = value
        console.log(this.index);
        this.isExchange()
      }
    }
  }
</script>

<style scoped lang="less">
  .container {
    border-top: 18rpx solid #f1f1f1;

    .tab {
      height: 120rpx;
      padding-left: 64rpx;
      padding-top: 50rpx;
      box-sizing: border-box;
      border-bottom: 2rpx solid #f1f1f1;
      font-size: 40rpx;
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
