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
      if (this.$refs['fileUpdate']) {
        let file = this.$refs['fileUpdate']
        this.$refs['fileUpdate'].click()
      }
    },
    imgInputOnChange (file) {
      console.log(file)
    },
    emojiOnInsert (emoji) {
      this.input.text += emoji
    },
    emojiOnClick (e) {
      this.$refs['emojiTable'].toggle(e)
    }
  }
}
</script>
<template>
  <div class="input-wrap"
    @keypress.enter="$emit('change', input)">
    <div class="preview-wrap">
      <div class="img-previews-ctn"></div>
      <div class="files-name-wrap"></div>
    </div>
    <Emoji @insert="emojiOnInsert"
      ref="emojiTable"
      :search="emojiSearch">
      <div slot="emoji-invoker"
        slot-scope="{ events: { click: clickEvent } }"
        @click.stop="clickEvent"
        style="display: none">
        <button type="button">open</button>
      </div>
      <div slot="emoji-picker" slot-scope="{ emojis, insert }">
        <div>
          <input type="text"
            v-model="emojiSearch" />
        </div>
        <div>
          <div v-for="(emojiGroup, category) in emojis"
            :key="category">
            <h5>{{category}}</h5>
            <div>
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
      class="file-up">
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
  input[type=text]
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
</style>
