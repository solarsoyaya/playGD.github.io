<script>
import payHead from '@/components/UserPlug/head.vue'
export default {
  name: 'shopsDetail',
  components: { payHead },
  data () {
    return {
      list: [
        { key: '九龙冰室', img: require('@/assets/img/food/jl.png'), food: ['一口西多士', '滑蛋牛肉饭', '香港炸豆腐', '鲜油菠萝包'], dictionary: { address: '天河区正佳广场东北门M层E197号—E111号铺（近体育广场D3出口）', title: '广东广州', content: '仿佛重回九零年代，一脚走进了上个世纪的香港电影场景，菜品丰富，味道复古', pp: '上下九的港式茶餐厅' } },
        { key: '坚记面馆', img: require('@/assets/img/food/jian.png'), food: ['油菜伊面', '牛腩面', '竹升面', '鸡蛋面'], dictionary: { address: '荔湾区长寿东路303号（近地铁长寿路站以及华林寺站）', title: '广东广州', content: '老广的热爱，堪称米其林级别的长寿伊面，环境老式传统出餐速度超快价格适中', pp: '长寿路上老字号坚记面馆' } },
        { key: '炳胜品味', img: require('@/assets/img/food/bs.png'), food: ['秘制黑叉烧', '豉油皇鹅肠', '冷水猪肚', '捞起鱼生'], dictionary: { address: '海珠区东晓路33号（近海印桥南公交站，地铁近晓港）', title: '广东广州', content: '从粤味经典再到粤意升华，米其林指标荣誉，从经典到新式，口感适配老广大众', pp: '东晓路上的传统粤菜' } },
        { key: '常来小聚', img: require('@/assets/img/food/cl.png'), food: ['老娘秘制叉烧', '秘制紫苏嗜田鸡', '招牌避风塘炒虾', '芥末葱油果园鸡'], dictionary: { address: '越秀区较场西路26号地王广场负一层1007（近地铁烈士陵园站）', title: '广东广州', content: '被大众老广街坊认可的平价粤菜，味道家常，上菜速度快分量足', pp: '较场西路的正宗广州菜' } },
        { key: '校长家味浓·私房菜农庄', img: require('@/assets/img/food/xz.png'), food: ['校长螺肉粥', '藕尖炒牛肉', '萝卜炖牛腩', '糯米粗盐盐焗胡须鸡'], dictionary: { address: '禅城区东江龙餐饮城娱乐中心二排22—27号（地铁2号线石梁站B出口500米）', title: '广东佛山', content: '怀旧风的环境感觉一下子穿越到70.80年代，出品正宗，价格适中，口感丰富', pp: '港口路的热门美食' } },
        { key: '有记', img: require('@/assets/img/food/yj.png'), food: ['白切猪手', '蜜汁茶花鸡', '招牌黄鳝焗饭', '鲜蘑椰子冰沙'], dictionary: { address: '禅城区卫国路金鱼街24号106有记餐厅（近地铁同济路站）', title: '广东佛山', content: '浓浓市井烟火气，菜式出品味道绝，连续5年登上必吃榜单', pp: '卫国路的地道佛山菜' } }

      ]
    }
  },
  computed: {
    selectedDictionary () {
      const keyFromRoute = this.$route.query.key
      return this.list.find(item => item.key === keyFromRoute)
    }
  }

}
</script>

<template>
  <div class="shopsDetail" v-if="selectedDictionary">
    <payHead>{{selectedDictionary.key}}</payHead>
    <div class="pic" :style="{ backgroundImage: 'url(' + selectedDictionary.img + ')' }"></div>
    <div class="detailtxt">
      <h3>{{selectedDictionary.dictionary.title}} |</h3>
      <p>{{selectedDictionary.dictionary.pp}}</p>
      <div class="ddtail">{{selectedDictionary.dictionary.content}}</div>
      <div class="good">
        <strong>推荐菜品</strong>
        <ul>
          <li v-for="(item,index) in selectedDictionary.food" :key="index">{{ item }}</li>
        </ul>
      </div>
      <div class="dingwei"></div>
      <div class="shopsAddress"> {{selectedDictionary.dictionary.address}}</div>
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
