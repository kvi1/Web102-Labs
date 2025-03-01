import React, {useState} from 'react';

export default function App(props) {
  //let now  = new Date();

  const handleClick = () =>{
    alert('hi: )')
  }

  return <div className = 'App'>
    <button onClick = {handleClick()}>Hey</button>
  </div>
}

