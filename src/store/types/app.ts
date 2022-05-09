export namespace AppMangeType {
  export type SomeType1 = {
    city: string
    ganmao: string
    wendu: string
    yesterday: any
    forecast: any[]
  }

  export type SomeType2 = {
    city: string
    ganmao: string
    wendu: string
    yesterday: any
    forecast: any[]
  }
  export class TableState {
    img: string = 'https://localhost:baidu.com'
    title: string = 'i am title'
    text: string = 'word'
    type: string = 'superType'
    createdTime: string = new Date().getTime().toLocaleString()
    restrictPeopleNumber: number = 123
  }
  export class FormState {
    id?: string = ''
    img: string | undefined
    title: string | undefined
    publishType: string | undefined
    publishRange?: string | undefined
    publishContent: string | undefined
  }
}
