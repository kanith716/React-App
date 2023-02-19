import React, { Component } from 'react'
import Child from './Child';

 class Parent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentMessage: "Hi i  am from parent"
      }

      this.ParentFuntion = this.ParentFuntion.bind(this)
    }

    ParentFuntion(){
        alert(`Hello ${this.state.parentMessage}`);
        console.log(this)
    }
    
  render() {
    return (
      <div>
        <Child ParentFuncHandler={this.ParentFuntion}/>
      </div>
    )
  }
}

export default Parent;
