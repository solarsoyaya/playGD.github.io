import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    food: 'mike',
    showList: 'a',
    collectionShow: false
  },
  getters: {
  },
  mutations: {
    updateFood (state, payload) {
      state.food = payload
    },
    setShowList (state, payload) {
      state.showList = payload
    },
    setCollectionShow (state, payload) {
      state.collectionShow = !state.collectionShow
    }
  },
  actions: {
  },
  modules: {
  }
})
