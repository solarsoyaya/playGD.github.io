<script>
export default {
  name: 'collection',
  data () {
    return {
      aShow: true
    }
  },
  methods: {
    open () {
      this.aShow = false
    },
    closeA () {
      this.aShow = true
    }
  },
  watch: {
    '$store.state.collectionShow': {
      handler: function (val) {
        console.log(val)
        console.log('c')
        if (val) {
          this.aShow = !val
        }
      }
    }
  }
}
</script>

<template>
  <div>
    <div class="a" v-if="aShow" @click="open"></div>
     <div class="content" v-else v-clickout="closeA">
      <div class="title">
        <div class="tuzi"></div>
        佛山胡吃海喝行
      </div>
      <ul class="d">
        <li>
           <div class="collectionPhotos" ></div>
            <div class="txt">
            <p class="name">嘉洲广场 </p>
            <div class="address"><div class="local"></div>佛山市南海区大沥镇黄岐</div>
            <p class="distance">2m</p>
          </div>
          </li>
          <li>
           <div class="collectionPhotos" ></div>
            <div class="txt">
            <p class="name">嘉洲广场 </p>
            <div class="address"><div class="local"></div>佛山市南海区大沥镇黄岐</div>
            <p class="distance">2m</p>
          </div>
          </li>
      </ul>
     </div>
  </div>

</template>

<style  scoped>
@keyframes move{
  0%{right: -323px;}
  60%{right: 0;}
  80%{right: -33px;}
  100%{right: 0px;}
}
.address{
  display: flex;
  text-indent: 10px;
}
.distance{
  width: 8px;
  height: 12px;
  background-image: url(../../assets/home/go.png);
  color:#F38B6B;
  text-indent: 15px;

}
.name{
  margin-bottom:0px;
  font-size: 15px;
}
.local{
  background-image: url(../../assets/home/house/local.png);
  background-size: 100%;
  background-repeat: no-repeat;
  width: 10px;
  height: 15px;
  /* position: absolute; */
}
.txt{
  height: 60px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #FBF5E5;
}
.collectionPhotos{
  width: 64px;
  height: 64px;
  background-image: url(../../assets/home/house/1.png);
  background-size: cover;
  background-repeat: no-repeat;
}
.d li{
  display: flex;
  width: 100%;
  height: 75px;
  color: #FCF5DE;
  font-size: 14px;
  text-align: center;
  border-bottom: 1px solid #f3f3f3;
  margin-bottom: 30px;
}
.d{
  position: absolute;
  top:40px;
  left:20px;
}
.title .tuzi{
  width: 13px;
  height: 18px;
  background: url(../../assets/home/tuzi.png) no-repeat;
}
.content .title{
  width: 190px;
  height: 20px;
  color: #FCF5DE;
  position: absolute;
  text-indent: 20px;
  text-align: center;
  line-height: 20px;
  left: 20px;
  top: 10px;
}
.content{
  overflow: auto;
  width: 323px;
  height: 310px;
  background-color: rgba(63,63,68, 0.9);
  border-radius: 10px;
  position: absolute;
  top: 400px;
  right: 0;
  z-index: 999;
  animation: move 1s;
}
.a{
  width: 80px;
  height: 80px;
  background-image: url(../../assets/home/collection.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  bottom: 200px;
  right: 10px;
}
</style>
