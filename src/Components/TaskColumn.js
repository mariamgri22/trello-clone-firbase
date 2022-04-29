import React, { useMemo } from 'react'
import { ACTION_TYPES, useBootcampContext } from '../state';
import Task from './Task';

export default function TaskColumn({status,tasks}) {
  const {dispatch} = useBootcampContext();
 
  const filteredTask = useMemo(()=>tasks
  .filter(item=>item.status === status),[tasks,status]);
  
  const addTask=()=>{
     dispatch({type:ACTION_TYPES.TOGGLE_MODAL})
     dispatch({type:ACTION_TYPES.UPDATE_CURRENT_TASK,task:{ status }})
  }
 return (
    <div>
       {filteredTask.map((item) => <Task key={item.id} {...item}/>)}
       <button onClick={addTask}>Add tasks</button>
    </div>
  )
}
