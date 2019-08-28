<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import UserWrap from '@/components/UserWrap'
import { State } from 'vuex-class'

@Component({
  components: {
    UserWrap
  }
})
export default class ChatRoom extends Vue {
  @State('name') name!: string
  @State('userImg') userImg!: number
  @State('friends') friends!: { name: string, img: number, active: number }[]
  private onSearch = false

  searchToggle () {
    this.onSearch = !this.onSearch
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
          alt="">
        <span class="underline"
          :class="onSearch ? 'active' : ''">
          <input type="text">
        </span>
      </div>
    </div>
    <div class="self-info">
      <div class="headline">Aurora Hunters <img src="../assets/logout.svg"
          alt=""></div>
      <UserWrap :userImg="userImg"
        :name="name"
        :active="0"></UserWrap>
    </div>
    <div class="friends">
      <UserWrap
        v-for="(friend, i) in friends"
        :key="i"
        :userImg="friend.img + 1"
        :name="friend.name"
        :active="friend.active"></UserWrap>
    </div>
    <div class="chatroom"></div>
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
>>>.user-wrap
  display flex
  justify-content flex-start
  align-items center
  width 100%
  font-size 18px
  img
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
</style>
