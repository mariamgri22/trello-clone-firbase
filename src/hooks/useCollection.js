import React, { useEffect, useState } from 'react'
import { db } from '../firbase';
import { ACTION_TYPES, useBootcampContext } from '../state';

export default function useCollection(path = "/tasks") {
 
    const [isLoading,setIsLoading]=useState(false);

    const {dispatch}=useBootcampContext();
    useEffect(()=>{
     setIsLoading(true);
      let ref=  db.collection(path);
      let unsub;
      try{
        unsub= ref.onSnapshot(snapshot=>{
            let result=[];
              snapshot.docs.forEach(doc=>{
              result.push({id:doc.id,...doc.data()})
          })  
          dispatch({type:ACTION_TYPES.SET_TASKS,tasks:result})
          setIsLoading(false);
      })
      }
      catch(err){
          throw new Error("something is wrong")
      }
 return ()=>unsub();
},[])

 return {isLoading}
}
