<script>
export default {
  name: 'MyUser',
  data () {
    return {
      FnList: [
        { name: '我的订单', icon: require('../../assets/user/dingdang.png'), path: 'pay' },
        { name: '我的荷包', icon: require('../../assets/user/qianbao.png'), path: 'purse' },
        { name: '领券中心', icon: require('../../assets/user/quan.png'), path: 'cheap' },
        { name: '收藏路线', icon: require('../../assets/user/collection.png'), path: 'plant' },
        { name: '收藏店铺', icon: require('../../assets/user/love.png'), path: 'shops' }

      ]
    }
  },
  methods: {
    FnClick (item) {
      this.$router.push('/' + item)
    },
    back () {
      this.$router.push('/home')
    },
    updateInfo () {
      this.$router.push('/userinfo')
    }
  }
}
</script>

<template>
  <div class="root">
    <div class="head">
      <div class="back" @click="back"></div>
      <h2>我的</h2>
      <div class="setting"></div>
    </div>
    <div class="info">
        <div class="tx" @click="updateInfo"></div>
        <div class="name">吃一碗肉</div>
        <div class="information">
          <p>01获赞</p>
          <p>02粉丝</p>
          <p>03关注</p>
          <p>12来访</p>
        </div>
        <div class="cart">
          <div class="id">兔行UID：12345678</div>
          <div class="ip">所属地：广东</div>
        </div>
    </div>

    <div class="Fn">
      <ul>
        <li v-for="(item,index) in FnList" :key="index" @click="FnClick(item.path)">
          <div class="pc" :style="{ backgroundImage: 'url(' + item.icon + ')' }"></div>
          <p class="FnName">{{item.name}}</p>
        </li>
      </ul>
    </div>
    <div class="footer_wrap">
      <router-link to="/index" class="one"></router-link>
      <router-link to="/home" class="two"></router-link>
      <router-link to="/user" class="three"></router-link>
  </div>
  </div>
</template>

<style  scoped>
.FnName{
  position: absolute;
  left:40px;
  text-align: center;
  line-height: 0px;
  font-size: 18px;
}
.Fn .pc{
  /* position: absolute; */
  /* top:15px;
  left: 10px; */
  width: 25px;
  height: 25px;
  background-image: url(../../assets/user/dingdang.png);
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: left;
  left: 0;
}
.Fn li{
  width: 290px;
  height: 40px;
  /* background-color: #fff; */
  margin: 10px;
  padding: 5px;
  border-bottom:2px solid #DDAD9E;
}
.Fn ul{
  position: absolute;
  left: 40px;
}
.Fn{
  width: 100%;
  height: 254px;
  /* background-color: rgb(140, 140, 217); */
  position: absolute;
  top: 380px;
}
.cart div{
  margin: 15px;
}
.cart{
  position: absolute;
  top: 180px;
  display: flex;
  flex-direction: column;
  flex-direction: row;
  justify-content: space-evenly;
}

.information p{
  margin: 15px;
  padding: 0;
}

.information{
  display: flex;
  flex-direction: column;
  flex-direction: row;
  justify-content: space-evenly;
  position:absolute;
  top:150px;
}
.info .name{
  position: absolute;
  top:135px;
  font-size: large;
  font-weight: bold;
}
.info{
  width: 100%;
  height: 230px;
  /* background-color: #a9a8a8; */
  position: absolute;
  top:135px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
}
.tx{
  width: 132px;
  height: 132px;
  background-image: url('../../assets/user/tx.png');
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  position:absolute;
  top:0;
  left: 130px;
}
h2{
  /* text-align: center; */
  text-indent: 160px;
}
.setting{
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: #443F42;
    background-image: url('../../assets/user/setting.png') ;
    background-position-x: 3px;
    background-position-y: 3.5px;
    background-size: 85%;
    position:absolute;
    right:0;
}
.back{
  width: 40px;
  height: 40px;
  background-image: url('../../assets/user/back.png');
  background-size: 100%;
  position: absolute;
  left: 0;
}
.head{
  position:absolute;
  top: 55px;
  left: 15px;
  width: 356px;
  height: 40px;
  /* background-color: pink; */
  display: flex;
  align-items: center; /* 垂直居中对齐 */
  justify-content: space-between; /* 水平空白间隔排列子元素 */
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
  background-image: url('../../assets/dhl3.png');
  background-size: 100%;
}
.root{
  width: 100%;
  height: 100vh;
  /* background-color: #000; */
  background-repeat: no-repeat;
  background-image: url('../../assets/user/bgc.png');
  background-size: 100%;
}
</style>
