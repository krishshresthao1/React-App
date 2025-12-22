import { useState } from 'react'
import './App.css'
import Name from './Name'
import Parentcomponent from './parentcomponent'

function counter() {
  const [state, setState] = useState(1);

  const increment = () => {
    setState(prevState => prevState + 1);
    setState((prevState) => prevState + 1);
  }

  const decremnet = () => {
    setState(state - 1);
  };

  return (
    <>
      <button onClick={increment}>+</button>
      <h1>{state}</h1>
      <button onClick={decremnet}>-</button>
    </>
  );
}

export default counter

