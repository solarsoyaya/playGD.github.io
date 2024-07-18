<script>
import search from '@/components/HomePlug/search.vue'
export default {
  name: 'userhead',
  components: { search },
  methods: {
    back () {
      this.$router.back()
    }
  }
}
</script>

<template>
  <div class="head">
      <div class="back" @click="back"></div>
      <h2><slot></slot></h2>
      <search class="ss"></search>
    </div>
</template>

<style scoped>
.setting{
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: #443F42;
    background-image: url('../../assets/user/setting.png') ;
    background-position-x: 3px;
    background-position-y: 3.5px;
    background-size: 85%;
    position:absolute;
    right:0;
}

.back{
  width: 36px;
  height: 36px;
  background-image: url('../../assets/user/back.png');
  background-size: 100%;
  position: absolute;
  left: 0;
}

.head{
  position:absolute;
  top: 55px;
  left: 15px;
  width: 356px;
  height: 40px;
  /* background-color: pink; */
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: nowrap;
  flex-direction: row;
}
.ss{
  width: 35px;
  height: 35px;
  position: absolute;
  right:-15px;
  top:-15px;
}
</style>
