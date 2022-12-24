import React, { useState } from "react";
import "./index.css";

function Calculator(){
    const[calc,setCalc]=useState("");
    const[result,setResult]=useState("");

    const ops=['/','*','+','-','.'];

    const updateCalc = value=>{
        if(ops.includes(value) && calc=== '' ||
        ops.includes(value) && ops.includes(calc.slice(-1)))
        {
            return;
        }

        setCalc(calc + value);

        if(!ops.includes(value)){
            setResult(eval(calc+value).toString());
        }

    }

    const calculateVal=()=>{
        setCalc(eval(calc).toString());
    }

    const delValue=()=>{
        if(calc==''){
            return;
        }
        const value= calc.slice(0,-1);
        setCalc(value);
        setResult(eval(value));
    }

    const createDigits =()=>{
        const digits=[];
        for(let i=1;i<10;i++){
            digits.push(
                <button onClick={()=> updateCalc(i.toString())} 
                key={i}>
                    {i}
                </button>
            )
        }
        return digits;
    }

    return(
        <div className="App">
            <div className="Calculator">
                <div className="Display">
                    {result ? <span>({result})</span>: ''} 
                    &nbsp;
                    {calc || "0"}
                </div>

                <div className="Operators">
                    <button onClick={()=> updateCalc('/')}>/</button>
                    <button onClick={()=> updateCalc('*')}>*</button>
                    <button onClick={()=> updateCalc('+')}>+</button>
                    <button onClick={()=> updateCalc('-')}>-</button>
                    
                    <button onClick={delValue}>DEL</button>
                </div>

            <div className="Digits">
                {createDigits()}
            <button onClick={()=> updateCalc('0')}>0</button>
            <button onClick={()=> updateCalc('.')}>.</button>
            <button onClick={calculateVal}>=</button>
            </div>    
            </div>
            
        </div>
    );
}

export default Calculator;