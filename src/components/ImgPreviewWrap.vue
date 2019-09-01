<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component
export default class ImgPreview extends Vue {
  @Prop() src!:string
}
</script>
<template>
  <div class="bg">
    <div class="pic">
      <img :src="src" alt="">
    </div>
  </div>
</template>
<style lang="stylus" scoped>
.bg
  position fixed
  z-index 10
  width 100%
  height 100%
  background-color #1D1D1D
  display flex
  justify-content center
  align-items center
  .pic
    img
      border solid 4px white
      width calc(100vw / 3 * 2)
      max-height calc(67vh)
</style>
