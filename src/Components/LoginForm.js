import React, { useState } from 'react'
import { auth } from '../firbase';
import Input from './Input'

export default function LoginForm() {
  const [email,setEmail]=useState();
  const [pass,setPass]=useState()
  const handleSingUp=()=>{
      if(email && pass){
          auth.createUserWithEmailAndPassword(email,pass)
          .then(res=>  res.user.updateProfile({display:"Mariam"}))
      }
      
  }
    return (
    <div className='loginForm'>
      <Input value={email} onChange={(e)=>setEmail(e.target.value)} name="Email"/>
      <Input value={pass} onChange={(e)=>setPass(e.target.value)} name="Pass"/>
      <button onClick={handleSingUp}>Sign up</button>
    </div>
  )
}
