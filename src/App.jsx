import './App.css';
import Count from './Counter.jsx';
import Batsman from './Batsman.jsx';
import Name from './Name.jsx';

function App() {
  function handleClick(){
    alert("show your message")
  }
  // arrow function 
 const handleLogin = () =>{
    alert("Login successful")
  }

  const handleAdd=(num)=>{
    const add=num+10;
    alert(add);
  }
  return (
    <>
    <h3>React and Vite</h3>
    <Name></Name>
    <Batsman></Batsman>
    <Count></Count>
    <button onClick={handleClick}>Click me</button>
    <button onClick={handleLogin}>login</button>
    <button onClick={()=> alert('Login2 Done')}>Login 2</button>
    <button onClick={()=> handleAdd(5)}>Number add</button>
    </>
  )
}

export default App
