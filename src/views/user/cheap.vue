<script>
import payHead from '@/components/UserPlug/head.vue'

export default {
  name: 'cheap',
  components: { payHead },
  data () {
    return {
      activeIndex: 0,
      buttonitem: ['未使用', '已使用', '已过期'],
      searchTxt: ''
    }
  },
  methods: {
    activateItem (index) {
      this.activeIndex = index
    }
  }
}
</script>

<template>
  <div class="cheap">
    <payHead>领券中心</payHead>
    <div class="cheapTurn">
      <div class="fist" v-for="(item,index) in buttonitem" :key="index" @click="activateItem(index)" :class="{ active: activeIndex === index }">{{ item }}</div>
    </div>
    <div class="cheapSearch">
      <input type="text"   placeholder="请输入兑换码" v-model="searchTxt" >
      <div class="searchIcon">兑换</div>
    </div>
    <div class="cheapShow">
      <ul>
        <li>
          <div class="quanpc"></div>
          <div class="quantxt">
            竹香乌龙
            <p class="quanclass">餐饮优惠券</p>
            <p class="quantiem">领取后10天可用</p>
            <p class="quanprice">5折</p>
            <p class="bigclass">限定饮品</p>
          </div>
        </li>

      </ul>
    </div>
  </div>
</template>

<style scoped>
.bigclass{
  font-size: 9px;
  text-align: center;
  margin-top: 0px;
  margin-bottom: 0px;
}
.quanprice{
  text-align: center;
  margin-top: 0px;
  margin-bottom: 5px;
}
.quantiem{
  font-size: 8px;
  text-align: center;
  margin-top: 0px;
  margin-bottom: 0px;
}
.quanclass{
  font-size: 6px;
  text-align: center;
  margin-bottom: 0px;
}
.quantxt{
  width: 75px;
  height: 85px;
  position: relative;
  top: -78px;
  left: 270px;
  /* background-color: #fff; */
}
.quanpc{
  width: 200px;
  height: 100px;
  background-image: url(../../assets/user/cheap2.png);
  background-repeat: no-repeat;
  position: relative;
  top: 15px;
  left: 18px;
  border-radius: 10px;
  box-shadow: 0 0 10px #ccc
}
.cheapShow li{
  width: 358px;
  height: 132px;
  background-image: url(../../assets/user/cheap.png);
  background-repeat: no-repeat;
}
.cheapShow{
  width: 90%;
  height: calc(100vh - 200px);
  position: absolute;
  top: 220px;
  left:18px;
  /* background-color: #f7f7f7; */
  overflow: auto;
}
.searchIcon{
  width: 50px;
  height: 30px;
  background-color: #DDAD9E;
  border-radius: 15px;
  text-align: center;
  line-height: 30px;
  color: #f7f7f7;
}
.cheapSearch input{
  width: 70%;
  height: 30px;
  border-radius: 15px;
  border: 1px solid #000;
  background-color: #f7f7f7;
  margin-left: 30px;
  margin-right: 10px;
}
.cheapSearch{
  width: 100%;
  height: 35px;
  position: absolute;
  top: 165px;
  display: flex;
}
.fist{
  margin: 0 40px;
  font-size: 14px;
  color: #FCF5DE;
  width: 80px;
  height: 30px;
  background-color: #DDAD9E;
  text-align: center;
  line-height: 30px;
  border-radius: 15px
}
.active{
  background-color: #AF3723;
  color: #f7f7f7;

}
.cheapTurn{
  width: 100%;
  height: 40px;
  position: absolute;
  top: 115px;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
}

.cheap {
  width: 100%;
  height: 100vh;
  background-image: url(../../assets/user/bgc.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>
