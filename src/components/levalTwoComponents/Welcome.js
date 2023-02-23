import React from 'react'

function Welcome() {
    function saySomething(){
        alert("Hii i am new function")
    }
  return (
    <div>
      <h1>Hii i am second and time welcome</h1>
      <button onClick={saySomething}>Can you click Me</button>
    </div>
  )
}

export default Welcome
