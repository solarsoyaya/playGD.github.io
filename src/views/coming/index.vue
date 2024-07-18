<script>
export default {
  name: 'MyComing'
}
</script>

<template>
   <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#CF6736" :loop="false">
      <van-swipe-item><div class="pone"></div></van-swipe-item>
      <van-swipe-item><div class="ptwo"></div></van-swipe-item>
      <van-swipe-item><div class="pthree"><a class="btn1" href="#/home"></a></div></van-swipe-item>
      </van-swipe>
   </div>

</template>

<style lang="less">
.btn1{
  width: 50px;
  height: 50px;;
  background-image: url('@/assets/btn1.png');
  background-size: 100%;
  clip-path: circle(50%);
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%,-50%);
  border: none;
}
  .my-swipe .van-swipe-item {
    height: 100vh;
  }
  .pone{
    background-image: url('@/assets/a.png');
    background-size: 100%;
    width: 100%;
    height: 100%;
  }
  .ptwo{
    background-image: url('@/assets/b.png') ;
    background-size: 100%;
    width: 100%;
    height: 100%;
  }
  .pthree{
    background-image: url('@/assets/c.png');
    background-size: 100%;
    width: 100%;
    height: 100%;
  }
  .van-swipe__indicator{
    width: 12px;
    height: 12px;
    background-color: #E9CBA3;
  }
</style>
