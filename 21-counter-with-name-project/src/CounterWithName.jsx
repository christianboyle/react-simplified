import { useEffect, useState } from 'react'

function App() {
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const person = { name }

  function incrementAge() {
    return setAge((currentAge) => currentAge + 1)
  }

  function decrementAge() {
    return setAge((currentAge) => currentAge - 1)
  }

  useEffect(() => {
    // const handler = () => {
    //   console.log(name)
    // }
    // console.log('inside effect')
    // document.addEventListener('click', handler)

    // return () => {
    //   document.removeEventListener('click', handler)
    //   console.log('cleanup')
    // }
    console.log(name)
  }, [name])

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
