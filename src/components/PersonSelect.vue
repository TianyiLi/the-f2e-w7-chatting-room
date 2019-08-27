<template>
  <div class="person-select-wrap"
    @click="imgSelectToggle"
    :class="isActive ? 'active' : ''">
    <UserImage :userImg="userImg"></UserImage>
    <UserImage :userImg="(i)"
      v-show="(i !== userImg) && isActive"
      :key="i"
      @click.native.stop="() => imgOnClick(i)"
      v-for="i in 5"></UserImage>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { State, Mutation } from 'vuex-class'
import UserImage from '@/components/UserImg'

@Component({
  components: {
    UserImage
  }
})
export default class PersonSelect extends Vue {
  @State('userImg') userImg !: number
  @Mutation('setUserImg') setUserImg!: (i: number) => void
  private isActive = false
  imgSelectToggle () {
    this.isActive = !this.isActive
  }
  imgOnClick (imgIndex: number) {
    console.log(imgIndex)
    this.setUserImg(imgIndex)
    this.isActive = false
  }
}
</script>
<style lang="stylus" scoped>
.person-select-wrap
  margin 48px auto 28px
  img
    height 64px
    cursor pointer
.person-select-wrap.active
  width 497px
  height 95px
  border-radius 48px
  display flex
  background-color #D6D6D6
  justify-content space-between
  align-items center
  box-sizing border-box
  padding 0 31px
  transform translateX(100px)
  margin 29px auto 20px
</style>
