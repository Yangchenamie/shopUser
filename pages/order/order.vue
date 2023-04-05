<template>
  <view class="content">
    <view class="con-tab">
      <ul>
        <li  :class="flag == true ? 'active' : 'llll'" @click="changeTrue">全部订单</li>
        <li :class="flag == false ? 'active' : ''" @click="changeFalse">待评价</li>
      </ul>
    </view>
    <view class="con-item">
      <view v-if="flag">
        <orderAlll :orderList="orderList"></orderAlll>
      </view>
      <view v-else>
        <Comment :commentList="commentList"></Comment>
      </view>
    </view>
  </view>
</template>

<script>
  import orderAlll from '../../components/orderAlll/orderAlll.vue'
  import Comment from '../../components/Comment/Comment.vue'
  export default {
    data() {
      return {
        flag: true,
        orderList:[],
        commentList:[]
      }
    },
    mounted() {
      const UId = uni.getStorageSync('uId')
      this.getOrderList(UId)
    },
    methods: {
      changeFalse() {
        this.flag = false
        console.log(this.flag );
      },
      changeTrue(){
        this.flag = true;
        console.log(this.flag);
      },
      async getOrderList(UId){
        const {data} = await this.request({
          url:`/shop/order/select/${UId}`
        })
        console.log(data);
        this.orderList = data.order
        // if(data.order)productEvaluate.star
        
        for(var i = 0;i<data.order.length;i++){
          console.log(i,data.order[i]);
          if(data.order[i].productEvaluate[0] == null){
            this.commentList.push(data.order[i])
          }
          else if(data.order[i].productEvaluate[0].star == null ){
             this.commentList.push(data.order[i])
          }
        }
        console.log(this.commentList);
        // commentList
      }
      
    },
    components: {
      orderAlll,
      Comment
    }
  }
</script>

<style scoped lang="less">
  body {
    background-color: #F1F1F1;
  }

  .content {
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

  }
</style>
