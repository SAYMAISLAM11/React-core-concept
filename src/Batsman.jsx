import { useState } from "react";
export default function Batsman(){
    const [score, setScore] = useState(0);
    const [fours, setFours] = useState(0);


    const handleSingle =()=>{
        const single=score+1;
        setScore(single);
    }
    const handleFour =()=>{
        const four=score+4;
        const newFours=fours+1;
        setFours(newFours);
        setScore(four);
    }
    const handleSix =()=>{
        const six=score+6;
        setScore(six);
    }
    const batsmanStyle={
        border:"1px solid black",
        backgroundColor:"lightgreen",
    }

    
    return(
        <div style={batsmanStyle}>
        <h2>Score of all Batsman</h2>
        <h3>Fours: {fours}</h3>
        {/* {
            score>20 && <h3>Score is greater than 20</h3>
        } */}
        {
            score>20 ? <p>Great score!</p> : <p>Keep practicing {score}</p>
        }
        <h3>Score:{score}</h3>
        <button onClick={handleSingle}>Single point</button>
        <button onClick={handleFour}>four point</button>
        <button onClick={handleSix}>six point</button>
        </div>
        
    )
}