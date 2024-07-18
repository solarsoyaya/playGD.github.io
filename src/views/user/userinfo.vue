<script>
import userhead from '@/components/UserPlug/head.vue'
export default {
  components: { userhead },
  name: 'userinfo',
  data () {
    return {
      mainList: [
        { photo: require('@/assets/user/people.png'), name: '昵称：  吃一碗肉' },
        { photo: require('@/assets/user/sex.png'), name: '性别：  女' },
        { photo: require('@/assets/user/born.png'), name: '生日：  2002/09/19' },
        { photo: require('@/assets/user/phone.png'), name: '手机号码：13507549964' },
        { photo: require('@/assets/user/age.png'), name: '兔龄：  3' }
      ]
    }
  }
}
</script>

<template>
  <div class="userinfoA">
    <userhead>个人资料</userhead>
    <div class="userinfoB">
      <div class="tx"></div>
      <div class="fix">修改头像</div>
    </div>
    <div class="userinfoC">
      <div class="main">
        <ul>
          <li v-for="item in mainList" :key="item.name" >
            <div class="pc" :style="{ backgroundImage: 'url(' + item.photo + ')' }"></div>
            {{item.name}}</li>

        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main li .pc{
  width: 30px;
  height: 30px;
  /* background-image: url(../../assets/user/people.png); */
  background-repeat: no-repeat;
  background-position-y: 1px;
  position: absolute;
  left: 20px;
}
.main li{
  width: 315px;
  height: 60px;
  border-bottom: 1px solid #DDAD9E;
  margin: 0 auto;
  line-height: 70px;
  text-align: center;
  font-size: 20px;
  color: #333;
  padding: 5px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
}
.main{
  width: 330px;
  height: 380px;
  position: absolute;
  top: 380px;
  left: 32px;
  background-color: rgba(252,245,222,0.5);
  border-radius: 10px;
  box-shadow: 0 0 10px #999;
}
.userinfoB .fix{
  position: absolute;
  top: 200px;
  left: 130px;
  width: 120px;
  height: 30px;
  border-radius: 10px;
  text-align: center;
  line-height: 30px;
  font-size: 20px;
  color: #333;
}
.userinfoB .tx{
  position: absolute;
  top: 60px;
  left: 130px;
  width: 120px;
  height: 120px;
  background-image: url(../../assets/user/tx.png);

  background-size: 100% 100%;
  background-repeat: no-repeat;
  border-radius: 50%;
}
.userinfoB{
  position: absolute;
  top: 120px;
  width: 100%;
  height: 800PX;
  background-image: url(../../assets/user/userinfo.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.userinfoA{
  width: 100%;
  height: 100vh;
  background-image: url(../../assets/user/bgc.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>
