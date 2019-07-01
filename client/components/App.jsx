import React from 'reat'

export default class App extends React.Component {
  construction(props) {
    super(props)
    this.state = {
      default: ''
    }
  }
  render() {
    return (
      <div>Hello from App componenet</div>
    )
  }
}