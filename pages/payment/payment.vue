<template>
  <view class="container">
    <view class="pay">
      <p class="defalut">支付金额</p>
      <view class="money-box">
        <p class="sign">￥</p>
        <p class="money">{{goodsInfo.productPrice}}</p>
      </view>
    </view>
    <view class="choise">
      <p>选择支付方式</p>
    </view>
    <view class="ways">
      <view class="way"  @click="changeIndex(0)">
        <view class="way-left">
          <image src="../../static/wechat.png" mode=""></image>
          <p>微信支付</p>
        </view>
        <view class="roll" v-if="index==0">
          <view class="roll-inset"></view>
        </view>
      </view>
      <view class="way" @click="changeIndex(1)">
        <view class="way-left">
          <image src="../../static/zhifubao.png" mode=""></image>
          <p>支付宝支付</p>
        </view>
        <view class="roll"  v-if="index==1">
          <view class="roll-inset"></view>
        </view>
      </view>
    </view>
    <view class="determine" @click="payment">
      确定
    </view>
    <!-- <navigator url="" @click="payment">在新窗口中打开company</navigator> -->
    <!-- <web-view src="http://1.12.244.193:8031/pay/alipaytest"> </web-view> -->
  </view>
</template>

<script>
  import {
    mapGetters,mapState
  } from 'vuex'
  export default {
    data() {
      return {
        goodsInfo: {},
        htmlData: {},
        index:0
      }
    },
    mounted() {
      // this.payment()
    },
    computed: {
      ...mapState('m_user',['lock'])
    },
    onLoad(options) {
      const gid = options.gid
      // console.log(gid);
      this.getGoods(gid)
    },
    methods: {
      changeIndex(val){
        this.index = val
      },
      async getGoods(gid) {
        // console.log(gid);
        const {
          data
        } = await this.request({
          url: `/shop/product/getById/${gid}`
        })
        // console.log(data);
        this.goodsInfo = data.product
      },
      async payment() {
        console.log(this.lock);
        const res = await this.request({
          url: "/driver/lock/open",
          data: {
            "machineNumber": "81806104",
            "locker": this.lock
          },
          method:'POST',
          header:{
            "Content-Type": "application/json"
          }
        })
        console.log(res);
        this.addOrder(this.goodsInfo)
        // uni.navigateTo({
        //   url:'/pages/person/person'
        // })
        uni.navigateBack()

      },
      async addOrder(info) {
        console.log(111);
        console.log(info);
        const uId = uni.getStorageSync('uId')
        const res = await this.request({
          url: "/shop/order/add",
          method: 'POST',
          header:{
           "Content-Type":"application/json"
          },
          data: {
            "memberId": uId,
            "totalPrice": info.productPrice,
            "actualPrice": info.productPrice,
            "couponDeduction": 2,
            "orderDescriptions": {
              "productId": info.id,
              "productName": info.productName,
              "productPicture": info.productPicture,
              "productNum": 1
            }
          }
        })
        console.log(222);
        console.log(res);
      }
    },
    computed: {
      // ...mapGetters('m_cart',['checkedCount','total','checkedGoodsAmount']),
    },
    components: {
      // payKeyboard
    }
  }
</script>

<style scoped>
  .container {
    height: 100vh;
    background-color: #efeef4;
  }

  .pay {
    display: flex;
    width: 760rpx;
    height: 300rpx;
    background-color: #fff;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .pay .defalut {
    font-size: 26rpx;
  }

  .money-box {
    margin-top: 20rpx;
    font-weight: 600;
    display: flex;
  }

  .money-box .money {
    font-size: 60rpx;
  }

  .money-box .sign {
    margin-top: 30rpx;
  }

  .choise {
    width: 760rpx;
    height: 55rpx;
    background-color: #fff;
    border-bottom: 4rpx solid #ececec;
  }

  .choise p {
    text-indent: 1em;
  }

  .ways {
    background-color: #fff;
    width: 760rpx;
    border-bottom: 2rpx solid #ececec;
  }

  .way {
    display: flex;
    justify-content: space-between;
    padding: 20rpx 30rpx;
  }

  .way .way-left {
    display: flex;
  }

  .way .way-left image {
    width: 50rpx;
    height: 50rpx;
    margin-right: 10rpx;
  }

  .way .way-left .canuse {
    margin-left: 20rpx;
    font-size: 26rpx;
    color: #eb4958;
    line-height: 46rpx;
  }

  .roll {
    width: 40rpx;
    height: 40rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 2rpx solid #03bdf6;
  }

  .roll .roll-inset {
    width: 20rpx;
    height: 20rpx;
    border-radius: 50%;
    background-color: #03bdf6;
  }

  .determine {
    margin: 0 auto;
    width: 650rpx;
    height: 80rpx;
    margin-top: 60rpx;
    color: #fff;
    font-size: 26rpx;
    line-height: 80rpx;
    border-radius: 40rpx;
    text-align: center;
    background-color: #03bdf6;
  }

  .settingPassword {
    background-color: #4c4c4c;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0;
    top: 0;
    width: 760rpx;
    height: 100vh;
  }

  .setting {
    width: 600rpx;
    border-radius: 20rpx;
    height: 400rpx;
    background-color: #fff;
  }

  .setting .setting-title {
    font-size: 36rpx;
    margin-top: 40rpx;
    text-align: center;
    font-weight: 600;
  }

  .setting .illustrate {
    font-size: 26rpx;
    margin-top: 20rpx;
    color: #03bdf6;
    text-align: center;
  }

  .setting .set,
  .done {
    width: 200rpx;
    height: 60rpx;
    margin: 100rpx auto;
    color: #fff;
    text-align: center;
    line-height: 60rpx;
    font-size: 28rpx;
    background-color: #03bdf6;
    border-radius: 40rpx;
  }
</style>