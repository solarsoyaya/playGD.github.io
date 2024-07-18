<script>
import payHead from '@/components/UserPlug/head.vue'
export default {
  name: 'purse',
  components: { payHead },
  data () {
    return {
      quanPhoto: ['餐饮票', '旅游票', '门票', '车票'],
      quanList: [
        { name: '竹香乌龙', time: '10', bigclass: '限定饮品', smallclass: '餐饮', price: '5', img: require('@/assets/img/quan/cheap2.png') },
        { name: '坚记大排档', time: '10', bigclass: '限定菜品', smallclass: '餐饮', price: '6', img: require('@/assets/img/quan/dpd.png') },
        { name: '天香茗阁', time: '10', bigclass: '限定饮品', smallclass: '餐饮', price: '8', img: require('@/assets/img/quan/txmg.png') }
      ],
      activeIndex: 0,
      isQuanShow: true

    }
  },
  methods: {
    activateItem (index) {
      this.activeIndex = index
      // console.log(this.activeIndex)
      if (this.activeIndex === 0) {
        this.PayShow = true
        this.isQuanShow = true
      } else {
        this.PayShow = false
        this.isQuanShow = false
      }
    }
  }
}
</script>

<template>
  <div class="purse">
    <payHead>我的荷包</payHead>
    <div class="pursecart">
      <div class="purseUp">
        <div class="purseTx"></div>
        <div class="pursePoints">
          总积分<br>
          <p>520</p>
        </div>
      </div>
      <div class="purseDump">
        <div class="yh">
          优惠卷(张)<br>
          <p>10</p>
        </div>
        <div class="th">
          积分可兑换(张)<br>
          <p>3</p>
        </div>
      </div>
      <div class="purseLeft">
        <div class="qiandao">
          今日签到收益<br>
          <p>0</p>
        </div>
        <div class="work">
          完成任务收益<br>
          <p>12</p>
        </div>
        <div class="look">查看明细</div>
      </div>
    </div>
    <div class="quan">
      我的优惠券
      <div class="quanPhoto">
        <ul>
          <li v-for="(item,index) in quanPhoto" :key="index" > <div class="pic" @click="activateItem(index)" :class="{ active: activeIndex === index }"></div> {{ item }}</li>
        </ul>
      </div>
    </div>
    <div class="quanShow" v-show="isQuanShow">
      <ul>
        <li v-for="(item,index) in quanList" :key="index">
          <div class="quanpc" :style="{ backgroundImage: 'url(' + item.img + ')' }"></div>
          <div class="quantxt">
            {{item.name}}
            <p class="quanclass">{{item.smallclass}}优惠券</p>
            <p class="quantiem">领取后{{item.time}}天可用</p>
            <p class="quanprice">{{item.price}}折</p>
            <p class="bigclass">{{item.bigclass}}</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="nofound" v-show="!isQuanShow"></div>
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
  top: -82px;
  left: 270px;
  font-size: 15px;
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
.quanShow li {
  width: 358px;
  height: 132px;
  background-image: url(../../assets/user/cheap.png);
  background-repeat: no-repeat;
  /* margin: 5px; */
}
.quanShow ul{
  /* align-items: center; */
  height: 390px;

}
.quanShow{
  width: 356px;
  height: 390px;
  position: absolute;
  top: 450px;
  left: 18px;
  font-size: 16px;
  overflow: auto;
}
.pic{
  width: 50px;
  height: 50px;
  background-color: #DDAD9E;
  background-image: url(../../assets/user/quantu.svg);
  background-repeat: no-repeat;
  background-size: 70%;
  background-position: center center;
  border-radius: 50%;
}
.active{
  width: 50px;
  height: 50px;
  background-color: #AF3723;
  background-image: url(../../assets/user/quantu.svg);
  background-repeat: no-repeat;
  background-size: 70%;
  background-position: center center;
  border-radius: 50%;
}
.quanPhoto li{
  position: relative;
  top: 20px;
  text-align: center;
}
.quanPhoto ul{
  display: flex;
  justify-content: space-around;
}
.quanPhoto{
  width: 100%;
  height: 140px;
}
.quan{
  width: 356px;
  height: 140px;
  position: absolute;
  top: 310px;
  left: 18px;
  font-size: 16px;
}
.look{
  width: 60px;
  height: 24px;
  font-size: 11px;
  margin-top: -5px;
  margin-left: 22px;
  background-color: #FCF5DE;
  text-align: center;
  line-height: 24px;
  border-radius: 15px;
}
.purseLeft p{
  text-align: center;
  font-weight: bold;
  margin-top: 10px;
}
.purseLeft{
  position: absolute;
  height: 150px;
  top: 30px;
  left: 255px;
  color: #000000;
  /* font-size: 18px; */
  /* line-height: 10px */
}
.purseDump p{
  font-size: 25px;
  text-align: center;
  font-weight: bold;
  margin-top: 12px;

}
.th{
  margin: 15px;
  position: relative;
  left: 10px;
}
.yh{
  margin: 15px;
  position: relative;
  left: 10px;
}
.pursePoints p{
  font-size: 30px;
  text-indent: 20px;
  color: #000000;
}
.pursePoints{
  position: relative;
  top: 20px;
  left: 20px;
  color: #000000;
  font-size: 18px;
  line-height: 10px;
}
.purseDump{
  height: 50%;
  width: 70%;
  display: flex;
}
.purseUp{
  height: 50%;
  width: 70%;
  display: flex;
}
.purseTx{
  width: 65px;
  height: 65px;
  background-image: url(../../assets/user/tx.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: relative;
  top: 10px;
  left: 10px;
}
.pursecart{
  width: 356px;
  height: 191px;
  background-image: url(../../assets/user/pursecart.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: absolute;
  top: 107px;
  left:18px;
}
.purse{
  width: 100%;
  height: 100vh;
  background-image: url(../../assets/user/bgc.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.nofound{
  width: 177px;
  height: 369px;
  background-image: url(../../assets/img/toast/NoQuan.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: absolute;
  bottom: 20px;
  left: 106px;
}
</style>
