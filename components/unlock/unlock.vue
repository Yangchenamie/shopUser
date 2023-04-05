<template>
  <view class="con">
    <view class="content">
      <view class="con-item" style="z-index: 999;" @click="getIndex(1)">
        <image src="../../static/GroupOne.png" mode=""></image>
      </view>
      <view class="con-item"  @click="getIndex(2)">
        <image src="../../static/GroupTwo.png" mode=""></image>
      </view>

      <view class="con-item"  @click="getIndex(3)">
        <image src="../../static/GroupThree.png" mode=""></image>
      </view>
      <view class="con-item"  @click="getIndex(4)">
        <image src="../../static/GroupFour.png" mode=""></image>
      </view>
      <view class="con-item"  @click="getIndex(5)">
        <image src="../../static/GroupFive.png" mode=""></image>
      </view>
      <view class="con-item"  @click="getIndex(6)">
        <image src="../../static/GroupSix.png" mode=""></image>
      </view>
    </view>
    <view class="mask" v-if="flag">
      <view class="line">
        <view class="circle">

        </view>
        <view class="border">

        </view>
      </view>
      <view class="tip">
        <view class="triangle">

        </view>
        <view class="tip-text">
          在这里<span class="unclock">
            开锁
          </span>后选择对应商品哟
        </view>
      </view>
      <view class="btn" @click="this.flag = !this.flag">
        知道了
      </view>
    </view>
  </view>
</template>

<script>
  import {mapMutations} from 'vuex'
  export default {
    name: "welcome",
    data() {
      return {
        flag: true,
        index:0
      };
    },
    methods: {
      ...mapMutations('m_user',['updateLock']),
      isshow(){
        this.flag = !this.flag
      },
      getIndex(value){
        this.index = value
        console.log(this.index);
        this.$emit('change',this.index)
        this.updateLock(value)
      },
      // getLock(){
      //   this.$emit('change',this.index)
      // }
    }
  }
</script>

<style scoped lang="less">
  .con {
    position: relative;

    .content {
      display: flex;
      flex-wrap: wrap;
      border-top: 36rpx solid #f1f1f1;
      width: 100%;
      padding: 0 100rpx 50rpx;
      box-sizing: border-box;
      justify-content: space-between;

      .con-item {
        margin-top: 60rpx;

        & image {

          width: 200rpx;
          height: 200rpx;
        }
      }
    }

    .mask {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: rgba(68, 77, 99, 0.58);
      display: flex;
      flex-flow: column;
      padding: 0 100rpx;
      box-sizing: border-box;
      align-items: center;

      & .line {
        display: flex;
        margin-top: 200rpx;
        margin-bottom: 36rpx;
        margin-left: -50rpx;

        & .circle {
          width: 20rpx;
          height: 20rpx;
          background-color: #33487C;
          border-radius: 50%;
          margin-top: -10rpx;
        }

        & .border {
          height: 220rpx;
          width: 64rpx;
          // background-color: #fff;
          border-right: 1px dashed #33487C;
          border-top: 1px dashed #33487C;
        }
      }

      & .tip {
        position: relative;

        & .triangle {
          position: absolute;
          // background-color: #3D66CE;
          top: -64rpx;
          left: 50%;
          margin-left: -16rpx;
          border-top: 32rpx solid transparent;
          border-bottom: 32rpx solid #3D66CE;
          border-left: 32rpx solid transparent;
          border-right: 32rpx solid transparent;
        }

        & .tip-text {
          padding: 30rpx 48rpx;
          background-color: #3D66CE;
          color: #FFFFFF;
          border-radius: 20rpx;

          & .unclock {
            font-size: 48rpx;
          }
        }
      }

      & .btn {
        padding: 20rpx 54rpx;
        color: #FFFFFF;
        font-size: 48rpx;
        border: 2rpx solid #FFFFFF;
        border-radius: 50rpx;
        margin-top: 60rpx;
      }
    }
  }
</style>
