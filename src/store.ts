import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const c = (name: string, active = ~~(Math.random() * 3), img = ~~(Math.random() * 5)) => {
  return {
    name, active, img
  }
}
const friends = [
  c('Jack'),
  c('Chef'),
  c('Foodie'),
  c('Simmons'),
  c('Linda'),
  c('Barnett'),
  c('J.T'),
  c('Abby'),
  c('hulk')
]
export default new Vuex.Store({
  state: {
    name: '',
    userImg: 1,
    channel: '',
    uuid: '',
    friends: JSON.parse(JSON.stringify(friends)),
    chat: [{ img: 0, message: '', who: '0000' }],
    imgUtil: {
      obj: false
    },
    fileUtil: {
      obj: false
    },
    imgViewer: {
      src: '',
      isShow: false
    }
  },
  mutations: {
    setName (state, name: string) {
      state.name = name
    },
    setUserImg (state, imgIndex: number) {
      state.userImg = imgIndex
    },
    setImgUtil (state, imgUtil: any) {
      state.imgUtil.obj = imgUtil
    },
    setFileUtil (state, fileUtil: any) {
      state.fileUtil.obj = fileUtil
    },
    showImgViewer (state, source: {src: string, isShow: boolean}) {
      state.imgViewer = source
    }
  },
  actions: {
    postText ({ state }, message: '', img?: string) {

    }
  }
})
