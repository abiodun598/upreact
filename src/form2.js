
import { useState } from 'react';
import './App.css';
 function Form() {
    
    const [emailEnter, setemailEnter] = useState('')
    const [passwordEnter, setpasswordEnter] = useState('')
    function Myform(event) {
        event.preventDefault();
        console.log(emailEnter)
        console.log(passwordEnter)
    }
    function emailh(event) {
        setemailEnter(event.target.value)
    }
    function passwordh(event) {
        setpasswordEnter(event.target.value)
    }
    return (
        <>
            <form onSubmit={Myform} className='lod'>
                <h2>Login Form</h2>
                <label htmlFor='email'>Email</label>
                <input
                    type='email'
                    name='email'
                    id='email'
                    onChange={emailh}
                    value={emailEnter}
                /><br />
                <label htmlFor='password'>Password</label>
                <input

                    type='password'
                    name='password'
                    id='password'
                    onChange={passwordh}
                    value={passwordEnter}
                />
                <button type='submit'>send</button>
            </form><br /><br /><br />
        </>

    );
}