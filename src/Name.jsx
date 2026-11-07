import React, { useState } from "react";
export default function Name(){
    const [name, setName]=useState("Nipa");
    
    const handleName =()=>{
        const fullName="Sayma Islam" + " " + name;
        setName(fullName);
    }
    const nameStyle={
        border:"1px solid black",
        backgroundColor:"lightyellow",
    }
    return(
        <div>
            <h1>My Name: {name}</h1>
            <button onClick={handleName}>Full Name</button>
        </div>
    )
}