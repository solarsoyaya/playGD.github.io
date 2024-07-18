<script>
import payHead from '@/components/UserPlug/head.vue'
export default {
  name: 'add',
  components: { payHead },
  data () {
    return {
      index: 0
    }
  },
  methods: {
    change (a) {
      const colorA = this.$refs[a].style.backgroundColor
      if (colorA === 'rgb(221, 173, 158)' | this.index < 3) {
        this.$refs[a].style.backgroundColor = '#AF3723'
      } else {
        this.$refs[a].style.backgroundColor = 'rgb(221, 173, 158)'
      }
      this.index += 1
    },
    went () {
      this.$router.push('/WentPlant')
    }
  }
}

</script>

<template>
  <div class="add">
    <payHead>新增行程</payHead>
    <div class="my-swipe" >
      <van-swipe style="height: 510px;" :show-indicators="false" vertical>
      <van-swipe-item><div class="ast"></div></van-swipe-item>
      <van-swipe-item><div class="ana"></div></van-swipe-item>
      <van-swipe-item><div class="acz"></div></van-swipe-item>
      <van-swipe-item><div class="aeat"></div></van-swipe-item>
      </van-swipe>
    </div>
    <div class="went" @click="went()">go</div>
    <div class="AddChose">
      <div class="nolike"   ref="nolike"  @click="change('nolike')"></div>
      <div class="Addstart" ref="Addstart"  @click="change('Addstart')"></div>
      <div class="like"     ref="like"  @click="change('like')"></div>
    </div>
  </div>

</template>

 <style scoped>
 .add{
  width: 100%;
  height: 100vh;
  /* background-color: #000; */
  background-repeat: no-repeat;
  background-image: url('../../assets/index/bgc1.png');
  background-size: 100%;
 }
 .my-swipe {
    width: 320px;
    height: 500px;
    position: absolute;
    top:148px;
    left: 33px;
  }
  .my-swipe .van-swipe{
    border-radius: 12px;
  }
 .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    /* background-color: #39a9ed; */
    height: 500px;

  }
.ast{
  width: 100%;
  height: 100%;
  background-image: url('../../assets/index/st.png');
  background-size: 100%;
  background-repeat: no-repeat;
}
.ana{
  width: 100%;
  height: 100%;
  background-image: url('../../assets/index/na.png');
  background-size: 100%;
  background-repeat: no-repeat;
}
.acz{
  width: 100%;
  height: 100%;
  background-image: url('../../assets/index/cz.png');
  background-size: 100%;
  background-repeat: no-repeat;
}
.aeat{
  width: 100%;
  height: 100%;
  background-image: url('../../assets/index/eat.png');
  background-size: 100%;
  background-repeat: no-repeat;
}
.active{
  background-color: #fff;
}
.AddChose{
  width: 100%;
  height: 100px;
  position: absolute;
  bottom: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* background-color: #d8b4e0; */
}
.AddChose .nolike{
  background-color: #DDAD9E;
  width: 50px;
  height: 50px;
  background-image: url('../../assets/index/nolike.png');
  background-size: 80%;
  background-repeat: no-repeat;
  border-radius: 50%;
  background-position: 5px 5px;
}
.AddChose .Addstart{
  width: 50px;
  height: 50px;
  background-image: url('../../assets/index/start.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0px -18px;
  background-color: #DDAD9E;
  border-radius: 50%;
}
.AddChose .like{
  background-color: #DDAD9E;
  width: 50px;
  height: 50px;
  background-image: url('../../assets/index/good.png');
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 50%;
  background-position: 9px -18px;
}
.went{
  width: 50px;
  height: 50px;
  background-color: #443F42;
  position: absolute;
  bottom: 150px;
  left: 50%;
  margin-left: -25px;
  border-radius: 50%;
  box-shadow:  2px 2px 2px 2px rgba(218, 195, 195, 0.2);
  color:#ffffff;
  text-align: center;
  line-height: 50px;
  font-size: 20px;
}
</style>
