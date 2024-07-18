<script>
export default {
  name: 'quan'
}
</script>

<template>
  <div class="quanShow">
    <ul>
        <li>
          <div class="quanpc"></div>
          <div class="quantxt">
            <slot name="head"></slot>
            <p class="quanclass"><slot name="class"></slot>优惠券</p>
            <p class="quantiem">领取后<slot name="tiem"></slot>天可用</p>
            <p class="quanprice"><slot name="price"></slot>折</p>
            <p class="bigclass"><slot name="bigclass"></slot></p>
          </div>
        </li>
    </ul>
  </div>
</template>

<style scoped>

.bigclass{
  font-size: 9px;
  text-align: center;
  margin-top: 0px;
  margin-bottom: 0px;
}
.quanprice{
  text-align: center;
  margin-top: 0px;
  margin-bottom: 5px;
}
.quantiem{
  font-size: 8px;
  text-align: center;
  margin-top: 0px;
  margin-bottom: 0px;
}
.quanclass{
  font-size: 6px;
  text-align: center;
  margin-bottom: 0px;
}
.quantxt{
  width: 75px;
  height: 85px;
  position: relative;
  top: -82px;
  left: 270px;
  /* background-color: #fff; */
}
.quanpc{
  width: 200px;
  height: 100px;
  background-image: url(../../assets/user/cheap2.png);
  background-repeat: no-repeat;
  position: relative;
  top: 15px;
  left: 18px;
  border-radius: 10px;
  box-shadow: 0 0 10px #ccc
}
.quanShow li {
  width: 100%;
  height: 100%;
  background-image: url(../../assets/user/cheap.png);
  background-repeat: no-repeat;
  /* margin: 5px; */
}
.quanShow ul{
  /* align-items: center; */
  height: 100%;

}
</style>
