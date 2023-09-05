import { useState, useRef, useEffect } from 'react'

function App() {
  const nameRef = useRef()
  // const [name, setName] = useState('')

  useEffect(() => {
    console.log('Render')
  })

  function handleSubmit(e) {
    e.preventDefault()
    const name = nameRef.current.value
    if (name === '') return

    alert(`Name: ${name}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>Name</label>
      <br />
      <input id='name' type='text' ref={nameRef} />
      {/* <input id='name' type='text' onChange={(e) => setName(e.target.value)} /> */}
      <br />
      <br />
      <button type='submit'>Submit</button>
    </form>
  )
}

export default App
