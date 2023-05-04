import { useState } from 'react'

export default function App() {
  const [items, setItems] = useState([
    { id: crypto.randomUUID(), name: 'Item 1' },
    { id: crypto.randomUUID(), name: 'Item 2' }
  ])

  function addItem() {
    setItems((currentItems) => [
      { id: crypto.randomUUID(), name: 'New Item' },
      ...currentItems
    ])
  }

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <pre>
        {items.map((item) => {
          return (
            <div key={item.id}>
              {item.name}
              <input type='text' />
            </div>
          )
        })}
      </pre>
    </div>
  )
}
