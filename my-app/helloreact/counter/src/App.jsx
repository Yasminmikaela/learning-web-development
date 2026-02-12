import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>You have pressed the button {count} times</p>
      <button>Press me</button>
    </>
  )
}

export default App
