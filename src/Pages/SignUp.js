import React from 'react'
import SignUpForm from '../Components/SingnUpForm'
import { useAuthContext } from '../state/AuthContext'

export default function SignUp() {
  const  { state }=useAuthContext();
  return (
    <div className='signup'>
        <SignUpForm/>
    </div>
  )
}
