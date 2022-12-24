import React, { useState } from "react";

function Btn(){
   
    const [count,setCount]=useState(0);

    const handleChange=()=>{
        setCount(count+1);
    };
    return(
        <div>
            <button onClick={handleChange}>Click me</button>
            <h1>clicked num:{count}</h1>
        </div>
    );
}

export default Btn;