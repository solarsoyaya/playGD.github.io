<script>
import payHead from '@/components/UserPlug/head.vue'
export default {
  name: 'Plant',
  components: { payHead }
}
</script>

<template>
  <div class="plant">
    <payHead>收藏路线</payHead>
    <div class="plantShow">
      <ul>
        <li>
          <div class="picture"></div>
          <div class="plantTxt"><strong>广东广州 |</strong> 千年古都，富庶低调，邀请你把百年间的光阴回首</div>
          <div class="plantUser">
            <div class="plantTx"></div>
            <div class="plantName"><strong>吃一碗肉</strong></div>
            <div class="plantLove"> </div><p>7.0</p>
          </div>
        </li>
        <li></li>

      </ul>
    </div>
  </div>
</template>

<style  scoped>
.plantLove p{
  margin: 0;
  margin-left: 20px;
  text-align: center;
  font-size: 12px;
}
.plantLove{
  width: 20px;
  height: 20px;
  margin-left: 36px;
  background-image: url(../../assets/user/plantlove.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.plantName{
  margin-left: 10px;
  font-size: 12px;

}
.plantTx{
  width: 25px;
  height: 25px;
  background-image: url(../../assets/user/tx.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  border-radius: 50%;
  margin-left: 5px;
}
.plantUser{
  width: 100%;
  height: 15%;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.plantTxt{
  width: 100%;
  height: 15%;
  /* background-color: #4c3fff; */
  font-size: 12px;
}
.plantTxt p{
  font-size: 12px;
  margin: 0;
}
.picture{
  width: 100%;
  height: 70%;
  background-image: url(../../assets/user/gz.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.plant li{
  width: 168px;
  height: 240px;
  margin: 10px 10px;
  background-color: #fff;
  border-radius: 12px;
}
.plant ul{
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.plantShow{
  position: absolute;
  top: 120px;
  /* left:18px; */
  width: 100%;
  height: 80%;
  overflow: auto;
}
.plant {
  width: 100%;
  height: 100vh;
  background-image: url(../../assets/user/bgc.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>
