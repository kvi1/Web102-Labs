import React, {useState} from 'react';

export function App(props) {
  //let now  = new Date();

  const [now, setNow] = useState(new Date())
  
  setTimeout(() =>{
    //now = new Date()
    setNow(new Date());
  }, 1000);

  return <div className = 'App'>
    <h2>Here is the current time!</h2>
    <h2>now.toLocaleString()</h2>
  </div>
}

