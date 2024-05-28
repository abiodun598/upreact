
import './App.css';
import React,{useState} from 'react';

function Course(rocky) {
    
  let [price, setTitle]=useState(rocky.price)
  const changeTitle=()=>[
    setTitle(price*0.9)
  ]
  return (
    <div className="he">
        <img src={rocky.image} alt='joy'/>
        <h2> {rocky.name}</h2>
        <h2>{price}</h2>
        <h2>{rocky.description}</h2>
        <button onClick={changeTitle}>Get discount</button>
    </div>
    
  );
}

export default Course;
