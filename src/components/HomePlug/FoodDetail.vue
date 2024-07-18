<script>
export default {
  name: 'FoodDetail',

  data () {
    return {
      pc: '',
      pc2: require('../../assets/home/food/big/like2.png'),
      pc1: require('../../assets/home/food/big/xing.png'),
      count: 0
    }
  },
  methods: {
    like () {
      this.count += 1
      if (this.count % 2 === 1) {
        this.pc = this.pc2
      } else {
        this.pc = this.pc1
      }
      this.$refs.start.style.backgroundImage = 'url(' + this.pc + ')'
      this.$store.commit('setCollectionShow', 'a')
      console.log(this.$store.state.collectionShow)
    }
  }

}
</script>

<template>
  <div class="fd" >
    <div class="title" >
      <p class="fp">顺德双皮奶</p>
      <div class="pc"></div>
      <div class="start" @click="like" ref="start"></div>
    </div>
    <div class="content" >
      <div class="t1"><p class="tp">顺德双皮奶始创于清朝末期，当年顺德一位叫何十三的农家子弟，在清晨烹制早餐的时候，不小心在水牛奶里翻了个花样</p> </div>
      <div class="t2"><p class="tp">不久有个识货的老朋友买去了配方，开了间食档。这顺德双皮奶便吃成了传统，而双皮奶也便由清末流传至今。</p></div>
      <div class="t3"><p class="tp">这顺德双皮奶便吃成了传统，而双皮奶也便由清末流传至今。</p></div>
  </div></div>

</template>

<style scope>
@keyframes move{
  0% {
    transform: translateX(736px); /* 在关键帧的开始、中间和结束保持不动 */
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes move2{
  0% {
    transform: translateY(818PX); /* 在关键帧的开始、中间和结束保持不动 */
  }
  100% {
    transform: translateY(-100PX);
  }
}
.content{
  animation: move2 1s ;
}
.t3{
  height: 73px;
  width: 322px;
  position:absolute;
  top:408px;
  left: 0px;
  background-image: url(../../assets/home/food/big/t3.png);
  clip-path: inset(0 40px 0 0);

}
.t2{
  height: 92px;
  width: 322px;
  position:absolute;
  top:300px;
  left: 88px;
  background-image: url(../../assets/home/food/big/t2.png);
  clip-path: inset(0 20px 0 0);

}
.t1{
  height: 100px;
  width: 322px;
  position:absolute;
  top:172px;
  left: 0px;
  background-image: url(../../assets/home/food/big/t1.png);
  clip-path: inset(0 20px 0 0);

}
.tp{
  width: 280px;
  text-align: center;
  line-height: 20px;
  align-items: center;
  color: #4A3328;
}
.start{
  position: absolute;
  left: 355px;
  top:60px;
  width: 32px;
  height: 32px;
  background-image: url(../../assets/home/food/big/xing.png);
  background-size: 100% 100%

}
.fp{
  position: absolute;
  left:70px;
  width: 322px;
  height: 100px;
  background-image: url(../../assets/home/food/big/bg.png);

  font-size: 24px;
  color: black;
  line-height: 100px;
  text-align: center;
  font-weight: bold;
  text-indent: 70px;
}
.pc{
  position: absolute;
  left:52px;
  width: 152px;
  height: 144px;
  background-image: url(../../assets/home/food/big/spn.png);
}
.title{
  width: 100%;
  height: 100px;
  /* background-color: #d15151; */
  display: flex;
  animation: move 1s;

}
.fd{
  position: absolute;
  top:176px;
  width: 100%;
  height: 500px;
  /* background-color: #f26e6e; */
}
</style>
