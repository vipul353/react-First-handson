import React from "react";
import './style.css';

function FunctionComponent() {
  return (
    <div className="mainfun">
    <h1>
      This is created using functional component
    </h1>
    <p>This is done using external CSS</p>
    <p style={{color:'blue'}}>This is done using inline CSS</p>
    </div>
  )
}

export default FunctionComponent