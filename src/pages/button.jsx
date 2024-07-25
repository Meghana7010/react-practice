import React from "react";
import '../App.css';
import {useState} from "react";

function Button(){
    const [count, setCount] = useState(0);
  const handleClick = (type) => {
    if(type === 'inc')setCount(count+1);
     else setCount(count-1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>{count}</p>
     <button onClick = {()=>handleClick('inc')}>Increment</button>
     <button onClick = {()=>handleClick('dec')}>Decrement</button>

      </header>
    </div>
  );
}
export default Button;