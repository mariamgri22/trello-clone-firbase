import React from 'react'
import useFirestore from '../hooks/useFirestore'
import { ACTION_TYPES, useBootcampContext } from '../state'

export default function Task({id,status,title,category,description,priority}) {
 
  const{deleteDoc,editDoc}=useFirestore()
  const {dispatch}=useBootcampContext();
  
  const deleteTask=()=>{
    deleteDoc('/tasks',id)
  }
  const editTask=()=>{
    dispatch({type:ACTION_TYPES.TOGGLE_MODAL})
    dispatch({type:ACTION_TYPES.UPDATE_CURRENT_TASK,task:{id,status,title,category,description,priority}})
  }

    return (
    <div className='task' key={id}>
    <span>{title}</span>
    <span>{ priority}</span>
    <button onClick={()=>deleteTask( id)}>Delete</button>
    <button onClick={()=>editTask(id)}>Edit</button>
</div>
  )
}
