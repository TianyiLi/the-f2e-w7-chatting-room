import Vue from 'vue'
import Vuex from 'vuex'
import { IState, IChatMessageStack, IPostChatMessageStack } from './iStore'
import { getPreviewImage } from './Util'

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

const InterfaceState: IState = {
  name: '',
  userImg: 1,
  channel: '',
  uuid: '',
  friends: JSON.parse(JSON.stringify(friends)),
  chat: [],
  imgUtil: {
    obj: undefined
  },
  fileUtil: {
    obj: undefined
  },
  imgViewer: {
    src: '',
    isShow: false
  }
}

let state: IState = JSON.parse(JSON.stringify(InterfaceState))

export default new Vuex.Store({
  state,
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
    showImgViewer (state, source: { src: string, isShow: boolean }) {
      state.imgViewer = source
    },
    pushMessageStack (state, message: IChatMessageStack) {
      console.log('run')
      state.chat.push(message)
    }
  },
  actions: {
    logout ({ state }) {
      Object.assign(state, JSON.parse(JSON.stringify(InterfaceState)))
    },
    async postMessageStack ({ state, commit }, message: IPostChatMessageStack) {
      if (message.contentText || message.contentImg || message.contentFiles) {
        let imgs = []
        if (message.contentImg) {
          for (let i of message.contentImg) {
            imgs.push(await getPreviewImage(i))
          }
        }
        let files: { name: string, src: string }[] = []
        if (message.contentFiles) {
          files = [...message.contentFiles].map(e => ({ name: e.name, src: '' }))
        }
        console.log(imgs, files)
        let result: IChatMessageStack = {
          name: message.name,
          color: 'white',
          contentFiles: message.contentFiles ? files : undefined,
          contentImg: message.contentImg ? imgs : undefined,
          userImg: state.userImg,
          contentText: message.contentText,
          created_at: message.created_at
        }
        commit('pushMessageStack', result)
      } else {
        return false
      }
    }
  }
})
