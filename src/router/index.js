import Vue from 'vue'
import VueRouter from 'vue-router'
import Coming from '../views/coming/index.vue'
import Home from '../views/home/index.vue'
import Index from '../views/index/index.vue'
import User from '../views/user/index.vue'
import userinfo from '../views/user/userinfo.vue'
import pay from '../views/user/pay.vue'
import purse from '../views/user/purse.vue'
import cheap from '../views/user/cheap.vue'
import plant from '../views/user/plant.vue'
import shops from '../views/user/shops.vue'
import shopsDetail from '../views/user/shopsDetail.vue'
import add from '../views/index/add.vue'
import WentPlant from '../views/index/WentPlant.vue'
import addShops from '../views/index/addShops.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Coming',
    component: Coming
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/index',
    name: 'Index',
    component: Index
  },
  {
    path: '/user',
    name: 'User',
    component: User
  },
  {
    path: '/userinfo',
    name: 'userinfo',
    component: userinfo
  },
  {
    path: '/pay',
    name: 'pay',
    component: pay
  },
  {
    path: '/purse',
    name: 'purse',
    component: purse
  },
  {
    path: '/cheap',
    name: 'cheap',
    component: cheap
  },
  {
    path: '/plant',
    name: 'plant',
    component: plant
  },
  { path: '/shops', name: 'shops', component: shops },
  { path: '/shopsDetail', name: 'shopsDetail', component: shopsDetail },
  { path: '/add', name: 'add', component: add },
  { path: '/WentPlant', name: 'WentPlant', component: WentPlant },
  { path: '/addShops', name: 'addShops', component: addShops }

]

const router = new VueRouter({
  routes
})

export default router
