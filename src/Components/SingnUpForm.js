import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../firbase';
import useSignUp from '../hooks/useSignUp';
import Input from './Input'

export default function SignUpForm() {
  const [email,setEmail]=useState();
  const [pass,setPass]=useState()
  const [username,setUsername]=useState('');
 
  const {isPending,error,signup}=useSignUp();
  const navigate=useNavigate();
  const handleSingUp=()=>{
      if(email && pass){
        signup(email,pass,username).then(()=>navigate("/boards"))
      }
  }
    return (
    <div className='loginForm'>
     {isPending? <div>...loading</div>:<>
     <h1>Login</h1>
     {error.isError && <span>{error.message}</span>}
     <Input value={email} onChange={(e)=>setEmail(e.target.value)} name="Email"/>
      <Input value={pass} onChange={(e)=>setPass(e.target.value)} name="Pass"/>
      <Input value={username} onChange={(e)=>setUsername(e.target.value)} name="UserName"/>
     
      <button onClick={handleSingUp}>Sign up</button>
    
     </>}
    </div>
  )
}

