import  { useState } from 'react'
import { Navigate } from 'react-router-dom';
import { auth } from '../firbase';
import { AuthContext, AUTH_ACTION_TYPES, useAuthContext } from '../state/AuthContext';

export default function useSignUp() {
  const [isPending,setIsPending]=useState(false);
  const [error,setError]=useState({isError:false,message:''});
  const {dispatch}=useAuthContext();
  const signup= async(email,pass,username="mary")=>{
    setIsPending(true);
    //request
    try{
      let res = await auth.createUserWithEmailAndPassword(email,pass)
      if(username){
        let updateRes=res.user.updateProfile({displayName:username})
        console.log("🚀 ~ file: useSignUp.js ~ line 14 ~ signup ~ updateRes", updateRes)
      }
      setIsPending(false);
      dispatch({type:AUTH_ACTION_TYPES.SINGH_UP,user:res.user})
     // return  <Navigate replace to="/home"/>
    }
    catch(err){
        setError({isError:true,message:err.message});
        setIsPending(false)
    }
  }
  return {signup,error,isPending}
}
