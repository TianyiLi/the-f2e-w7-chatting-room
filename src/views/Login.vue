<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import UserImg from '@/components/PersonSelect.vue'
@Component({
  components: {
    UserImg
  }
})
export default class Login extends Vue { }
</script>
<template>
  <div class="login">
    <img src="../assets/lets-check-logo.svg"
      class="logo-img"
      alt="">
    <div class="login-wrap">
      <div class="sub-title">You are invited to a chat room</div>
      <h1 class="title">Aurora Hunters</h1>
        <UserImg class="user-img"></UserImg>
      <div class="name-input">How To Call You?</div>
      <input type="text"
        name=""
        id="">
      <button @click="$router.push('/chatroom')">Let's Chat</button>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.login
  background embedurl('../assets/login-bg.svg')
  background-size cover
  background-repeat no-repeat
  height 100%
  width 100%
  position absolute
  left 0
  top 0
  display flex
  flex-direction column
  justify-content center
  align-items center
  text-align center
  img.logo-img
    margin 0 auto
    margin-bottom 43.33px
    width 139px
    height 74px
  .login-wrap
    box-sizing border-box
    width 537px
    height 450px
    border solid 3px white
    background-color #1D1D1D
    padding 37px 92px 45px
  .sub-title
    font-size 14px
    color #66EAD5
    margin-bottom 16px
  .title
    font-size 28px
    color white
  .name-input
    float left
    color white
    font-size 14px
  input
    width 353px
    height 50px
    font-size 20px
    border 0
    box-sizing border-box
    padding-left 20px
    margin-top 13px
  button
    background-color #66ead5
    width 353px
    height 50px
    border 0
    margin-top 24px
    font-size 20px
    user-select none
    cursor pointer
</style>
