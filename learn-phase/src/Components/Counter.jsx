import React, { useState } from 'react'



const Counter = () => {
    let [count, setCount] = useState(0);
    let msg ;
    if(count === 5) {
      msg = (
        <div>
        <p style={{color: 'green'}}>Count reached 5!</p>
        <p>Hurray!</p>
        </div>
      )
    } else {
       msg =( <div>
        <p style={{color: 'red'}}>Try to reach count 5</p>
        <p>Current count: {count}</p>
        </div>
       )
    }
    
function increment() {
    setCount((preCount) => preCount + 1);
}

function decrement() {
    setCount(count - 1);
}
  return (
    <div>
    <h1>Counter App</h1>
    {/* <h2>Count: {count}</h2> */}
    <p> {msg}</p>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>decrement</button>
    </div>
  )
}

export default Counter