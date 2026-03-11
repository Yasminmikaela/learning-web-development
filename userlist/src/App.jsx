import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([]);

useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(resData => setUsers(resData)) // 
      .catch(err => console.error(err))
  }, []);
  return (
    <>
      <table>
        <tbody>
        {
          users.map((user) => 
           <tr key={user.id}>
             <td>{user.name}</td>
             <td>{user.last_name}</td>
             <td>{user.email}</td>
           </tr>
          )
        }
        </tbody>
      </table>
    </>
  )
}

export default App
