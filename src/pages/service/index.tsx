import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { observer, inject } from 'mobx-react'
import Layout from '@/components/layout/index'

@inject('app')
@observer
class Index extends Component {
  render() {
    return (
      <Layout>
        <View>爱服务</View>
      </Layout>
    )
  }
}
export default Index
