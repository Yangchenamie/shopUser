<template>
  <view class="content">
    <swiper indicator-dots circular autoplay>
      <swiper-item v-for="(item,index) in videoList" :key="index">
        <!-- <image src="../../static/3.png"></image> -->
        <video :src="item[0].playURL" autoplay muted></video>
      </swiper-item>
     <!-- <swiper-item>
        <image src="../../static/3.png"></image>
      </swiper-item>
      <swiper-item>
        <image src="../../static/3.png"></image>
      </swiper-item> -->
    </swiper>
  </view>
</template>

<script>
  export default {
    name:"carousel",
    data() {
      return {
        videoList:[]
      };
    },
    mounted() {
      this.getVideoList()
    },
    methods:{
      async getVideoList(){
        const {data} = await this.request({
          url:"/manage/video/getPlayInfo"
        })
        console.log(111);
        console.log('11111111111',data);
        console.log(111);
        this.videoList = data.list;
        console.log(this.videoList);
      },
    }
  }
</script>

<style scoped lang="less">
.content{
  width: 100%;
& video {
  width: 100%;
}
}
</style>