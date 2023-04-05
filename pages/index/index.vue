<template>
  <view class="content">
    <carousel></carousel>
    <view class="" v-if="lock == 0">
      <welcome></welcome>
      <unlock @change="getIndex($event)"></unlock>
    </view>
    <view class="" v-else>
      <welcome></welcome>
      <search></search>
      <indexNav :lock="lock"></indexNav>
    </view>
    <!-- <uniPop></uniPop> -->
  </view>
</template>

<script>
  import carousel from '../../components/carousel/carousel.vue';
  import search from '../../components/search/search.vue'
  import indexNav from '../../components/indexNav/indexNav.vue'
  // import uniPop from '../../components/uniPop/uniPop.vue'
  import welcome from '../../components/welcome/welcome.vue'
  import unlock from '../../components/unlock/unlock.vue'
    import {mapMutations,mapState} from 'vuex'
  export default {
    data() {
      return {
        lock:0
      }
    },
    mounted() {
      if(!uni.getStorageSync('token')){
        this.getUserProfile() 
      }
             
    },
    methods: {
      // gotoSearch(){
      //   console.log(1);
      //   uni.navigateTo({
      //     url:'/search/search'
      //   })
      // }
      ...mapMutations('m_user', ['updateUserInfo','updateToken','updateUId']),
      getUserProfile() {
        uni.showModal({
          title: '提示',
          content: "是否授权登录",
          success: (res) => {
            uni.getUserProfile({
              desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
              success: (res) => {
                console.log('222222222222', res);
                this.updateUserInfo(res.userInfo)
                this.getToken(res)
              },
              fail: (res) => {
                console.log('333333', res);
              }
            })
          },
          fail: () => {
            uni.showToast({
              title: '您取消了授权',
              icon: "error",
            })
          }
        })
      },
      async getToken(info) {
        const [err, res] = await uni.login().catch(err => err)
        if (res.errMsg !== "login:ok") return uni.$showMsg('登录失败！123')
        console.log('22', info);
        console.log('33', res);
        const {
          data
        } = await
        this.request({
          url: "/shop/member/login",
          data:{
            code:res.code,
            rawData: info.rawData,
            signature: info.signature
          },
          header:{
            'Content-Type': 'application/json',

          },
          method: 'POST'
        })
        console.log(data);
        this.updateToken(data.token)
        this.getUId()
      },
      async getUId(){
        const{data} = await this.request({
          url:"/shop/member/getLoginInfo",
          header:{
            'token':uni.getStorageSync('token')
          }
        })
        console.log(data);
        this.updateUId(data.user.id)
        uni.navigateTo({
          url:'../register/register'
        })
      },
      getIndex(value){
        console.log(value);
        this.lock = value
      }
    },
    components: {
      carousel,
      search,
      indexNav,
      welcome,
      unlock
    },
    computed:{
      ...mapState('m_user',['token'])
    }
  }
</script>

<style>
  /* .content{
  position: relative;
} */
</style>
