<script>
import payHead from '@/components/UserPlug/head.vue'
export default {
  name: 'addShops',
  components: { payHead },
  methods: {
    goPay () {
      this.$router.push('/pay')
    }
  }
}
</script>

<template>
  <div class="addShops">
    <payHead>票据浏览</payHead>
    <div class="piao">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" :show-indicators="false">
        <van-swipe-item><div class="pp"></div></van-swipe-item>
        <van-swipe-item><div class="pp"></div></van-swipe-item>
        <van-swipe-item><div class="pp"></div></van-swipe-item>
        <van-swipe-item><div class="pp"></div></van-swipe-item>
      </van-swipe>
    </div>
    <div class="piaologo"></div>
    <div class="piaoshow">
      <ul>
        <li class="All"><div class="ppc"></div><p>爱希干面</p></li>
        <li class="All"><div class="ppc"></div><p>爱希干面</p></li>
        <li class="All"><div class="ppc"></div><p>爱希干面</p></li>
        <li class="All"><div class="ppc"></div><p>爱希干面</p></li>
        <li class="All"><div class="ppc"></div><p>爱希干面</p></li>
      </ul>
    </div>
    <div class="when" @click="goPay()"></div>
  </div>
</template>

<style scoped>
.addShops{
  width: 100%;
  height: 100vh;
  /* background-color: #000; */
  background-repeat: no-repeat;
  background-image: url('../../assets/index/bgc1.png');
  background-size: 100%;
}
.piao{
  width: 100%;
  height: 410px;
  position: absolute;
  top: 150px;
}
.piao .my-swipe{
  height: 410px;
}
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    /* background-color: #39a9ed; */
  }
.pp{
  width: 273px;
  height: 410px;
  background-image: url(../../assets/index/tianxiang.png);
  background-size: 100%;
  background-repeat: no-repeat;
  position: relative;
  left: 60px;
}
.piaologo{
  width: 80px;
  height: 24px;
  background-image: url(../../assets/index/piaolook.png);
  background-size: 100%;
  background-repeat: no-repeat;
  position: absolute;
  top: 590px;
  left: 25px;
}
.piaoshow{
  width: 85%;
  height: 200px;
  position: absolute;
  top: 630px;
  left: 25px;
  overflow: auto;
}
.piaoshow ul {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  overflow: auto;
}
.All{
  width: 70px;
  height: 65px;
  /* background-color: #3296aa; */
  margin-bottom: 20px;
  margin-right: 10px;
}
.All .ppc{
  width: 50px;
  height: 50px;
  background-color: #DDAD9E;
  border-radius: 12px;
  background-image: url(../../assets/index/mian.png);
  background-size: 100%;
  background-repeat: no-repeat;
}
.All p{
  font-size: 12px;
  color: #333333;
  text-align: center;
  margin-left: -20px;
}
.when{
  width: 50px;
  height: 50px;
  background-image: url(../../assets/index/when.png);
  background-size: 100%;
  background-repeat: no-repeat;
  position: absolute;
  top: 760px;
  right: 30px;
}
</style>
