<script>
import payHead from '@/components/UserPlug/head.vue'
export default {
  name: 'addShops',
  components: { payHead },
  methods: {
    goPay () {
      this.$router.push('/pay')
    }
  },
  data () {
    return {
      piaoList: [
        { img: require('@/assets/img/samll/mian.png'), name: '爱西干面', id: 1 },
        { img: require('@/assets/img/samll/dscf.png'), name: '红米肠', id: 2 },
        { img: require('@/assets/img/samll/tdh.png'), name: '豆花甜汤', id: 3 },
        { img: require('@/assets/img/samll/zq.png'), name: '老牌粽球', id: 4 },
        { img: require('@/assets/img/samll/yu.png'), name: '阿周鱼生', id: 5 },
        { img: require('@/assets/img/samll/hg.png'), name: '牛肉火锅', id: 5 },
        { img: require('@/assets/img/samll/hjsm.png'), name: '蟹黄烧卖', id: 5 },
        { img: require('@/assets/img/samll/guo.png'), name: '鲎粿', id: 5 },
        { img: require('@/assets/img/samll/sgz.png'), name: '砂锅粥', id: 5 }
      ],
      list: [
        { img: require('@/assets/img/piao/piao1.png') },
        { img: require('@/assets/img/piao/piao2.png') },
        { img: require('@/assets/img/piao/piao3.png') },
        { img: require('@/assets/img/piao/piao4.png') }

      ]
    }
  }
}
</script>

<template>
  <div class="addShops">
    <payHead>票据浏览</payHead>
    <div class="piao">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" :show-indicators="false">
        <van-swipe-item v-for="(item, index) in list" :key="index"><div class="pp" :style="{ backgroundImage: 'url(' + item.img + ')' }"></div></van-swipe-item>
      </van-swipe>
    </div>
    <div class="piaologo"></div>
    <div class="piaoshow">
      <ul>
        <li class="All" v-for="(item,index) in piaoList" :key="index"><div class="ppc" :style="{ backgroundImage: 'url(' + item.img + ')' }"></div><p>{{ item.name }}</p></li>
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
