/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

// import MyButton from '../components/MyButton.vue'
import ChatInput from '@/components/ChatInput.vue'

storiesOf('Chat ele', module)
  .add('Message input', () => ({
    components: { ChatInput },
    template: /* html */`
      <div style="position: absolute; bottom: 0 ;width: 90%">
        <ChatInput></ChatInput>
      </div>
    `
  }))
  // .add('with text', () => ({
  //   components: { MyButton },
  //   template: '<my-button @click="action">Hello Button</my-button>',
  //   methods: { action: action('clicked') }
  // }))
  // .add('with JSX', () => ({
  //   components: { MyButton },
  //   render () {
  //     return <my-button onClick={this.action}>With JSX</my-button>
  //   },
  //   methods: { action: linkTo('Button', 'with some emoji') }
  // }))
  // .add('with some emoji', () => ({
  //   components: { MyButton },
  //   template: '<my-button @click="action">😀 😎 👍 💯</my-button>',
  //   methods: { action: action('clicked') }
  // }))
