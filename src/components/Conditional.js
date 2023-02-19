import React, { Component } from 'react'

 class Conditional extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isValid : false
      }
    }
    
  render() {
    return  this.state.isValid ? <h2>Hi iam good</h2> : <h2>Hi i am not Wealthy</h2>
  }
}

// if conditioning
// ternory opertator 
// return  this.state.isValid ? <h2>Hi iam good</h2> : <h2>Hi i am not Wealthy</h2>
// variable decalring
// short circut method 
//return  this.state.isValid && <h2>I am here</h2>

export default Conditional
