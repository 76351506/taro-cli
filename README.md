# 小程序项目

## 开始

- 安装编辑器
- 安装微信开发者工具
- 项目用到了 sass，新同学需要安装 python2.x

## 目录配置

    - config 开发、生产环境的配置
    - dist 打包好的程序路径
    - src 代码
        - api  接口请求目录，相同模块根据业务名称创建对应的文件夹+模块名称即可
        - asset 静态资源
            - css
            - images
                - icons
                - tabbar
        - components 自定义组件
        - hoc 自定义高阶组件
        - interface ts类型
          - common
          - model
        - pages 路由
        - store 状态管理容器
          - index.ts 动态入口文件,不在需要手动引入
          - model title必须传
        - config 
          - common 公共配置
          - api  接口地址
        - utils 直接创建文件即可，不用创建目录了
        - app.config.ts  小程序的应用(全局)配置
        - app.css 小程序的应用(全局)样式
        - app.tsx 小程序应用入口
        - index.html 单页面应用的模版
    - .editorconfig 编辑器的配置文件
    - .eslintrc.js eslint 配置规则
    - babel.config.js 等同于 .babelrc
    - packages.json 包管理文件
    - readme 解释文档

## 项目配置

### 别名

业务复杂目录层级过深，通过别名查找文件

- css 别名 (待定做不做)
- js 别名
  ./config/index.js

```js
const config = {
  alias: {
    // 需要可以添加其他别名
    '@': path.resolve(__dirname, '..', 'src')
  }
}
```

### 代理服务

./config/dev
配置代理自行更改 target 地址即可

```js
module.exports = {
  h5: {
    devServer: {
      proxy: {
        '/api': {
          // 代理地址可以添加多个
          target: 'http://127.0.0.1/443',
          changeOrigin: true,
          pathRewrite: {
            '^/api': '/'
          }
        }
      }
    }
  }
}
```

### 代码格式化

- eslint
- prettier
- lintstage 提交自动格式化代码（未测试）
