import React, {useState} from 'react';

export default function App(props) {
  //let now  = new Date();
  const [hearts, setHearts] = useState(0);
  const handleClick = () =>{
    setHearts(hearts+1);
  }

  return <div className = 'App'>
    <button onClick = {handleClick}>Hey</button>
  </div>
}

