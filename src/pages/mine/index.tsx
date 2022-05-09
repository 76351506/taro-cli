import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { observer, inject} from 'mobx-react'
import Layout from '@/components/layout/index'

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

interface Mine {
  props: PageStateProps
}

@inject('user')
@observer
class Mine extends Component {
  render() {
    return (
      <Layout>
        <View>this is Mine page</View>
      </Layout>
    )
  }
}

export default Mine
