<script>
import search from '@/components/HomePlug/search.vue'
import { Toast } from 'vant'
export default {
  name: 'MyIndex',
  components: {
    search
  },
  data () {
    return {
      newShow: false,
      columns: ['广州', '佛山', '深圳', '珠海', '中山', '东莞', ' 汕头', '江门', '肇庆', '惠州', '茂名', '湛江', '梅州', '清远', '韶关', '河源', '揭阳', '云浮', '汕尾', '潮州'],
      columnsTime: ['两天内', '四天以下', '四天', '五天', '六天', '七天', '八天', '九天', '十天', '十天以上'],
      columnsTep: ['美食', '摄影', '购物', '特产', '风景', '山水', '公园'],
      columnsGo: ['高铁', '飞机', '自驾', '公交', '地铁'],
      pickerShow: false,
      pickerShowTime: false,
      pickerShowTep: false,
      pickerShowGo: false,
      pickerShowDate: false,
      addressIndex: 0,
      Address: '广州',
      Time: '两天内',
      Tep: '美食',
      Go: '高铁',
      currentDate: ['7月', '18号'],
      Datecolumns: [{
        values: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        defaultIndex: 2
      },
      // 第二列
      {
        values: ['1号', '2号', '3号', '4号', '5号', '6号', '7号', '8号', '9号', '10号', '11号', '12号', '13号', '14号', '15号', '16号', '17号', '18号', '19号', '20号', '21号', '22号', '23号', '24号', '25号', '26号', '27号', '28号', '29号', '30号', '31号'],
        defaultIndex: 1
      }]
    }
  },
  methods: {
    clickNew () {
      this.newShow = true
      this.$refs.tuji.style.top = '28px'
      this.$refs.tuji.style.left = '80px'
    },
    clickEnd () {
      this.$refs.tuji.style.top = '335px'
      this.$refs.tuji.style.left = '80px'
      Toast({
        message: '该功能暂未开放',
        icon: 'underway-o'
      })
    },
    clickYear () {
      this.$refs.tuji.style.top = '36px'
      this.$refs.tuji.style.left = '280px'
      Toast({
        message: '该功能暂未开放',
        icon: 'pause-circle-o'
      })
    },
    clickNo () {
      this.$refs.tuji.style.top = '342px'
      this.$refs.tuji.style.left = '280px'
      Toast({
        message: '该功能暂未开放',
        icon: 'clock-o'
      })
    },
    TurnShow () {
      this.newShow = false
      this.pickerShow = true
    },
    TurnShowTime () {
      this.newShow = false
      this.pickerShowTime = true
    },
    TurnShowTep () {
      this.newShow = false
      this.pickerShowTep = true
    },
    TurnShowGo () {
      this.newShow = false
      this.pickerShowGo = true
    },
    TurnShowA () {
      this.newShow = true
      this.pickerShow = false
    },
    back () {
      this.$router.go(0)
    },
    clickBtn () {
      this.$router.push('/add')
    },
    onConfirm (value) {
      this.Address = value
      this.TurnShowA()
    },
    onCancel () {
      this.TurnShowA()
    },
    onConfirmTime (value) {
      this.Time = value
      this.newShow = true
      this.pickerShowTime = false
    },
    onConfirmTep (value) {
      this.Tep = value
      this.newShow = true
      this.pickerShowTep = false
    },
    onConfirmGo (value) {
      this.Go = value
      this.newShow = true
      this.pickerShowGo = false
    },
    onConfirmData (value) {
      this.currentDate = value
      this.newShow = true
      this.pickerShowDate = false
    },
    TurnShowDate () {
      this.newShow = false
      this.pickerShowDate = true
    }
  }
}
</script>

<template>
  <div class="root">
    <div class="IndexAddress">
      <img src="../../assets/index/address.png" alt="">
      <p>广州</p>
    </div>
    <div class="IndexSearch"><search></search></div>

    <div class="real">
      <div class="new" @click="clickNew"><p>新增行程</p></div>
      <div class="year" @click="clickYear" ><p>年度报告</p></div>
      <div class="done" @click="clickEnd"><p>已完成行程</p></div>
      <div class="nodone" @click="clickNo"><p>未完成行程</p></div>
    </div>
    <div class="endTxt"><strong>小主，您来看兔迹啦</strong></div>
    <div class="tuji" ref="tuji"></div>
    <div class="footer_wrap">
      <router-link to="/index" class="one"></router-link>
      <router-link to="/home" class="two"></router-link>
      <router-link to="/user" class="three"></router-link>
  </div>
  <div class="newShow" v-if="newShow">
    <div class="newChose" v-clickout="back">
      <div class="ChoseTitle">筛选</div>
      <div class="ChoseContent">
        <div class="cdiv"><div class="logo"></div><p>目的地</p><div class="select" @click="TurnShow()">{{ this.Address}}</div></div>
        <div class="cdiv"><div class="logo"></div><p>时间</p><div class="select" @click="TurnShowDate()">{{ this.currentDate[0].replace('月', '') +'/'+ this.currentDate[1].replace('号', '') }}</div></div>
        <div class="cdiv"><div class="logo"></div><p>天数</p><div class="select" @click="TurnShowTime()">{{this.Time}}</div></div>
        <div class="cdiv"><div class="logo"></div><p>标签</p><div class="select" @click="TurnShowTep()">{{ this.Tep }}</div></div>
        <div class="cdiv"><div class="logo"></div><p>出行方式</p><div class="select" @click="TurnShowGo()">{{ this.Go}}</div></div>
      </div>
      <div class="btn" @click="clickBtn">确定</div>
    </div>
  </div>
  <div class="pick" v-if="!newShow && pickerShow">
    <van-picker
        ref="picker"
        title="请选择目的地"
        show-toolbar
        :columns="columns"
        @confirm="onConfirm"
        @cancel="onCancel"
        v-clickout="onCancel"
    />
      />
    </div>
    <div class="pick" v-if="!newShow && pickerShowTime">
        <van-picker
            ref="pickerB"
            title="请选择时间长度"
            show-toolbar
            :columns="columnsTime"
            @confirm="onConfirmTime"
            @cancel="onCancel"
            v-clickout="onCancel"
        />
      />
    </div>
    <div class="pick" v-if="!newShow && pickerShowTep">
        <van-picker
            ref="pickerA"
            title="请选择标签"
            show-toolbar
            :columns="columnsTep"
            @confirm="onConfirmTep"
            @cancel="onCancel"
            v-clickout="onCancel"
        />
      />
    </div>
    <div class="pick" v-if="!newShow && pickerShowGo">
        <van-picker
            ref="pickerAB"
            title="请选择出行方式"
            show-toolbar
            :columns="columnsGo"
            @confirm="onConfirmGo"
            @cancel="onCancel"
            v-clickout="onCancel"
        />
      />
    </div>
    <div class="pick" v-if="!newShow && pickerShowDate">
      <van-picker show-toolbar title="标题" :columns="Datecolumns"
            @confirm="onConfirmData"
            @cancel="onCancel"
            v-clickout="onCancel"/>
    </div>
  </div>
</template>
<style  scoped>
.real p{
  width: 100px;
  position: relative;
  top: 230px;
  left: 46px;
  font-size: 18px;
  margin: 0;
}
.real div{
  width: 180px;
  height: 216px;
  background-image: url('../../assets/index/add.png');
  /* background-size: 100%; */
  background-repeat: no-repeat;
  position: relative;
  top:10px;
  left:20px;
}
.real .year{
  background-image: url('../../assets/index/niandu.png');
}
.real .done{
  background-image: url('../../assets/index/end.png');
}
.real .nodone{
  background-image: url('../../assets/index/noend.png');
}
.real{
  width: 100%;
  height: 70%;
  /* background-color: rgba(0, 0, 0, 0.5); */
  position: absolute;
  top: 100px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.IndexSearch{
  position: absolute;
  top: 45px;
  right: 16px;
}
.IndexAddress p{
  position: relative;
  top: -32px;
  left: 23px;
  font-size: 14px;
}
.IndexAddress img{
  position: relative;
  top: 4px;
  left: 10px
}
.IndexAddress{
  width: 63px;
  height: 24px;
  position: absolute;
  top: 61px;
  left: 16px;
  background-color: #FFFBEF;
  border-radius: 24px;
  border: 1px solid #AF3723;

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
  background-image: url('../../assets/dhl1.png');
  background-size: 100%;
}
.root{
  width: 100%;
  height: 100vh;
  /* background-color: #000; */
  background-repeat: no-repeat;
  background-image: url('../../assets/index/bgc1.png');
  background-size: 100%;
}
.tuji{
  width: 87px;
  height: 91px;
  position: absolute;
  top: 683px;
  left: 270px;
  background-image: url('../../assets/index/tuji.png');
  background-size: 100%;
  background-repeat: no-repeat;
  /* transition: top 0.3s ease;
  transition: left 0.3s ease; */
}
.endTxt{
  position: absolute;
  top: 680px;
  left: 110px;
  font-size: 18px;

}
.newShow{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(63,63,68, 0.5);
  box-shadow: inset 0 0 0 3000px rgba(63,63,68, 0.5);
}
.newChose{
  width: 100%;
  height: 390px;
  background-color: #FCF5DE;
  position: absolute;
  bottom: 0;
  border-radius: 30px 30px 0 0;
}
.ChoseTitle{
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 18px;
}
.ChoseContent{
  width: 90%;
  height: 259px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  position: relative;
  left: 20px;
  }
.ChoseContent .cdiv{
  width: 50%;
  height: 50px;
  /* background-color: #FFF; */
  border-radius: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.cdiv .logo{
  width: 10px;
  height: 14px;
  background-size: 100%;
  background-image: url(../../assets/index/tudi.png);
  text-indent: 20px;
  font-size: 12px;
}
.cdiv .select{
  width: 80px;
  height: 43px;
  background-color: #a84444;
  border-radius: 12px;
  margin-right: 10px;
  text-align: center;
  line-height: 43px;
  color: #FCF5DE
}
.btn{
  width: 162px;
  height: 32px;
  background-color: #3F3F44;
  color: #FCF5DE;
  border-radius: 12px;
  position: relative;
  left: 25%;
  text-align: center;
  line-height: 32px;
  margin-top: 20px
}
.cdiv p{
  margin-left: 5px;
  margin-right: 0;
}
.pick{
  position: absolute;
  width: 100%;
  bottom: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(63,63,68, 0.5);
  box-shadow: inset 0 0 0 3000px rgba(63,63,68, 0.5);
}
.van-picker{
  background-color: #FCF5DE;
  color: #a84444;
  position: absolute;
  width: 100%;
  bottom: 0px;
}
</style>
