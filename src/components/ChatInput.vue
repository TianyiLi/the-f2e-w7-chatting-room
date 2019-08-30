<script>
import Emoji from 'vue-emoji-picker'
export default {
  components: {
    Emoji
  },
  data () {
    return {
      input: {
        text: '',
        img: {},
        file: {}
      },
      emojiSearch: ''
    }
  },
  methods: {
    imgOnClick () {
      if (this.$refs['imgUpdate']) {
        let file = this.$refs['imgUpdate']
        this.$refs['imgUpdate'].click()
      }
    },
    imgInputOnChange (file) {
      console.log(file)
    },
    fileOnClick () {
      if (this.$refs['fileUpdate']) {
        let file = this.$refs['fileUpdate']
        this.$refs['fileUpdate'].click()
      }
    },
    fileOnChange (file) {
      console.log(file)
    },
    emojiOnInsert (emoji) {
      this.input.text += emoji
    },
    emojiOnClick (e) {
      this.$refs['emojiTable'].toggle(e)
    },
    onEnterInput () {
      console.log('get enter')
      let { text, img, file } = this.input
      console.log(text)
      console.log(img)
      console.log(file)
      this.$emit('post', { text, img, file })
      this.input.text = ''
      this.input.img = {}
      this.input.file = {}
    }
  }
}
</script>
<template>
  <div class="input-wrap">
    <div class="preview-wrap">
      <div class="img-previews-ctn"></div>
      <div class="files-name-wrap"></div>
    </div>
    <Emoji @emoji="emojiOnInsert"
      ref="emojiTable"
      :search="emojiSearch">
      <div slot="emoji-picker"
        class="emoji-picker"
        slot-scope="{ emojis, insert }">
        <div class="search">
          <input type="text"
            v-model="emojiSearch" />
        </div>
        <div>
          <div v-for="(emojiGroup, category) in emojis"
            :key="category">
            <h5>{{category}}</h5>
            <div class="emojis">
              <span v-for="(emoji, emojiName) in emojiGroup"
                :key="emojiName"
                @click="insert(emoji)"
                :title="emojiName">{{ emoji }}</span>
            </div>
          </div>
        </div>
      </div>
    </Emoji>
    <input type="text"
      v-model="input.text"
      @keypress.enter="onEnterInput"
      placeholder="Say hi :)">
    <img src="../assets/emoji-btn.svg"
      alt=""
      @click.stop="emojiOnClick($event)"
      class="emoji">
    <img src="../assets/img-up-btn.svg"
      alt=""
      @click="imgOnClick"
      class="img-up">
    <img src="../assets/file-up-btn.svg"
      alt=""
      @click="fileOnClick"
      class="file-up">
    <input type="file"
      name=""
      id=""
      multiple
      v-show="false"
      ref="imgUpdate">
    <input type="file"
      name=""
      id=""
      multiple
      v-show="false"
      ref="fileUpdate">
  </div>
</template>
<style lang="stylus" scoped>
.input-wrap
  background-color #403F3F
  color white
  height 70px
  position relative
  display flex
  justify-content flex-end
  &>input[type=text]
    position absolute
    left 0
    background-color transparent
    border 0
    height 100%
    width 70%
    box-sizing border-box
    padding-left 30px
    font-size 24px
    color white
    z-index 0
  img
    z-index 1
    cursor pointer
    user-select none
    margin 0 10px
    &.file-up
      margin-right 31px
.emoji-picker
  position absolute
  bottom 100%
  left 0
  box-sizing border-box
  padding 1rem
  width 262px
  height 145px
  background-color #1D1D1D
  user-select none
  overflow hidden
  z-index 2
  &:hover
    overflow-y scroll
  &::-webkit-scrollbar
    width 5px
  &::-webkit-scrollbar-track
    border-radius 10px
  &::-webkit-scrollbar-thumb
    -webkit-border-radius 4px
    border-radius 4px
    background-color #c1c1c1
  .search
    display flex
    input
      border-radius 0.5rem
      border solid 1px black
      height 1.5rem
      padding-left 0.3rem
  h5
    margin-bottom 0
    color #b1b1b1
    text-transform uppercase
    font-size 0.8rem
    cursor default
  .emojis
    display flex
    flex-wrap wrap
    justify-content space-between
    &:after
      content ''
      flex auto
    span
      padding 0.2rem
      cursor pointer
      border-radius 5px
      &:hover
        background #ececec
</style>
