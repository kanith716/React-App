import React, { Component } from 'react'

 class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    increment(){
        this.setState({
            count: this.state.count +1
        })
    }
    
  render() {
    return (
      <div>
        <h3>This is Score {this.state.count}</h3>
        <button onClick={() => this.increment()}>Click</button>
      </div>
    )
  }
}

export default Counter
