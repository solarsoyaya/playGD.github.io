<script>
export default {
  name: 'recommend',
  props: ['change', 'food'],
  data () {
    return {
      RecommendList: ['汕头美食', '顺德美食', '清远美食', '客家菜', '广东茶楼', '阳江菜', '潮州美食']
    }
  },
  methods: {
    closeFn () {
      this.$emit('change', 0)
    },
    clickFood (item) {
      this.$emit('food', item)
      // console.log(item)
      setTimeout(() => {
        this.closeFn()
      }, 300)
    }
  }
}
</script>

<template>
  <div class="aroot">
    <div class="navigation">
      <div class="like"></div>
      <div class="good"></div>
      <div class="close" @click="closeFn"></div>
    </div>
    <ul>
      <li v-for="(item, index) in RecommendList" :key="index" @click="clickFood(item)">{{ item }}</li>
    </ul>
  </div>
</template>

<style scoped>
li:hover{
  background-color: #DDAD9E;
}
li{
  width: 71px;
  height: 31px;
  background-color: #FCF5DE;
  border-radius: 5px;
  margin: 10px 10px 0 10px;
  text-align: center;
  line-height: 31px;
  font-size: 12px;
  color: #000;
}
ul{

  display: flex;
  flex-wrap: wrap;
}
.close{
  position:absolute;
  left:167px;
  top: 14px;
  width: 18px;
  height: 18px;
  background-image: url(../../assets/home/x.png);
  background-size: 100% 100%;
}
.good{
  position:absolute;
  left:62px;
  top: 14px;
  width: 32px;
  height: 20px;
  background-image: url(../../assets/home/tuijian.png);
  background-size: 100% 100%;
}
.like{
  position:absolute;
  left:27px;
  top: 14px;
  width: 20px;
  height: 20px;
  background-image: url(../../assets/home/like.png);
  background-size: 100% 100%;
}
.navigation {
  display: flex;
  width: 100%;
  height: 46px;
}
.aroot {
  width: 202px;
  height: 239px;
  background-image: url(../../assets/home/openBgc.png);
  background-size: 100% 100%;
}
</style>
