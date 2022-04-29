import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useBootcampContext } from '../state';

export default function PrivateRoote({children}) {
   const {state:{isLoggedIn}}=useBootcampContext();
    
   const navigate= useNavigate();
   if(!isLoggedIn){
      return <Navigate to='./login' replace/>
   }
    return children;
}
