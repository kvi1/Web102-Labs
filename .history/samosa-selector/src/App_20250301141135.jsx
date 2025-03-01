import './App.css';
import React, {useState} from 'react'
import samosa from './samosa.png'

const App = () => {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  const updateCount = () =>{
    setCount(count + multiplier);
  }
  return(
    <div className = "App">
      <div className = "header">
        <h1>Samosa Selector</h1>
        <h2>Count: </h2>
        <img className = "samosa" src = {samosa}></img> 
      </div>
    </div>
  )
}

export default App
