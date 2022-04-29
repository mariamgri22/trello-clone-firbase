import React, { useEffect, useReducer, useState } from 'react'
import { Link } from 'react-router-dom'
import NewModal from '../Components/NewModal';
import TaskColumn from '../Components/TaskColumn';
import { db } from '../firbase'
import useFirestore from '../hooks/useFirestore';
import { ACTION_TYPES, useBootcampContext } from '../state'
import useCollection from '../hooks/useCollection';

const STATUSES={
  TODO:'to do',
  DOING:"doing",
  DONE:"done",
}

export default function SingleBoard() {
   const {state,dispatch}=useBootcampContext();
  
   const {isLoading}= useCollection('/tasks');
   
   return (
    <div className='columnWrapper'>
        {isLoading? <div> ....loading</div> :<>
        <TaskColumn tasks={state.tasks} status={STATUSES.TODO}/>
        <TaskColumn tasks={state.tasks} status={STATUSES.DOING}/>
        <TaskColumn tasks={state.tasks} status={STATUSES.DONE}/>
        </>}
       {state.isModalOpen && <NewModal/>}
    </div>
  )
}






