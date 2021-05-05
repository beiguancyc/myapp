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
    <AtImagePicker
      :files="this.files"
      :showAddBtn="showw"
      :onChange="onChange"
    />
  </view>

</template>

<script>
import { Vue, Component, Prop } from 'vue-property-decorator'
// 按需引入, 更小的应用体积
import { AtButton, AtToast, AtNoticebar,AtImagePicker } from 'taro-ui-vue'
import './index.scss'

@Component({
    components: {
      AtButton,
      AtToast,
      AtNoticebar,
      AtImagePicker
    }

  })

export default class test extends Vue {


  msg='Hello world!111111'
  show=false
  pics=new Array()
  showw=true

  files= [{
    url: 'https://pic.meijutt.tv/pic/uploadimg/2016-11/21.jpg',
  }
    ]

  onChange (files) {
    this.files=files
  }

  handleClick () {
    this.show = true
  }

  handleClose () {
    this.show = false
  }
}
</script>
