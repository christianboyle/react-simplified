import React, { useState, useRef, useEffect } from 'react'

export default function App() {
  const [name, setName] = useState('')
  const inputRef = useRef()

  useEffect(() => {
    console.log(inputRef.current.value)
  }, [name])

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <>
      <label>
        Name:{' '}
        <input
          ref={inputRef}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </>
  )
}
