import { useState } from 'react'
import './App.css'

function App(props) {
  const [count, setCount] = useState(0)

  return (
    <>
      Hello World {props.firstname}
    </>
  );
}

export default App
