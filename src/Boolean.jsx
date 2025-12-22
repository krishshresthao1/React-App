import React from 'react'
import { useState } from "react";

const Boolean = () => {
  
    const [toggle , useToggle] = useState("1");
      const change = () => {
          console.log("Clicked");
         useToggle(!toggle);
      }
    
      return (
        <>
          {/* <Counter /> */}
          {toggle ? <h1>True</h1> : <h1>False</h1>}
          <button onClick={change}>toggle</button>
        </>
      );
}

export default Boolean