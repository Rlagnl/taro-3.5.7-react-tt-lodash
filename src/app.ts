import { Component, PropsWithChildren } from 'react'
import { clone } from 'lodash';
import './app.scss'

class App extends Component<PropsWithChildren> {

  componentDidMount() { }

  componentDidShow() {
    const aa = clone({ bbb: 11 });
  }

  componentDidHide() { }

  // this.props.children 是将要会渲染的页面
  render() {
    return this.props.children
  }
}

export default App
