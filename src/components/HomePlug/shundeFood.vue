<script>
export default {
  name: 'shundeFood',
  props: ['show'],
  data () {
    return {
      isShow: false
    }
  },
  watch: {

    show (newValue, oldValue) {
      if (newValue === '顺德美食') {
        this.isShow = true
      } else {
        this.isShow = false
      }
    }
  },
  methods: {
    send (value) {
      this.$store.commit('setShowList', value)
    }
  }
}
</script>

<template>
  <div class="bg" v-show="isShow">
    <div @click="send('fish')" class="fish"><p>鱼生</p></div>
    <div @click="send('noodles')" class="noodles"><p>热干面</p></div>
    <div @click="send('er')" class="e"><p>烧鹅</p></div>
    <div @click="send('spn')" class="spn"><p>双皮奶</p></div>
    <div @click="send('kuai')" class="kuai"><p>红米肠</p></div>
    <div @click="send('bao')" class="bao"><p>菠萝油</p></div>
  </div>
</template>

<style scoped>
p{
  text-align: center;
  color: wheat;
  top:-30px;
  left: -15px;
  position:absolute;
  width: 19px;
  height: 75px;
  background-color: #AF3723;
  background-size: 100%;
  border-radius: 6px;
  border: 1px solid #FCF5DE;
}
.bao{
  width: 53px;
  height: 48px;
  background-image: url('../../assets/home/food/boluobao.png');
  background-size: cover;
  position: absolute;
  top: 99px;
  left: 143px;
}
.kuai{
  width: 59px;
  height: 44px;
  background-image: url('../../assets/home/food/kuai.png');
  background-size: cover;
  position: absolute;
  top: 635px;
  left: 203px;
}
.spn{
  width: 46px;
  height: 40px;
  background-image: url('../../assets/home/food/shuangpinai.png');
  background-size: cover;
  position: absolute;
  top: 349px;
  left: 162px;
}
.e{
  width: 57px;
  height: 37px;
  background-image: url('../../assets/home/food/shaoer.png');
  background-size: cover;
  position: absolute;
  top: 360px;
  left: 23px;
}
.noodles{
  width: 64px;
  height: 64px;
  background-image: url('../../assets/home/food/aixiganmian.png');
  background-size: cover;
  position: absolute;
  top: 480px;
  left: 182px;
}
.fish{
  width: 44px;
  height: 44px;
  background-image: url('../../assets/home/food/fish.png');
  background-size: cover;
  position: absolute;
  top: 510px;
  left: 38px;
}
</style>
