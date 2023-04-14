import React from 'react'

function App() {
  const myCustomLabel = <label htmlFor='inputId'>something</label>

  return (
    <div>
      {myCustomLabel}
      <input type='number' id='inputId' defaultValue={3} />
    </div>
  )
}

export default App
