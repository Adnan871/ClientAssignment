import React, { useState } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import axios from 'axios'

function App() {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const [sums, setSum] = useState(0);
  const [serverSum, setServerSum] = useState(0);
  const submitHandle = async() => {
   setSum(parseInt(first)+parseInt(second));
   let t = {
    numberOne: parseInt(first),
    numberTwo: parseInt(second)
   }
  const res =  await axios.post('http://localhost:3053/calculateSum', t);
  setServerSum(res?.data?.sum)
  }
  return (
    <div className="App" style={{marginTop: '150px'}}>
     <div className='d-flex flex-row text justify-content-center'>
      <h4>Enter First Number</h4>
      <input style={{marginLeft: '70px'}} value={first} onChange={(e) => setFirst(e.target.value)}  type='number' name="first" />
     </div>

     <div className='d-flex flex-row justify-content-center' style={{marginTop: '30px'}}>
      <h4 >Enter Second Number</h4>
      <input style={{marginLeft: '40px'}} value={second} onChange={(e) => setSecond(e.target.value)} type='number' name="first" />
     </div>
     <Button onClick={submitHandle} style={{marginTop: '60px', marginRight: '400px' }} variant="primary">Submit</Button>
     <h4>Your Addition Result (from server) is: {serverSum}</h4>
     <h4>Your Addition Result (from ReactJS) is: {sums}</h4>
    </div>
  );
}

export default App;
