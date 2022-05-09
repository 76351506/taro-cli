import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { getCookie } from '@/utils';
import { ROUTER_WHITELIST } from '@/config/except';

const hocInterceptor = function (WraperComponent: React.ComponentClass): any {
  return class componentName extends Component {
    render() {
      // 查找当前路由在路由白名单中是否存在
      const inWhiteList = ROUTER_WHITELIST.find(router => router === this.props.location.pathname)
      // 缓存中是否有登陆态
      const hasToken = getCookie('token') === null ? false : true
      // 判断不在白名单也没有登陆台，跳转到登陆页面
      return !inWhiteList && hasToken ? <WraperComponent></WraperComponent> : <Redirect from={this.props.location.pathname} to="/user/login"></Redirect>
    }
  }
}
export default hocInterceptor;