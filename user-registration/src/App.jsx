import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [person, setPerson] = useState({firstname: '', lastname: '', email: '', phone: ''});

  const inputChanged = (event) => {
    setPerson({...person, [event.target.name]: event.target.value});
  }

  const showAlert = () => {
    if (person.firstname === '' || person.lastname === '' || person.email === '' || person.phone === '') {
      alert("All fields are required");
  } else {
      alert(`Welcome ${person.firstname} ${person.lastname}`);
  }
  }

  return (
    <>
      <form>
        <input 
          placeholder="First name" 
          name="firstname" 
          value={person.firstname} 
          onChange={inputChanged} />
        <input 
          placeholder="Last name" 
          name="lastname" 
          value={person.lastname} 
          onChange={inputChanged} />
        <input 
          placeholder="Email" 
          name="email" 
          value={person.email} 
          onChange={inputChanged} />
        <input 
          placeholder="Phone" 
          name="phone" 
          value={person.phone} 
          onChange={inputChanged} />
      </form>
      <button onClick={showAlert}>Submit</button>
    </>
  )
}

export default App
