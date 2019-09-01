<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import UserWrap from '@/components/UserWrap'
import { State, Action } from 'vuex-class'
import ChatInput from '@/components/ChatInput.vue'
import ImgViewer from '@/components/ImgPreviewWrap.vue'
import UserImg from '@/components/UserImg'
import { IPostChatMessageStack, IChatMessageStack } from '../IStore'
import { getPreviewImage } from '../Util'
@Component({
  components: {
    UserWrap,
    ChatInput,
    ImgViewer,
    UserImg
  }
})
export default class ChatRoom extends Vue {
  @State('name') name!: string
  @State('userImg') userImg!: number
  @State('friends') friends!: { name: string, img: number, active: number }[]
  @State('chat') chat!: IChatMessageStack
  @Action('postMessageStack') postMessage!: (message: IPostChatMessageStack) => void | false
  @Action('logout') _logout!: Function
  private onSearch = false
  private imgPreviewSrc = ''
  private imgPreviewOnShow = false
  private colorList = ['#ffffff', '#FF9B9B', '#6FE2C3', '#C98CFD', '#69D1FF']

  searchToggle () {
    this.onSearch = !this.onSearch
  }

  async inputOnPost (arg: { text: string, img: FileList, file: FileList }) {
    console.log(arg)
    let { text, img, file } = arg
    let imgs: string[] = []
    let files: { name: string, src: string }[] = []
    this.postMessage({
      name: this.name,
      userImg: this.userImg,
      color: this.colorList[0],
      created_at: '' + (~~(+new Date() / 1000)),
      contentText: text,
      contentImg: img,
      contentFiles: file
    })
    this.postMessage({
      name: 'Foodie',
      userImg: 2,
      color: this.colorList[1],
      created_at: '' + (~~(+new Date() / 1000)),
      contentText: 'This is Echo: \n' + text,
      contentImg: img,
      contentFiles: file
    })
  }

  logout () {
    this._logout()
    this.$router.push('/')
  }

  getRealTime (time: string) {
    let _time = new Date(+time * 1000)
    return `${_time.getHours() % 13} : ${('0' + _time.getMinutes()).slice(-2)} ${_time.getHours() > 12 ? 'pm' : 'am'}`
  }

  imgOnClick (src: string) {
    this.imgPreviewSrc = src
    this.imgPreviewOnShow = true
  }

  imgPreviewOnClick () {
    this.imgPreviewOnShow = false
  }
}
</script>
<template>
  <div class="about">
    <div class="header">
      <img src="../assets/lets-check-logo2.svg"
        alt="">
      <div class="search">
        <img src="../assets/zoom-2.svg"
          @click="searchToggle"
          alt="" />
        <span class="underline"
          :class="onSearch ? 'active' : ''">
          <input type="text" />
        </span>
      </div>
    </div>
    <div class="self-info">
      <div class="headline">Aurora Hunters <img class="logout"
          @click="logout"
          src="../assets/logout.svg"
          alt="" /></div>
      <UserWrap :userImg="userImg"
        :name="name"
        :active="0"></UserWrap>
    </div>
    <div class="friends">
      <UserWrap v-for="(friend, i) in friends"
        :key="i"
        :userImg="friend.img + 1"
        :name="friend.name"
        :active="friend.active"></UserWrap>
    </div>
    <div class="chatroom">
      <div class="wrap">
        <div class="row"
          v-for="(row, i) in chat"
          :class="row.name === name ? 'is-me' : ''"
          :key="i">
          <UserImg class="chat-img"
            :userImg="row.userImg"></UserImg>
          <div class="context-wrap">
            <span class="name"
              :style="`color:${row.color}`"
              v-text="row.name"></span>
            <span class="created-at"
              v-text="getRealTime(row.created_at)"></span>
            <span class="file-wrap"
              v-if="row.contentFiles">
              with {{row.contentFiles.map(e => e.name).join()}}
            </span>
            <div class="context"
              v-text="row.contentText"></div>
            <div class="img-wrap"
              v-if="row.contentImg">
              <img :src="img"
                v-for="(img, i) in row.contentImg"
                @click="imgOnClick(img)"
                :key="i"
                alt="" />
            </div>
          </div>
        </div>
      </div>
      <ChatInput @post="inputOnPost"
        class="chat-input"></ChatInput>
    </div>
    <ImgViewer v-if="imgPreviewOnShow"
      @click.native="imgPreviewOnClick"
      :src="imgPreviewSrc"></ImgViewer>
  </div>
</template>
<style lang="stylus" scoped>
.about
  display grid
  grid-template-columns 30% 70%
  grid-template-rows 60px 167px auto
  grid-template-areas 'header header' 'self-info chatroom' 'friends chatroom'
  height 100vh
  width 100vw
  font-family 'Roboto Slab'
.header
  padding 0 55px
  box-sizing border-box
  img
    &:first-child
      height 23.25px
    height 22px
  grid-area header
  display flex
  align-items center
  justify-content space-between
  background-color #171717
  width 100%
  .search
    display flex
    img
      cursor pointer
    .underline
      margin-left 5px
      height auto
      transition 0.2s
      border-bottom 1px white solid
      width 0
      overflow hidden
      input
        background-color inherit
        border 0
        width 100%
        color white
        text-align center
      &.active
        overflow unset
        width 141px
.self-info, .friends
  user-select none
  color #dbdbdb
  background-color #272727
.self-info
  grid-area self-info
  height 167px
  padding 32px 31px 20px 51px
  border-bottom 1px solid #707070
  box-sizing border-box
  display flex
  flex-direction column
  justify-content space-between
  .logout
    cursor pointer
  .headline
    box-sizing border-box
    width 100%
    display flex
    justify-content space-between
    align-items center
    font-size 24px
    font-weight bold
    img
      width 30px
.friends
  overflow-y hidden
  overflow-x auto
  box-sizing border-box
  padding 21.5px 31px 21.5px 51px
  grid-area friends
  height auto
  display flex
  flex-direction column
  justify-content space-between
.chatroom
  grid-area chatroom
  background-color #1D1D1D
  position relative
  &::-webkit-scrollbar
    width 8px
    height 9px
    z-index 5
  &::-webkit-scrollbar-track
    background #cccccc
    border-radius 5px
  &::-webkit-scrollbar-thumb
    border-radius 5px
    background gray
  .message-wrap
    width 100%
    box-sizing border-box
    white-space normal
    padding 14px 24px
    .user-img
      width 42px
  .wrap
    color white
    overflow-y auto
    height calc(100vh - 130px)
    box-sizing border-box
    padding 22px 24px 0px 24px
    &::-webkit-scrollbar
      width 8px
      height 9px
      z-index 5
    &::-webkit-scrollbar-track
      background #cccccc
      border-radius 5px
    &::-webkit-scrollbar-thumb
      border-radius 5px
      background gray
    .row
      width 100%
      display flex
      justify-content flex-start
      margin-bottom 16px
    .chat-img
      width 42px
      margin-right 22px
      align-self flex-start
    .name
      font-size 16px
      margin-right 15px
    .created-at
      font-size 10px
      color #DBDBDB
    .context
      margin-top 7px
      font-size 14px
      margin-bottom 11px
    .img-wrap
      img
        max-width 125px
        max-height 200px
    .row.is-me
      justify-content flex-end
      .chat-img, .name
        display none
      .created-at, .context
        display block
        text-align right
        margin-left auto
        margin-right 0
      .context
        margin-right 15px
>>>.user-wrap
  display flex
  justify-content flex-start
  align-items center
  width 100%
  font-size 18px
  user-select none
  img
    user-select none
    height 42px
  .name
    margin-left 22px
  .active
    float right
    width 15px
    height 15px
    border-radius 50%
    margin-right 0
    margin-left auto
    &.online
      background-color #98d693
    &.idle
      background-color #d6c493
    &.do-not-disturb
      background-color #D69393
.chat-input
  position absolute
  bottom 0
  width 100%
</style>
