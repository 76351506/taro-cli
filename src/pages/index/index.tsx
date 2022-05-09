import { Component } from 'react'
import { AtButton } from 'taro-ui'
import { View, Text } from '@tarojs/components'
import { observer, inject } from 'mobx-react'

import 'taro-ui/dist/style/components/button.scss' // 按需引入
import './index.less'

export type PageStateProps = {
  store: {
    counterStore: {
      counter: number
      increment: Function
      decrement: Function
      incrementAsync: Function
    }
  }
}

interface Index {
  props: PageStateProps
}

@inject('store')
@observer
class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}
  increment = () => {
    const { counterStore } = this.props.store
    counterStore.increment()
  }

  decrement = () => {
    const { counterStore } = this.props.store
    counterStore.decrement()
  }

  incrementAsync = () => {
    const { counterStore } = this.props.store
    counterStore.incrementAsync()
  }
  render() {
    const {
      counterStore: { counter }
    } = this.props.store
    return (
      <View className="index">
        <AtButton onClick={this.increment}>+</AtButton>
        <AtButton onClick={this.decrement}>-</AtButton>
        <AtButton onClick={this.incrementAsync}>Add Async</AtButton>
        <Text>{counter}</Text>
      </View>
    )
  }
}
export default Index
