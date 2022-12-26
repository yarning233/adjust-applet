import { createApp } from 'vue'
import { Button, Toast, Icon, Tabs, TabPane, Sticky } from '@nutui/nutui-taro'

import './app.scss'

const App = createApp({
  // @ts-ignore
  onShow (options) { console.log(options) },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

App.use(Button)
  .use(Toast)
  .use(Icon)
  .use(Tabs)
  .use(TabPane)
  .use(Sticky)

export default App
