import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: '',
    userImg: 1,
    channel: '',
    uuid: ''
  },
  mutations: {
    setName (state, name: string) {
      state.name = name
    },
    setUserImg (state, imgIndex: number) {
      state.userImg = imgIndex
    }
  },
  actions: {

  }
})
