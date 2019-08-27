import { Component, Prop, Vue } from 'vue-property-decorator'
const img = require.context('../assets', true, /^\.\/user-img/)
@Component
export default class UserImg extends Vue {
  @Prop() userImg !: number

  render () {
    let src = img(img.keys()[this.userImg - 1])
    return (<img src={src} alt=""/>)
  }
}
