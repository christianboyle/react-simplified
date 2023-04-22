import { useState } from 'react'

function App() {
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)

  function incrementAge() {
    return setAge((currentAge) => currentAge + 1)
  }

  function decrementAge() {
    return setAge((currentAge) => currentAge - 1)
  }

  return (
    <>
      <span>Function Component:</span>
      <br />
      <br />
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <button onClick={incrementAge}>+</button>
      {age}
      <button onClick={decrementAge}>-</button>
      <br />
      <br />
      <span>
        My name is {name} and I am {age} years old
      </span>
    </>
  )
}

export default App
