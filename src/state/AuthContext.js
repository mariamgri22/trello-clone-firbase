import { createContext, useContext, useReducer } from "react"

const defaultState={
    isLoggedIn:false,
    user:null,
  
}
const AUTH_ACTION_TYPES={
    LOGIN:"LOGIN",
    LOGOUT:"LOGOUT",
    SINGH_UP:"SINGH_UP",
}
function reducer(state,action){
   switch(action.type){
       case AUTH_ACTION_TYPES.LOGIN:{
         return {isLoggedIn:true,user:action.user}
       }
       case AUTH_ACTION_TYPES.LOGOUT:{
        return defaultState
       }
       case AUTH_ACTION_TYPES.SINGH_UP:{
        return {isLoggedIn:true,user:action.user}
      }
      default:return defaultState;
    }  
}
const Context=createContext(defaultState);
const useAuthContext=()=>useContext(Context);

function AuthContext({children}){
     const [state, dispatch]=useReducer(reducer,defaultState);
      return <Context.Provider value={{state,dispatch}}>
          {children}
      </Context.Provider>
    }
export  { AuthContext ,useAuthContext,AUTH_ACTION_TYPES,defaultState};