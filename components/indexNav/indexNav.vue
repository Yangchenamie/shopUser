<template>
  <view class="container">
    <scroll-view scroll-y="true" class="scroll-x">
      <view class="items" :class="active===index?'active':''" v-for="(item,index) in classify" :key="item.id"
        @click="activeChanged(item.id);change(index)">{{item.name}}</view>
    </scroll-view>
    <scroll-view scroll-y class="right-scroll-view">
      <view class="cate-rv-con" v-for="(item,index) in goodsInfo" :key="item.id" @click="show(item.id)">
        <!-- <navigator :url="'/pages/commodityInfo/commodityInfo?gid='+item2.id" class="goods-item"> -->
        <view class="goods-item" @click="showPop()">
          <!-- 商品左侧图片区域 -->
          <view class="goods-item-left">
            <image :src="item.productPicture" class="goods-pic"></image>
          </view>
          <!-- 商品右侧信息区域 -->
          <view class="goods-item-right">
            <!-- 商品标题 -->
            <view class="goods-name">{{item.productName}}</view>

            <!-- 商品价格 -->
            <view class="goods-price">${{item.productPrice}}</view>
            <view class="goods-num">货存：{{item.productStock}} </view>
          </view>
        </view>

      </view>
    </scroll-view>
    <view class="uniPop" ref="uniPop" v-show="flag" id="uniPop" @click="closeMsg">
      <image :src="goods.productPicture" mode=""></image>
      <button @click="gotoBuy(goods.id),closeMsg" id="trueShop">确认购买</button>
    </view>
  </view>

</template>

<script>
  import {mapMutations} from 'vuex'
  export default {
    name: "indexNav",
    props:['lock'],
    data() {
      return {
        active: 0,
        move: 0,
        current: 0,
        flag: false,
        classify: {},
        classify_id: '',
        goodsInfo: {},
        goods: {},
        userInfo: {},
        hasUserInfo: false,
        canIUseGetUserProfile: false,
      };
    },
    mounted() {
      console.log(this.lock);
      this.getClassify()
      this.getGoodsAll(1,this.lock)
    },
    computed:{
     
    },
    methods: {
      ...mapMutations('m_user', ['updateUserInfo']),
      async getClassify(lock) {
        // if(machineNum == null){
        //   machineNum = 81806104
        // }
        const {
          data
        } = await this.request({
          url: `/shop/variety/select/81806104`,

        })
        console.log(data);
        this.classify = data.list
        console.log(this.classify,this.lock);
      },
      activeChanged(i) {
        this.classify_id = i
        console.log('11111', this.classify_id);
        this.getGoodsAll(this.classify_id,this.lock)
      },
      change(index) {
        this.active = index,
          this.current = index
      },
      async getGoodsAll(id,lock) {
        if (id == null) {
          id = 1
        }
        const {
          data
        } = await this.request({
          url: `/shop/product/selectByV/81806104/${id}/${lock}`
        })
        console.log('-------', data);
        this.goodsInfo = data.list
        console.log(this.goodsInfo);
      },
      showPop() {
        this.flag = !this.flag
      },
      closeMsg(e) {
        console.log(e);

        // if (e.target.id != "trueShop") {
          this.flag = false;
        // }
        console.log(this.flag);
      },
      gotoBuy(gid) {
        console.log(211);
        uni.navigateTo({
         url:'../../pages/payment/payment?gid='+gid
        })
      },
      async show(id) {
        const {
          data
        } = await this.request({
          url: `/shop/product/getById/${id}`
        })
        this.goods = data.product
        console.log('11111', this.goods);
      },
    },
  }
</script>

<style>
  .container {
    display: flex;
    position: relative;
    border-top: 18rpx solid #F1F1F1;
  }

  .scroll-x {
    width: 180rpx;
    background-color: #f3f9ff;
    min-height: 50vh;
  }

  .scroll-x .items {
    width: 180rpx;
    text-align: center;
    line-height: 80rpx;
    height: 80rpx;
    font-size: 28rpx
  }

  .active {
    background-color: rgba(217, 217, 217, 0.8);
    font-weight: 600;
  }

  .bread .bread-item {
    padding: 10rpx 20rpx;
    border-radius: 30rpx;
    text-align: center;
    font-size: 28rpx;
    line-height: 20rpx;
    height: 20rpx;
    border: 4rpx solid #999999;
  }

  .bread {
    display: flex;
    flex-flow: wrap;
    margin-bottom: 20rpx;
    padding: 20rpx;
  }

  .bread .bread-item {
    margin-right: 20rpx;
    font-size: 26rpx;
    color: #999999;
  }

  .move {
    background-color: #f3f9ff;
    color: #177FFF;
    border: 4rpx solid #177FFF !important;
  }

  .con-right {
    width: 540rpx;
    margin-left: 20rpx;
  }

  .goods-item {
    display: flex;
    padding: 10px 5px;
    border-bottom: 1px solid #f0f0f0;
  }

  .goods-item-left {
    margin-right: 5px;
  }

  .goods-pic {
    width: 140rpx;
    height: 140rpx;
    display: block;
  }


  .goods-item-right {
    width: 80%;
    font-size: 28rpx;
    position: relative;

  }

  .goods-num {
    font-size: 20rpx;
    margin-top: 100rpx;
  }

  .goods-name {
    transform: translateY(50%);
    margin-top: 26rpx;
    float: left;
    font-size: 28rpx;
  }

  .goods-price {
    transform: translateY(50%);
    margin-top: 26rpx;
    float: left;
    position: absolute;
    right: 30rpx;
  }



  .uniPop {
    /* display: none !important; */
    z-index: 99;
    position: fixed;
    display: block;
    width: 100%;
    height: 500rpx;
    bottom: 0;
    left: 0;
    background-color: #fff;
    border-top-left-radius: 50rpx;
    border-top-right-radius: 50rpx;
  }

  .uniPop image {
    width: 300rpx;
    height: 300rpx;
    transform: translateX(50%);
    margin-left: 75rpx;
    margin-top: 50rpx;
    margin-bottom: 20rpx;
  }

  .uniPop button {
    width: 260rpx;
    height: 120rpx;
    font-size: 50rpx;
    border-radius: 24rpx;
    color: #fff;
    line-height: 120rpx;
    background-color: #E85757;
  }
</style>
