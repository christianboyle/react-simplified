import { useState } from 'react'

export function Counter() {
  const [count, setCount] = useState(0)

  function increment() {
    return setCount(count + 1)
  }

  return (
    <>
      <button onClick={increment}>Increment</button>
      <br />
      <br />
      Counter: {count}
    </>
  )
}
