import './App.css';
import React from 'react'
import samosa from './samosa.png'

const App = () => {
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
