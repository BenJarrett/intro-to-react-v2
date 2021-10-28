import React, { useState } from 'react'

export default function Counter({ appName, counterValue }) {
  const [counter, setCounter] = useState(counterValue);
  const [userInput, setUserInput] = useState(0);
  const [counterName, setCounterName] = useState(appName);

  return (
    <>
    <div>
      <input 
        onChange={(e) => setCounterName(e.target.value)}>
      </input>

      <h1>{counterName}</h1>
      <h2>{counter}</h2>
      <input 
        onChange={(e) => setUserInput(Number(e.target.value))}>
      </input><br />
      
      {/* Increment Button */}
        <button 
        onClick={() => setCounter((prevState) => prevState + userInput )}>Increment by {userInput}
        </button>

      {/* Decrement Button */}
        {counter <= 0 ? '' :
          <button onClick={() => setCounter((prevState) => prevState - userInput)}> Decrement by {userInput}
          </button>}

      {/* Reset Button  */}
        <button 
          onClick={() => setCounter(0)}> Reset 
        </button>
        </div>
    </>
  );

}
