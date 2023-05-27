import useToggle from './useToggle'
import useInputValue from './useInputValue'

function App() {
  const nameInput = useInputValue('')
  const [isDarkMode, toggleDarkMode] = useToggle(false)

  return (
    <div
      style={{
        background: isDarkMode ? 'black' : 'white',
        color: isDarkMode ? 'white' : 'black'
      }}
    >
      <label>
        Name: <input {...nameInput} />
      </label>
      <br />
      <br />
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
    </div>
  )
}

export default App
