import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './register.css';

function Login({login}) {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    return (
      <div className='registerPage'>
      <div className='registerForm'>
        <h3> Login </h3>
        <input
          placeholder="Email..."
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <input
          placeholder="Password..."
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />

        <button onClick={() => login(loginEmail, loginPassword)}> Login</button>
        <Link className='link' to="/register"><p>Create an account</p></Link>
    </div>
    </div>
    )
}

export default Login
