import  React , {Component}from "react"

class TestClass extends Component {
    constructor(){
        super();
        this.state={
            message:"Hi  i am state"
        }
    }

      my(){
        alert("Hi i ma class compoments")
    }
    render (props) {
        const {name,job} = this.props

        return (
            <div>
                <h2>Test Class My name{name} and my job {job}</h2>
                <button onClick={this.my}>Click</button>
            </div>
        )
         
    }
}

export default TestClass;