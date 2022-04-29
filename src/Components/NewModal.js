import React, { useEffect, useState } from 'react'
import useFirestore from '../hooks/useFirestore';
import { ACTION_TYPES, useBootcampContext } from '../state';
import Input from './Input'



export default function NewModal() {

 const [title, setTitle]=useState('');
 const [description, setDescription]=useState('');
 const [category, setCategory]=useState('');
 const {dispatch, state:{ currentTask }}=useBootcampContext();

 useEffect(()=>{
   if(currentTask.id){
     setDescription(currentTask.description);
     setCategory(currentTask.category);
     setTitle(currentTask.title)
   }
 },[])

 const {addDoc,editDoc}=useFirestore();

 const handleCreateTask= async ()=>{
   const task={title,description,category,
    priority: currentTask.priority || "low", 
    status:currentTask.status}
    dispatch({type:ACTION_TYPES.TOGGLE_MODAL})
  if(currentTask.id){
    editDoc('/tasks',{...task,id:currentTask.id})
  }
  else{
    addDoc('/tasks',task)
  }
  }

  return (
    <div className='modal'>
        <div className='modalContent'>
           <Input value={title} onChange={(e)=>setTitle(e.target.value)} name= "Title"/>
           <Input value={description} onChange={(e)=>setDescription(e.target.value)} name= "Description"/>
           <Input value={category} onChange={(e)=>setCategory(e.target.value)} name="Category"/>
           <button onClick={handleCreateTask}>create task</button>
        </div>
    </div>
  )
}
