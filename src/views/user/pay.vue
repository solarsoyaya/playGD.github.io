<script>
import payHead from '@/components/UserPlug/head.vue'
import { Toast } from 'vant'
export default {
  name: 'Pay',
  components: { payHead },
  data () {
    return {
      items: ['全部', '待支付', '已支付', '待评价'],
      activeIndex: 0,
      PayShow: true
    }
  },
  methods: {
    activateItem (index) {
      this.activeIndex = index
      if (this.activeIndex === 1 | this.activeIndex === 0) {
        this.PayShow = true
      } else {
        this.PayShow = false
      }
    },
    back () {
      Toast.success('支付成功')
      this.$router.push('/user')
    }
  }
}
</script>

<template>
  <div class="divA">
    <payHead>订单管理</payHead>
    <div class="list">
      <div class="item" v-for="(item, index) in items" :key="index" @click="activateItem(index)" :class="{ active: activeIndex === index }">{{ item }}</div>
    </div>
    <div class="PayContent" v-show="PayShow">
      <ul class="PayUl">
        <li class="listItem">
          <div class="listHead">
            <div class="HeadLeft">
              <div class="LeftLogo"></div>
              三日汕头美食之旅
            </div>
            <div class="HeadRight">等待客官支付</div>
          </div>
          <div class="listContent">
            <div class="listpc"></div>
            <div class="sp">
              <ul>
                <li>家庭</li>
                <li>美食</li>
                <li>潮汕</li>
                <li>摄影</li>
              </ul>
            </div>
            <div class="listmoney">
              需要付款 ￥892
              <div class="PayButton" @click="back()">付款</div>
            </div>
          </div>
        </li>

      </ul>
    </div>
  </div>
</template>

<style scoped>
.sp ul{
  width: 100px;
  height: 64px;
  display: flex;
  display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: center;
    align-content: flex-end;
}
.sp li{
  height: 22px;
  width: 40px;
  line-height: 22px;
  font-size: 12px;
  text-align: center;
  background-color: rgba(252,245,222,0.8);
  margin: 5px;
  border-radius: 20px;

}

.listContent .listmoney .PayButton{
  width: 66px;
  height: 30px;
  background-color: #FCF5DE;
  border-radius: 15px;
  position: relative;
  top: 3px;
  left: 10px;
  text-align: center;
  line-height: 30px;
  color: #AF3723;
  font-size: 14px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
}
.listContent .listmoney{
  width: 100px;
  height: 64px;
  position: relative;
  top: 30px;
  font-size: 12px;
}
.listContent .listpc{
  width: 74px;
  height: 74px;
  background-image: url(../../assets//user/tingzi.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: relative;
  left: 15px;
}
.listContent{
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
}
.listHead .HeadRight{
  float: right;
  margin-right: 10px;
  margin-top: 10px;
  color: #AF3723;
}
.HeadLeft .LeftLogo{
  width: 20px;
  height: 20px;
  background-image: url(../../assets/user/tudi.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: relative;
  top: 10px;
  left: 5px;
}
.listHead .HeadLeft{
  width: 60%;
  height:38px;
  float: left;
  text-align: center;
  color: #443F42;
  line-height: 0px;
  font-size: 18px;
}
.PayContent .listHead{
  width: 100%;
  height: 38px;
  /* background-color: rgba(237, 237, 244, 0.2); */

}
.PayContent .listItem{
  width: 360px;
  height: 130px;
  margin: 0 auto;
  margin-top: 20px;
  background-color: rgba(63,63,68,0.3);
  border-radius: 15px;
}
.PayContent .PayUl{
  position: absolute;
  top:40px;
  left: 16px;
}
.PayContent{
  position: absolute;
  top: 120px;
  width: 100%;
  height: 800PX;
  background-image: url(../../assets/user/userinfo.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.active{
  color: #AF3723;
  position: relative;
  top: 110px;
}
.list div{
  /* width: 100px; */
  position: relative;
  top: 110px;
}
.list {
  /* position: absolute; */
  display: flex;
  justify-content: space-around;
  flex-direction: row;
}
.divA {
  width: 100%;
  height: 100vh;
  background-image: url(../../assets/user/bgc.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>
