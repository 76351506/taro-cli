import { Component } from 'react'
import { Provider } from 'mobx-react'
import store from '@/store'

console.log(store)

class App extends Component {
  // this.props.children 是将要会渲染的页面
  render() {
    return <Provider {...store}>{this.props.children}</Provider>
  }
}

export default App
