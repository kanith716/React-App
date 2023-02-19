import React from 'react'

  function Child(props) {
  return (
    <div>
      <button onClick={props.ParentFuncHandler}>Child Click</button>
    </div>
  )
}

export default Child;


