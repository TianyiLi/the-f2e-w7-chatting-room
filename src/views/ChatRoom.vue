<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class ChatRoom extends Vue {

}
</script>
<template>
  <div class="about">
    <div class="header">
      <img src="../assets/lets-check-logo2.svg"
        alt="">
      <img src="../assets/zoom-2.svg"
        alt="">
    </div>
    <div class="self-info">

    </div>
    <div class="friends">

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
.self-info, .friends
  background-color #272727
.self-info
  grid-area self-info
  height 167px
.friends
  grid-area friends
  height auto
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
</style>
