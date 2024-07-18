<script>
import payHead from '@/components/UserPlug/head.vue'
export default {
  name: 'shopsDetail',
  components: { payHead }
}
</script>

<template>
  <div class="shopsDetail">
    <payHead>九龙冰室</payHead>
    <div class="pic"></div>
    <div class="detailtxt">
      <h3>广东广州 |</h3>
      <p>上下九的港式茶餐厅</p>
      <div class="ddtail">仿佛重回九零年代，一脚走进了上个世纪的香港电影场景，菜品丰富，味道复古</div>
      <div class="good">
        <strong>推荐菜品</strong>
        <ul>
          <li>一口西多士</li>
          <li>滑蛋牛肉饭</li>
          <li>香港炸豆腐</li>
          <li>鲜油菠萝包</li>
        </ul>
      </div>
      <div class="dingwei"></div>
      <div class="shopsAddress"> 天河区正佳广场东北门M层E197号—E111号铺（近体育广场D3出口）</div>
    </div>
  </div>
</template>

<style scoped>
.dingwei{
  width: 14px;
  height: 21px;
  background-image: url(../../assets/user/dingwei.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: absolute;
  top: 210px;
  left: 30px;
}
.shopsAddress{
  width: 220px;
  margin-top: 10px;
  margin-left: 20px;
  font-size: 12px;
  position: absolute;
  top: 200px;
  left: 30px;
}
.good ul{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.good{
  width: 80%;
  height: 40px;
  margin-left: 20px;
}
.ddtail{
  width: 80%;
  height: 40px;
  font-size: 12px;
  margin-left: 20px;
}
.detailtxt p{
  margin-top: 0px;
  margin-left: 20px;
  margin-bottom: 5px;
}
.detailtxt h3{
  margin-top: 15px;
  margin-left: 20px;
  margin-bottom: 0px;
}
.detailtxt{
  width: 301px;
  height: 272px;
  position: absolute;
  top: 521px;
  left: 46px;
  background-color: rgba(252,245,222,0.8);
  border-radius: 20px;
}
.pic{
  width: 356px;
  height: 505px;
  background-image: url(../../assets/user/longdetail.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: absolute;
  top: 106px;
  left: 17px;
}
.shopsDetail{
  width: 100%;
  height: 100vh;
  background-image: url(../../assets/user/bgc.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>
