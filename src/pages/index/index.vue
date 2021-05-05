<template>
  <view class="index">

    <AtNoticebar marquee>
      欢迎使用 Taro UI Vue111
    </AtNoticebar>
    <AtButton
      type="primary"
      :on-click="handleClick"
    >
      AtButton
    </AtButton>
    <AtToast :is-opened="show" :text="msg" :on-close="handleClose"></AtToast>
  </view>

</template>

<script>
import { Vue, Component, Prop } from 'vue-property-decorator'
// 按需引入, 更小的应用体积
import { AtButton, AtToast, AtNoticebar } from 'taro-ui-vue'
import './index.scss'

@Component({
    components: {
      AtButton,
      AtToast,
      AtNoticebar
    }

  })

export default class test extends Vue {


  msg='Hello world!111111'
  show=false

  handleClick () {
    this.show = true
  }

  handleClose () {
    this.show = false
  }
}
</script>
