import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { observer, inject } from 'mobx-react'
import Layout from '@/components/layout/index'


type IndexType = {
  app
}
@inject('app')
@observer
class Index extends Component<IndexType> {
  componentDidMount() {
    // console.log(this.props.app.someList)
    this.props.app.asyncFun()
  }
  render() {
    const { title, someList } = this.props.app
    return (
      <Layout>
        <View>首页</View>
        <Text>store/app 标题数据：{title}</Text>
        <Text>store/app 列表数据长度： {someList.length}</Text>
      </Layout>
    )
  }
}
export default Index
