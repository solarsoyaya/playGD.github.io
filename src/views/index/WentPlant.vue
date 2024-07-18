<script>
import payHead from '@/components/UserPlug/head.vue'
export default {
  name: 'WentPlant',
  components: { payHead },
  methods: {
    gotoShops () {
      this.$router.push('/addShops')
    }
  }
}
</script>

<template>
  <div class="wp">
    <payHead>行程预览</payHead>
    <div class="bigPc">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
    </div>
    <div class="wptxt">
      <p>潮汕胡吃海喝行</p>
      消耗粿条近百万公斤。猪血汤做法简单，但好吃得让人服气。汤里的益母草，在起到平衡汤头油腻的作用的同时，还具有药用价值。
    </div>
    <div class="godan"></div>
    <div class="wpDtail">
      <ul>
        <li>
          <div class="dw"><strong>D1 |</strong> 广州  汕头</div>
          <div class="dwPhotos">
            <div class="bighe"><div class="he"></div>城堡酒店</div>
            <div class="bighe"><div class="he"></div>城堡酒店</div>
            <div class="bighe"><div class="he"></div>城堡酒店</div>
            <div class="bighe"><div class="he"></div>城堡酒店</div>
            <div class="bighe"><div class="he"></div>城堡酒店</div>
          </div>
        </li>
        <li>
          <div class="dw"><strong>D1 |</strong> 广州  汕头</div>
          <div class="dwPhotos">
            <div class="bighe"><div class="he"></div>城堡酒店</div>
            <div class="bighe"><div class="he"></div>城堡酒店</div>

            <div class="bighe"><div class="he"></div>城堡酒店</div>
          </div>
        </li>
        <li>
          <div class="dw"><strong>D1 |</strong> 广州  汕头</div>
          <div class="dwPhotos">
            <div class="bighe"><div class="he"></div>城堡酒店</div>
            <div class="bighe"><div class="he"></div>城堡酒店</div>
            <div class="bighe"><div class="he"></div>城堡酒店</div>

          </div>
        </li>
      </ul>
    </div>
    <div class="buy" @click="gotoShops()"></div>
  </div>
</template>

<style scoped>
.wp{
  width: 100%;
  height: 100vh;
  /* background-color: #000; */
  background-repeat: no-repeat;
  background-image: url('../../assets/index/bgc1.png');
  background-size: 100%;
}
.bigPc{
  width: 350px;
  height: 216px;
  position: absolute;
  top: 110px;
  left: 21px;
  border-radius: 10px;
}
.my-swipe{
  width: 350px;
  height: 216px;
  border-radius: 10px;
}
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
}
.wptxt{
  position: absolute;
  top: 318px;
  left: 21px;
  height: 120px;
  width: 90%;
  /* background-color: #a74a4a; */
  text-align: center;
  color: #251111;
}
.wptxt p{
  color: #431919;
  font-size: 18px;
  font-weight: bold;
}
.godan{
  position: absolute;
  top: 450px;
  left: 21px;
  width: 62px;
  height: 24px;
  background-image: url('../../assets/index/godan.png');
  background-size: 100%;
  background-repeat: no-repeat;
}
.buy{
  width: 50px;
  height: 50px;
  position: absolute;
  top: 747px;
  left: 310px;
  background-image: url('../../assets/index/buy.png');
  background-size: 100%;
  background-repeat: no-repeat;
}
.wpDtail{
  position: absolute;
  top: 480px;
  left: 21px;
  width: 350px;
  height: 360px;
  /* background-color: #bd6c6c; */
  border-radius: 10px;
}
.wpDtail ul{
  width: 100%;
  height: 100%;
  overflow: auto;
}
.wpDtail li{
  width: 100%;
  background-color: rgba(252,245,222,0.9);
  border-radius: 12px;
  margin-bottom: 10px;
}
.dw{
  height: 30px;
  /* background-color: #ad8eef; */
  text-align: left;
  font-size: 14px;
  line-height: 30px;
  text-indent: 10px;
}
.dwPhotos{
  width: 100%;
  /* background-color: #d75050; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
}
.bighe{
  width:70px;
  height: 60px;
  margin-left: 10px;
}
.he{
  width: 40px;
  height: 40px;
  background-image: url('../../assets/index/he.png');
  background-size: 100%;
  background-repeat: no-repeat;
  position: relative;
  left: 10px;
}
</style>
