import { useState } from 'react'
import './App.css'

function App(props) {
  const [color, setColor] = useState('black')

  return (
    <>
      <p style = {{ color }}>Hello World</p>
      <button onClick={() => setColor('red')}>Change color</button>
    </>
  );
}

export default App
