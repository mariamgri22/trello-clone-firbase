import React from 'react'
import LoginForm from '../Components/LoginForm';
import { useBootcampContext } from '../state'

export default function Login() {
  const { dispatch }=useBootcampContext();
  return (
    <div>
      <LoginForm/>
    </div>
  )
}
