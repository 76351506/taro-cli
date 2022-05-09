module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  mini: {},
  defineConstants: {},

  h5: {
    esnextModules: ['taro-ui'],
    devServer: {
      proxy: {
        '/api': {
          // 代理地址
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
