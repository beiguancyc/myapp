import Vue from 'vue'
import './app.scss'

import {Component} from 'vue-property-decorator'
Component.registerHooks(['onShow', 'onHide', 'onError', 'onPageNotFound', 'onReady', 'onLoad', 'beforeUpdate', 'updated']);

const App = {
  onShow (options) {
  },
  render(h) {
    // this.$slots.default 是将要会渲染的页面
    return h('block', this.$slots.default)
  }
}

export default App
