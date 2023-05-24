import { useState, useMemo } from 'react'

const LIST = Array(1_000_000)
  .fill()
  .map((_, i) => i + 1)

function App() {
  const [query, setQuery] = useState('')
  const [isDarkMode, setIsDarkMode] = useState(false)

  const filteredList = useMemo(() => {
    console.log('in memo')
    return LIST.filter((n) => n.toString().includes(query))
  }, [query])

  console.log(filteredList.length)

  return (
    <div
      style={{
        backgroundColor: isDarkMode ? '#333' : 'white',
        color: isDarkMode ? 'white' : '#333'
      }}
    >
      <label>
        Query:{' '}
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
      </label>
      <br />
      <label>
        <input
          type='checkbox'
          checked={isDarkMode}
          onChange={(e) => setIsDarkMode(e.target.checked)}
        ></input>{' '}
        Dark Mode:
      </label>
    </div>
  )
}

export default App
