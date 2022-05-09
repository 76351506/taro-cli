import { observable, action, runInAction } from 'mobx'
// import { userLogin } from '@/api/user'

class User {
  @observable title = 'user'
  @observable token = ''

  // 异步请求
  @action.bound
  async login() {
    // const result = await userLogin()
    // console.log(result)
    // runInAction(() => {
    //   this.token = result.data.token
    // })
  }
}

export default new User()