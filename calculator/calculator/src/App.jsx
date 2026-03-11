import './App.css'
import { useState } from 'react';

function App() {
  const [numbers, setNumbers] = useState({ value1: '', value2: '' });
  const [result, setResult] = useState(0);

  const inputChanged = (event) => {
    setNumbers({ ...numbers, [event.target.name]: event.target.value});
  };

  const countSum = () => {
    const num1 = Number(numbers.value1);
    const num2 = Number(numbers.value2);

    setResult(num1 + num2);
  };

  const countMin = () => {
    const num1 = Number(numbers.value1);
    const num2 = Number(numbers.value2);

    setResult(num1 - num2);
  };
  
  return (
    <>
      <h3>Result: {result}</h3>
      <div style={{ display: 'flex', gap: '80px', justifyContent: 'center' }}>
        <p> 1. Number: {numbers.value1} </p>
        <p> 2. Number: {numbers.value2}</p>
      </div>

      <input 
        name="value1" 
        value={numbers.value1} 
        onChange={inputChanged} 
        placeholder="Syötä numero..."
      />
      <input 
        name="value2" 
        value={numbers.value2} 
        onChange={inputChanged} 
        placeholder="Syötä numero..."
      />
      <button onClick={countSum}> + </button>
      <button onClick={countMin}> - </button>
    </>
  )
}

export default App
