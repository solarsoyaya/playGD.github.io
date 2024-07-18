<script>
import recommend from '@/components/HomePlug/recommend.vue'
import search from '@/components/HomePlug/searchA.vue'
import collection from '@/components/HomePlug/collection.vue'
import shundeFood from '@/components/HomePlug/shundeFood.vue'
import FoodDetail from '@/components/HomePlug/FoodDetail.vue'
export default {
  components: { recommend, search, collection, shundeFood, FoodDetail },
  name: 'MyHome',
  data () {
    return {
      active: true,
      food: 'aa',
      detailShow: false
    }
  },
  methods: {
    change (index) {
      if (index === 1) {
        this.active = false
      } else {
        this.active = true
      }
    },
    showfood (item) {
      this.$store.commit('updateFood', item)
      this.food = item
    },
    a () {
      this.detailShow = false
      this.food = '顺德美食'
    }

  },
  watch: {
    '$store.state.showList': function (newVal) {
      if (newVal === 'spn') {
        this.showfood('')
        this.detailShow = true
      } else {
        this.detailShow = false
      }
    }
  }
}

</script>

<template>
  <div class="root">
    <div class="back" @click="$router.go(0)"></div>
    <FoodDetail v-if="detailShow" v-clickout="a"></FoodDetail>
    <collection></collection>
    <shundeFood :show="food"></shundeFood>
    <search></search>
    <div class="recommend" v-show="active" @click="change(1)"></div>
    <div class="lip" v-show="!active" ><recommend @change="change"  @food="showfood"></recommend></div>
    <div class="footer_wrap">
      <router-link to="/index" class="one"></router-link>
      <router-link to="/home" class="two"></router-link>
      <router-link to="/user" class="three"></router-link>
  </div>
  </div>
</template>

<style  scoped>
@keyframes bounce {
  0% {
    transform: translateX(-205px); /* 在关键帧的开始、中间和结束保持不动 */
  }
  70% {
    transform: translateX(0px);
  }
  85%{
      transform: translateX(-15px);
  }
  100% {
    transform: translateX(-5px);
  }
}
.back{
  width: 37px;
  height: 37px;
  position: absolute;
  top: 17px;
  left: 1%;
  background-image: url(../../assets/home/back.png);
  background-size: 100% 100%;
}
.lip{
  width: 0;
  height: 240px;
  position: absolute;
  top: 13%;
  left: 0;
  animation: bounce 0.7s ; /* 添加动画效果，持续时间为2秒，无限次重复 */
}
.recommend{
  width: 32px;
  height: 239px;
  position: absolute;
  top: 13%;
  left: 0;
  background-image: url(../../assets/home/recommend.png);
  background-size: 100% 100%
}
.one{
  padding: 17%;
}
.two{
  padding: 20%;
}
.three{
  padding: 20%;
}
.footer_wrap{
  width: 98%;
  height: 82px;
  position: absolute;
  bottom: 1%;
  left: 1%;
  right:2vh;
  background-image: url('../../assets/dhl.png');
  background-size: 100%;
}
.root{
  width: 100%;
  height: 100vh;
  /* background-color: #000; */
  background-repeat: no-repeat;
  background-image: url('../../assets/bgi.png');
  background-size: 100%;
  position: relative;
}
</style>
