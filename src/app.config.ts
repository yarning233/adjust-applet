export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/result/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#666',
    selectedColor: 'orange',
    position: 'bottom',
    list: [
      {
        pagePath: 'pages/index/index',
        iconPath: './assets/images/pie.png',
        selectedIconPath: './assets/images/pie-active.png',
        text: '首页'
      },
      {
        pagePath: 'pages/result/index',
        iconPath: './assets/images/ping.png',
        selectedIconPath: './assets/images/ping-active.png',
        text: '调剂'
      }
    ]
  }
})
