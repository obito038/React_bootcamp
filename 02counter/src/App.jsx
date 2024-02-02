import { useState } from 'react';
import './App.css'

function App() {

  let [Counter,  setCounter] =
  useState(0)

  const multiplyByTwo = () => {
   
    setCounter(Counter * 2)

  }

  const addValue = () => {
   
    setCounter(Counter + 1)

  }
 
  const removeValue = () => {
   
    setCounter(Counter - 1)
  }

  const resetValue = () => {
    setCounter(0)
  }

  return (
    <div className="app-container">
    <h1>Counter Value {Counter}</h1>
  
    <div className="button-container">
    <button 
    onClick={addValue} disabled={Counter === 10}>Add Value </button>
    <br />
    <button
    onClick={removeValue} disabled={Counter === 0}>Remove Value </button>
    <button 
    onClick={multiplyByTwo}>x 2</button>

    <button 
    onClick={resetValue}>Reset</button>
    </div>
    
    </div>
  )
}

export default App
