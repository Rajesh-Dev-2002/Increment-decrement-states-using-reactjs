
import { useState } from "react";
import "./App.css";
function App() {
  
  const [num,setNum]=useState(0);

  const increment =(event)=>{
    
    // console.log(a+1)
    setNum(num+1)

  }
  const decrement=()=>{
    if(num>0){
    setNum(num-1)
    }
    else{
      alert("from now its never be decrement")
      setNum(0)
      
    }
    
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="bor">
          <h1>{num}</h1>
             <div className="btn">
                <button type="submit" className="col" onClick={increment} >Increment</button>
                <button type="submit" className="col" onClick={decrement}>Decrement</button>
             </div>
        </div>
      </header>
    </div>
  );
}

export default App;
