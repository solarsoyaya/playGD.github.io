<script>
import payHead from '@/components/UserPlug/head.vue'
export default {
  name: 'WentPlant',
  components: { payHead },
  methods: {
    gotoShops () {
      this.$router.push('/addShops')
    }
  },
  data () {
    return {
      logoList: [{
        ll: { day: '1', address: '广州 汕头' },
        items: [{ img: require('@/assets/img/samll/cbjd.png'), name: '橙堡酒店', id: 1 },
          { img: require('@/assets/img/samll/hg.png'), name: '牛肉火锅', id: 2 },
          { img: require('@/assets/img/samll/tdh.png'), name: '豆花甜汤', id: 3 },
          { img: require('@/assets/img/samll/xtgx.png'), name: '西提公园', id: 4 },
          { img: require('@/assets/img/samll/yu.png'), name: '阿周鱼生', id: 5 }]
      },
      {
        ll: { day: '2', address: '小公园 金凤坛 存心善堂' },
        items: [
          { img: require('@/assets/img/samll/mian.png'), name: '爱西干面', id: 1 },
          { img: require('@/assets/img/samll/xgy.png'), name: '小公园', id: 2 },
          { img: require('@/assets/img/samll/lsg.png'), name: '汕头消防使馆', id: 3 },
          { img: require('@/assets/img/samll/jft.png'), name: '金凤坛', id: 4 },
          { img: require('@/assets/img/samll/zq.png'), name: '老牌粽球', id: 5 },
          { img: require('@/assets/img/samll/xgt.png'), name: '老妈宫戏台', id: 5 },
          { img: require('@/assets/img/samll/cxst.png'), name: '存心善堂', id: 5 },
          { img: require('@/assets/img/samll/dscf.png'), name: '大树肠粉', id: 5 }
        ]
      },
      {
        ll: { day: '3', address: '石炮台公园 广州' },
        items: [
          { img: require('@/assets/img/samll/guo.png'), name: '鲎粿', id: 2 },
          { img: require('@/assets/img/samll/ptgy.png'), name: '石炮台公园', id: 3 },
          { img: require('@/assets/img/samll/hjsm.png'), name: '蟹黄烧卖', id: 4 },
          { img: require('@/assets/img/samll/sgz.png'), name: '砂锅粥', id: 5 }
        ]
      }],
      showImg: [
        { img: require('@/assets/img/big/hg.png') },
        { img: require('@/assets/img/big/mian.png') },
        { img: require('@/assets/img/big/cf.png') },
        { img: require('@/assets/img/big/xgy.png') }
      ]
    }
  }
}
</script>

<template>
  <div class="wp">
    <payHead>行程预览</payHead>
    <div class="bigPc">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item,index) in showImg"  :key="index"   :style="{ backgroundImage: 'url(' + item.img + ')' }"></van-swipe-item>
      </van-swipe>
    </div>
    <div class="wptxt">
      <p>潮汕胡吃海喝行</p>
      消耗粿条近百万公斤。猪血汤做法简单，但好吃得让人服气。汤里的益母草，在起到平衡汤头油腻的作用的同时，还具有药用价值。
    </div>
    <div class="godan"></div>
    <div class="wpDtail">
      <ul>
        <li v-for="(list, index) in logoList" :key="index">
          <div class="dw"><strong>D{{ list.ll.day }} |</strong> {{list.ll.address}}</div>
          <div class="dwPhotos">
            <div class="bighe"  v-for="(item, itemIndex) in list.items" :key="itemIndex"><div class="he" :style="{ backgroundImage: 'url(' + item.img + ')' }"></div>{{ item.name}}</div>
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
    background-size: 100%;
    background-repeat: no-repeat;
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
  margin-top: 5px;
  font-size: 12px;
  text-align: center;
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
