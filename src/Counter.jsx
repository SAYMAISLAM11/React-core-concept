import { useState } from "react";
export default function Count(){
    const [count, setCount] = useState(0);
    const handleAdd =()=>{
        const newCount=count+2;
        setCount(newCount);
    }
    const countStyle={

        border:"1px solid black",
        backgroundColor:"lightblue",
    }
    return(
        <div style={countStyle}>
            <h3>Count value:{count}</h3>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}