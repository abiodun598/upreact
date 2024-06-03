
import './App.css';
import React, { useState } from 'react';

export function Course(rocky) {
  let [price, setTitle] = useState(rocky.price);
  let [buttonclick, setIsshow] = useState(true);

  const changeTitle = () => {
    setTitle(Math.floor(price * 0.9));
    setIsshow(false)
  }

  const Buttonchange = () => {

  };


  const [shown, setshown] = useState(false);
  const toggle = () => {
    setshown((shown) => !shown)
  }
  return (
    <>
      <div className="he">
        <img src={rocky.image} alt='joy' />
        <h2> {rocky.name}</h2>
        <div>
          <h2 style={{ textDecoration: buttonclick ? 'none' : 'line-through' }} buttonclick:false>{price}</h2> 
          <h2 style={{ display: buttonclick ? 'none' : 'inline-block', marginLeft: '10px'}}>{price}</h2>
        </div>
        <button onClick={toggle}>description</button>{shown &&
          <h2>{rocky.description}</h2>
        }<br />

        {buttonclick ? (<button onClick={changeTitle}>Get discount</button>) :
          (<button onClick={Buttonchange}>changed</button>)}
      </div>

    </>
  );
}

export function Greet({ bola }) {

  if (bola) {
    return <h1>Welcome Back</h1>
  }
  else {
    return <h1>Pls Log In</h1>
  }
}

