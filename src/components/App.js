import React, { Component } from "react"

const types = {
  ADD: Symbol("ADD"),
  DEL: Symbol('DEL')
}

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [1,2,3,4,5,6,7,8,9]
    }
  }

  eventHandle(type) {
    const { data } = this.state
    switch(type) {
      case types.ADD:
        this.setState({
          data: [
            ...data,
            data[data.length-1] + 1
          ]
        })
        break
      case types.DEL:
        data.pop()
        this.setState({
          data: [
            ...data
          ]
        })
        break
      default:
        return new TypeError("event type handle not defined")
    }
  }

  render() {
    const { data } = this.state
    const listDOM = data.map((item, index) => <li key={ index }>{ item }</li>)

    return <div className="container">
      <h3>Hello World</h3>
      <ul className="list">{ listDOM }</ul>
      <button onClick={ this.eventHandle.bind(this, types.ADD) } className="add">add</button>
      <button onClick={ this.eventHandle.bind(this, types.DEL)  } className="del">del</button>
    </div>
  }
}

export default App