<script>
export default {
  name: 'search',
  data () {
    return {
      isShow: true,
      searchTxt: '',
      content: '',
      endshow: false,
      list: [
        { name: '民信老铺', address: '顺德区华盖路115-119号', distance: '离你1km', photo: require('../../assets/home/house/1.png') },
        { name: '金榜老街坊', address: '顺德区金榜上街33号', distance: '离你1.7km', photo: require('../../assets/home/house/2.png') },
        { name: '容桂民信', address: '顺德区凤翔南路号', distance: '离你3km', photo: require('../../assets/home/house/3.png') },
        { name: '仁信老铺', address: '顺德区凤翔南路号', distance: '离你3km', photo: require('../../assets/home/house/3.png') },
        { name: '容桂民信', address: '顺德区凤翔南路号', distance: '离你3km', photo: require('../../assets/home/house/3.png') },
        { name: '容桂民信', address: '顺德区凤翔南路号', distance: '离你3km', photo: require('../../assets/home/house/3.png') }

      ]
    }
  },
  methods: {
    change (i) {
      if (i === 1) {
        this.isShow = false
      } else {
        this.isShow = true
      }
    },
    a () {
      this.endshow = false
    }
  },
  watch: {
    searchTxt (newVal, oldVal) {
      if (newVal === '双皮奶') {
        this.endshow = true
      } else {
        this.endshow = false
      }
    }
  }
}
</script>

<template>
  <div>
    <div class="A">
    <div class="searchA" v-show="isShow" @click="change(1)"></div>
    <div class="searchB" v-show="!isShow" >
      <div class="searchC"  @click="change(0)"></div>
      <input type="text"   placeholder="搜索" v-model="searchTxt" >
    </div>
    <div class="B" v-show="endshow" >
      <ul v-clickout="a">
        <li v-for="(item,index) in list" :key="index">
          <div class="SearchPhotos" :style="{ backgroundImage: 'url(' + item.photo + ')' }"></div>
          <div class="txt">
            <p class="name">{{ item.name }} </p>
            <div class="address"><div class="local"></div>{{item.address}}</div>
            <p class="distance">{{item.distance}}</p>
        </div>
        </li>
      </ul>
    </div>
  </div>

  </div>

</template>

<style scoped>
@keyframes move{
  0%{left: 300px;}
  60%{left: 93px;}
  80%{left: 123px;}
  100%{left: 93px;}
}
.address{
  display: flex;
  text-indent: 10px;
}
.local{
  background-image: url(../../assets/home/house/local.png);
  background-size: 100%;
  background-repeat: no-repeat;
  width: 10px;
  height: 15px;
}
.distance{
  text-indent: 120px;
}
.name{
  font-size: 15px;
}
.txt{
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #FBF5E5;
}
.SearchPhotos{
  width: 64px;
  height: 64px;
  background-image: url(../../assets/home/house/1.png);
  background-size: cover;
  background-repeat: no-repeat;
}
.B ul{
  display: flex;
  flex-direction: column;
}
.B li{
  width: 282px;
  height: 86px;
  margin-top: 20px;
  margin-left: 20px;
  display: flex;
  border-bottom: 1px solid #FBF5E5;
}
.B{
  width: 297px;
  height: 544px;
  position: absolute;
  top: 115px;
  left: 93px;
  display: flex;
  background-image: url(../../assets//home/openBgc.png) ;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius:  20px 0 0 20px ;
  animation: move 0.5s;
  overflow: auto;
}
input{
  width: 200px;
  height: 36px;
  border: none;
  border-radius:18px;
  outline:none;
  background-color: #443F42;
  color: #FCF5DE;
  position: absolute;
  left: 40px;
}
.searchC{
  width: 37px;
  height: 37px;
  /* top: 2px; */
  position: absolute;
  background-image: url(../../assets/home/search.png);
  background-size: cover;
  background-repeat: no-repeat;
}
.searchB{
  display: flex;
  width: 280px;
  height: 37px;
  right: 17px;
  position: absolute;
  top: 17px;
  background-color: #443F42;
  transition: move 2s ease;
  border-radius: 18.5px;
}
.searchA{
  width: 37px;
  height: 37px;
  right: 17px;
  position: absolute;
  background-image: url(../../assets/home/search.png);
  background-size: cover;
  background-repeat: no-repeat;
  top: 17px;
}
</style>
