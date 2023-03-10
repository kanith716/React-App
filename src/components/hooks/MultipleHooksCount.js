import React , {useState}from 'react'

function MultipleHooksCount() {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);

  return (
    <div>
      <button>{count}</button> 
      <button onClick={() => setCount(prevCount => prevCount  + 1)}>Increment </button>
      <button onClick={() => setCount(prevCount => prevCount - 1)  }>Decrement</button>
      <button onClick={() => setCount(initialCount)}>Reset</button>
    </div>
  )
}
export default MultipleHooksCount;
