import { useState } from 'react';
import './App.css'

function App() {

  let [Counter,  setCounter] =
  useState(0)

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
    <>
    <h1>Counter Value {Counter}</h1>
  

    <button 
    onClick={addValue} disabled={Counter === 10}>Add Value </button>
    <br />
    <button
    onClick={removeValue} disabled={Counter === 0}>Remove Value </button>

    <button 
    onClick={resetValue}>Reset</button>
    </>
  )
}

export default App
