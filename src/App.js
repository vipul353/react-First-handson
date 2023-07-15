import ClassComponent from "./components/compo/ClassComponent";
import FunctionComponent from "./components/func/FunctionComponent";
import "./App.css";
import { useState } from "react";

function App() {
  const [isFunc,setIsFunc] = useState(false);
  const [isComp,setIsComp] = useState(false);
  return (
    <>
      <div className="main">
        <h1> Style using Function and Class Component</h1>
        <div className="btn-row">
          <button onClick={()=>setIsFunc(!isFunc)} className="btn">To see style in Functional component</button>
          <button  onClick={()=>setIsComp(!isComp)} className="btn">To see style in Class component</button>
        </div>
        <div className="comp-row">
       <div className="container">
       {isFunc&&<FunctionComponent/>}
       </div>
        <div className="container">
        {isComp&&<ClassComponent/>}
        </div>
        </div>
      </div>
    </>
  );
}

export default App;
