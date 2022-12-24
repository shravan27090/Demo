import React, { useState } from "react";
import "./index.css"

function Add(){

const[num1,setNum1]=useState();
const[num2, setNum2]=useState();
const[opr,setOpr]=useState();
const[tot, setTot]=useState();

function handleClick(){
  if(opr.match(/^[A-Za-z0-9]*$/)){
    return;
  }
setTot(eval(Number(num1)+(opr)+Number(num2)));
}

  return (
    
      <div className="loginbackground"> 
      <div className="header">
      <h1 >Calculate 2 numbers</h1>
      </div>
      <div className="box">
        <div className="container" >
        <div className="field" style={{marginTop:'40px'}}> 
          <label> Input 1</label>
          <input 
          type="number" 
          name="num1"
          onChange={(event)=>{
            setNum1(event.target.value);
          } }
          onKeyDown={(evt)=> evt.key==='e' && evt.preventDefault()}>
          </input>
        </div>
        <div className="field">
          <label>Input 2</label>
          <input 
          type="number"
          name="num2"
          onChange={(event)=>{
            setNum2(event.target.value);
          } }
          onKeyDown={(evt)=> evt.key==='e' && evt.preventDefault()}></input>
          </div>
          <div className="field">
          <label>Operator</label>
          <input 
          type="operator"
          name="opr"
          onChange={(event)=>{
            setOpr(event.target.value);
          } }/>
      </div>          
        <div className="b">
        <button onClick={handleClick}>
          Calculate</button>
        </div>
        
        <div className="field">
        
          <label>Total = </label>
          <input type="number" 
          value={tot}
          disabled={true} onKeyDown={(evt)=> evt.key==='e' && evt.preventDefault()}></input>
        </div>
        </div>
      </div>
      </div>
  
  );
}

export default Add;

