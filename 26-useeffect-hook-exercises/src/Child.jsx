import { useEffect, useState } from 'react'

let globalVar = 0

export function Child() {
  const [age, setAge] = useState(0)
  const [name, setName] = useState('')

  globalVar = globalVar + 1
  console.log(globalVar)

  useEffect(() => {
    document.addEventListener('click', () => {
      console.log('Click')
    })

    return () => {
      console.log('Unmount')
    }
  }, [])

  return (
    <div>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <button onClick={() => setAge((a) => a - 1)}>-</button>
      {age}
      <button onClick={() => setAge((a) => a + 1)}>+</button>
      <br />
      <br />
      My name is {name} and I am {age} years old.
    </div>
  )
}
