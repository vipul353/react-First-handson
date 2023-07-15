import React, { Component } from "react";
import "./style.css";

class ClassComponent extends Component {
  render() {
    return (
      <div className="mainCal">
        <h1>This is created using class component</h1>
        <p>This is done using external CSS</p>
        <p style={{ color: "blue" }}>This is done using inline CSS</p>
      </div>
    );
  }
}

export default ClassComponent;
