<script>
import payHead from '@/components/UserPlug/head.vue'
export default {
  name: 'shops',
  components: { payHead },
  data () {
    return {
      choseIndex: 0,
      Tep: '全部',
      choseList: ['全部', '广州', '佛山', '深圳', '珠海', '中山', '东莞', ' 汕头', '江门', '肇庆', '惠州', '茂名', '湛江', '梅州', '清远', '韶关', '河源', '揭阳', '云浮', '汕尾', '潮州'],
      foodList: [
        { Tep: '广州', name: '九龙冰室', content: '一口西多士、香港炸豆腐、杨枝甘露......', tep: ['休闲', '港式'], logo: require('@/assets/img/food/logo/jl.png') },
        { Tep: '广州', name: '坚记面馆', content: '牛腩捞伊面、大肠捞伊面、竹升面', tep: ['美食', '传统', '正宗'], logo: require('@/assets/img/food/logo/jian.png') },
        { Tep: '广州', name: '炳胜品味', content: '豉油皇鹅肠、秘制黑叉烧、芝麻糊双皮奶......', tep: ['美食', '家常'], logo: require('@/assets/img/food/logo/bs.png') },
        { Tep: '广州', name: '常来小聚', content: '鱼香茄子煲、客家豆腐煲、腊味煲仔饭.....', tep: ['美食', '客家', '平价'], logo: require('@/assets/img/food/logo/cl.png') },
        { Tep: '佛山', name: '校长家味浓·私房菜农庄', content: '香芋碌鹅、校长螺肉粥、秘制酸菜大肠头......', tep: ['美食', '粤式'], logo: require('@/assets/img/food/logo/xz.png') },
        { Tep: '佛山', name: '有记', content: '反沙菠萝、白切猪手、秘制茄子......', tep: ['新式', '美食'], logo: require('@/assets/img/food/logo/yj.png') }
      ],
      showList: []
    }
  },
  methods: {
    goto (val) {
      this.$router.push({ path: '/shopsDetail?key=' + val })
    },
    change (index) {
      this.choseIndex = index
      this.Tep = this.choseList[index]
      if (index === 0) {
        this.showList = this.foodList
      } else {
        this.showList = this.foodList.filter(item => item.Tep === this.Tep)
      }
    }
  },
  created () {
    this.showList = this.foodList
  }
}
</script>

<template>
  <div class="shops">
    <payHead>收藏店铺</payHead>
    <div class="chose">
        <div v-for="(item, index) in choseList" :key="index" :class="{'active': choseIndex === index}" @click="change(index)">{{ item }}</div>
    </div>
    <div class="foodContent">
      <ul class="bigul">
        <li class="bigli" v-for="(item,index) in showList" :key="index">
          <div class="pic" :style="{ backgroundImage: 'url(' + item.logo + ')' }"></div>
          <div class="Txt">
            <strong>{{item.name}}</strong><br>
            <p class="pp">{{item.content}}</p>
            <div class="lili">
              <ul>
                <li class="lilisp" v-for="(item,index) in item.tep" :key="index">{{ item }}</li>
              </ul>
            </div>
          </div>
          <div class="go" @click="goto(item.name)"></div>
        </li>

      </ul>
    </div>
    </div>
</template>

<style scoped>
.lilisp{
  width: 40px;
  height: 20px;
  border: 0;
  background-color: #DDAD9E;
  color: #FCF5DE;
  text-align: center;
  line-height: 20px;
  font-size: 14px;
  border-radius: 5px;
  margin: 5px;
}
.lili ul{
  display: flex;
  flex-direction: row;

    list-style-type: none;
    justify-content: flex-start;
}
.Txt .lili{
  width: 100%;
  height: 35px;

}
.pp{
  margin:0px;
  width: 200px;
  height: 20px;
  font-size: 13px;
  overflow: hidden;
}
.go{
  width: 25px;
  height: 25px;
  background-image: url(../../assets/user/go.svg);
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  top: 40px;
  right: 20px;
}
.pic{
  width: 60px;
  height: 60px;
  background-image: url(../../assets/user/qiulong.png);
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  left: 10px;
  top: 10px;
}
.foodContent .bigul {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0; /* 去除默认的内边距 */
  list-style-type: none; /* 去除默认的列表样式 */
}

.foodContent .bigli {
  width: 95%;
  height: 75px; /* 设置每个 li 的高度 */
  /* background-color: #c67979; */
  border-bottom: 1px solid #000000;
  margin-bottom: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.foodContent{
  width: 100%;
  height: 83%;
  position: absolute;
  top: 160px;
  overflow: auto;
  /* background-color: #F5F5F5; */
}
.active{
  color: #AF3723;
}
.chose div{
  width: 50px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  font-size: 14px;
  margin: 10px;

}
.chose{
  width: 100%;
  height: 20px;
  /* background-color: #fff; */
  position: absolute;
  top: 120px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  overflow: auto;
  white-space: nowrap;
}
.shops{
  width: 100%;
  height: 100vh;
  background-image: url(../../assets/user/bgc.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>
