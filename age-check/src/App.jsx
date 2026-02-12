import { useState } from 'react'
import './App.css'

function App() {
  const [person, setPerson] = useState({name: '', age: ''});
    const inputChanged = (event) => {
    setPerson({...person, [event.target.name]: event.target.value});
  }

  const checkAge = () => {
    const ageNum = parseInt(person.age);
  

    if (ageNum >= 18) {
      alert(`Hello ${person.name}`)
    } else {
      alert(`You are too young`)
    }
  }

  return (
    <>
      <p>Name: {person.name} Age: {person.age}</p>
      <input 
        placeholder="Name"
        name="name"
        value={person.name}
        onChange={inputChanged}/>
      <input 
        placeholder="Age"
        name="age"
        value={person.age}
        onChange={inputChanged}/>
      <button onClick={checkAge}>Check age </button>
    </>
  )
}

export default App
