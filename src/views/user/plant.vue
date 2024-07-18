<script>
import payHead from '@/components/UserPlug/head.vue'
export default {
  name: 'Plant',
  components: { payHead },
  data () {
    return {
      plantList: [{ name: '说走就走', address: '广东广州', title: '千年古都，富庶低调，邀请你把百年间的光阴回首', start: '7.0', img: require('@/assets/img/plant/gz.png'), tx: require('@/assets/img/plant/tx/one.png') },
        { name: '驴友的小白朋友', address: '广东珠海', title: '珠生于贝，贝生于海，日月相映，山海相托', start: '7.3', img: require('@/assets/img/plant/zh.png'), tx: require('@/assets/img/plant/tx/two.png') },
        { name: '江湖上的朋友', address: '广东云浮', title: '云深不知处，浮生半日闲。菩提本无树，明镜亦非台', start: '8.1', img: require('@/assets/img/plant/yf.png'), tx: require('@/assets/img/plant/tx/three.png') },
        { name: '一剑走天下', address: '广东汕头', title: '碧浪白船，潮起潮落，海鸟巡回，椰树长青', start: '9.2', img: require('@/assets/img/plant/st.png'), tx: require('@/assets/img/plant/tx/four.png') },
        { name: '巷子里的神仙', address: '广东深圳', title: '创新科技与海滨魅力的完美融合，半城烟火半城仙', start: '8.6', img: require('@/assets/img/plant/sz.png'), tx: require('@/assets/img/plant/tx/six.png') },
        { name: '参透红尘', address: '广东东莞', title: '今人不见古时月，今月曾经照古人，千年韵味，禅味无穷', start: '7.2', img: require('@/assets/img/plant/dg.png'), tx: require('@/assets/img/plant/tx/seven.png') },
        { name: '吃在路上', address: '广东惠州', title: '惠州西湖山川秀邃，幽胜曲折，浮洲四起，青山似黛', start: '9.2', img: require('@/assets/img/plant/hz.png'), tx: require('@/assets/img/plant/tx/8.png') },
        { name: '人间不白走', address: '广东潮州', title: '砖红小巷，灯笼街梁，游潮人故里，品潮式生活', start: '8.0', img: require('@/assets/img/plant/cz.png'), tx: require('@/assets/img/plant/tx/9.png') }

      ]
    }
  }
}
</script>

<template>
  <div class="plant">
    <payHead>收藏路线</payHead>
    <div class="plantShow">
      <ul>
        <li v-for="(item,index) in plantList" :key="index">
          <div class="picture" :style="{ backgroundImage: 'url(' + item.img + ')' }"></div>
          <div class="plantTxt"><strong>{{item.address}} |</strong> {{ item.title }}</div>
          <div class="plantUser">
            <div class="plantTx" :style="{ backgroundImage: 'url(' + item.tx + ')' }"></div>
            <div class="plantName"><strong>{{item.name}}</strong></div>
            <div class="plantLove"> </div><p>{{item.start}}</p>
          </div>
        </li>

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
  font-size: 8px;
  width: 60px;
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
  height: 86%;
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
