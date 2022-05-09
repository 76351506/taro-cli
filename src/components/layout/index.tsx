import { Component } from 'react'
import { View, Text } from '@tarojs/components'

import './layout.scss'
import '@/assets/css/common.scss'

class Layout extends Component {
  render() {
    return (
      <View className="wraper">
        <View>{this.props.children}</View>
      </View>
    )
  }
}
export default Layout
