import { Component, Prop, Vue } from 'vue-property-decorator'
import UserImg from './UserImg'
@Component({
  components: {
    UserImg
  }
})
export default class MessageWrap extends Vue {
  @Prop() userImg !: number
  @Prop() name !: string
  @Prop() nameColor !: string
  @Prop() message !: string
  @Prop() image !: string[]
  @Prop() time !: string

  render () {
    return (<div class="message-wrap">
      <UserImg class="user-img"></UserImg>
      <div class="name">{this.name}</div>
      <div class="message">{this.message}</div>
      <div class="time">{this.time}</div>
      <div class="img-wrap">
        {
          this.image.map(img => (<img src={img} alt=""/>))
        }
      </div>
    </div>)
  }
}
