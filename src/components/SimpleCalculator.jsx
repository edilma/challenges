import { useState } from "react"

const initialState = {}

function reducer (state, action) {}

export default function SimpleCalculator () {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [operation, setOperation] = useState(true)

  const handleClear=()=>{
    setNumber1(0);
    setNumber2(0)
  }

  const performOperation =()=>{
    console.log ( number1, number2)
    return operation
     ? (number1 + number2)
     : (number1 - number2)
  }
    

  return (
    <div>
      <div>
        <h2>Number 1</h2>
        {numbers.map(number => (
          <button 
            key={number}
            onClick={setNumber1(number)}
          
          >
            {number}
          </button>))}
      </div>
      <div>
        <h2>Number 2</h2>
        {numbers.map(number => (
          <button 
          key={number}
          onClick = {setNumber2(number)}
          >
            {number}
          </button>))}
      </div>
      <div>
        <h2>Actions</h2>
        <button onClick={setOperation(true)}>+</button>
        <button onClick={setOperation(false)}>-</button>
        <button onClick = {()=>{handleClear()}}>c</button>
      </div>
      <div><h2>Result:</h2></div>
      {performOperation}
    </div>
  )
}