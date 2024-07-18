<script>
import payHead from '@/components/UserPlug/head.vue'
export default {
  name: 'shops',
  components: { payHead },
  data () {
    return {
      choseIndex: 0,
      choseList: ['全部', '广州', '佛山', '深圳', '珠海', '中山', '东莞', ' 汕头', '江门', '肇庆', '惠州', '茂名', '湛江', '梅州', '清远', '韶关', '河源', '揭阳', '云浮', '汕尾', '潮州']
    }
  },
  methods: {
    goto () {
      this.$router.push({ path: '/shopsDetail' })
    }
  }
}
</script>

<template>
  <div class="shops">
    <payHead>收藏路线</payHead>
    <div class="chose">
        <div v-for="(item, index) in choseList" :key="index" :class="{'active': choseIndex === index}" @click="choseIndex = index">{{ item }}</div>
    </div>
    <div class="foodContent">
      <ul class="bigul">
        <li class="bigli">
          <div class="pic"></div>
          <div class="Txt">
            <strong>九龙冰室</strong><br>
            <p class="pp">广州市天河区天河路228号</p>
            <div class="lili">
              <ul>
                <li class="lilisp">休闲</li>
                <li class="lilisp">港式</li>
              </ul>
            </div>
          </div>
          <div class="go" @click="goto()"></div>
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
    justify-content: space-evenly;
}
.Txt .lili{
  width: 100%;
  height: 35px;

}
.pp{
  margin:0px;
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
