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
  