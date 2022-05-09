import { action, observable } from 'mobx'
import { AppMangeType } from '@/store/types/app'

class App {
  @observable title = 'app'
  @observable count = 0
  @observable someList: Array<AppMangeType.TableState> = []

  @action.bound
  add() {
    this.count++
  }

  // 异步请求示例1
  @action.bound
  asyncFun(params: AppMangeType.SomeType1) {
    //  const result = await someAsyncFunction(params)
    setTimeout(() => {
      for (let i = 0; i < 5; i++) {
        this.someList.push(new AppMangeType.TableState())
      }
    }, 0)
  }

  // 异步请求示例2
  // @action.bound
  // async fun(params:AppMangeType.SomeType2) {
  //    const result = await someAsyncFunction(params)
  // }
}

export default new App()
