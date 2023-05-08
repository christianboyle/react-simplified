import { useState, Fragment } from 'react'

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
    <>
      <button onClick={addItem}>Add Item</button>
      <pre>
        {items.map((item) => {
          return (
            <Fragment key={item.id}>
              <span>Hi</span>
              <div>{item.name}</div>
            </Fragment>
          )
        })}
      </pre>
    </>
  )
}
