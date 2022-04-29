import { createContext, useContext, useReducer } from "react"

const defaultState={
    isModalOpen:false,
    isLoggedIn:false,
    currentTask:{},
    user:null,
    tasks:[],

}
const ACTION_TYPES={
    SET_TASKS:"SET_TASKS",
    TOGGLE_MODAL:"TOGGLE_MODAL",
    ADD_TASK:"ADD_TASK",
    UPDATE_CURRENT_TASK:"UPDATE_CURRENT_TASK",
    DELETE_TASK:"DELETE_TASK",
    EDIT_TASK:"EDIT_TASK"
}
function reducer(state,action){
   switch(action.type){
       case ACTION_TYPES.SET_TASKS:{
         return {...state,tasks:action.tasks}
       }
       case ACTION_TYPES.ADD_TASK:{
         return {...state,tasks:[...state.tasks, action.tasks]}
       }
       case ACTION_TYPES.EDIT_TASK:{
           let newState=state.tasks.map(tasks=>{
               if(task.id===action.task.id){
                   return action.task
               }
               else{
                   return task
               }
           })
           return {...state,tasks:newState}

      }
       case ACTION_TYPES.DELETE_TASK:{
        return {...state,tasks:state.tasks.filter(task=>task.id !==action.id)}
      }
       case ACTION_TYPES.TOGGLE_MODAL:{
          if(state.isModalOpen){
               return{ ...state,isModalOpen:!state.isModalOpen,currentTask:{}}
          }
           return{ ...state,isModalOpen:!state.isModalOpen}
        }
       case ACTION_TYPES.UPDATE_CURRENT_TASK:{
        return{ ...state,currentTask:{...state.currentTask,...action.task}}
       }
   }
}
const Context=createContext(defaultState);
const useBootcampContext=()=>useContext(Context);

function ContextProvider({children}){
     const [state, dispatch]=useReducer(reducer,defaultState);
      return <Context.Provider value={{state,dispatch}}>
          {children}
      </Context.Provider>
    }
export  { ContextProvider ,useBootcampContext,ACTION_TYPES,defaultState};