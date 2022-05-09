export default {
  pages: ['pages/home/index', 'pages/mine/index', 'pages/service/index', 'pages/index/index'],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '智慧社区业主小程序',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#666',
    // custom: true,
    selectedColor: '#b4282d',
    backgroundColor: '#fafafa',
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/home/index',
        iconPath: './assets/images/tabbar/home.png',
        selectedIconPath: './assets/images/tabbar/home-active.png',
        text: '首页'
      },
      {
        pagePath: 'pages/service/index',
        iconPath: './assets/images/tabbar/cate.png',
        selectedIconPath: './assets/images/tabbar/cate-active.png',
        text: '爱服务'
      },
      {
        pagePath: 'pages/mine/index',
        iconPath: './assets/images/tabbar/user.png',
        selectedIconPath: './assets/images/tabbar/user-active.png',
        text: '我的'
      }
    ]
  }
}
