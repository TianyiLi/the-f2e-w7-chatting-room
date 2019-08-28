import { Component, Prop, Vue } from 'vue-property-decorator'
import UserImg from './UserImg'
import { UserState } from '@/constant'
@Component({
  components: {
    UserImg
  }
})
export default class UserWrap extends Vue {
  @Prop() userImg !: number
  @Prop() name !: string
  @Prop() active !: UserState

  get userState () {
    return ['online', 'idle', 'do-not-disturb'][this.active]
  }

  render () {
    return (<div class="user-wrap">
      <UserImg class="user-img" userImg={this.userImg}></UserImg>
      <div class="name">{this.name}</div>
      <span class={this.userState + ' active'}></span>
    </div>)
  }
}
