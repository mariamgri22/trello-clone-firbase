import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// useEffect(()=>{
//   setIsLoading(true);
//   let unsub=  db.collection('/tasks').onSnapshot(snapshot=>{
//        let result=[];
//         snapshot.docs.forEach(doc=>{
//           return  result.push({id:doc.id,...doc.data()})
//         })
//         dispatch({type: ACTION_TYPES.SET_TASKS,tasks:result});
//         setIsLoading(false);
//         console.log("🚀 ~ file: SingleBoard.js ~ line 8 ~ SingleBoard ~ dispatch", state)
//        // 
//     })
//     return ()=>unsub();
// },[])
// const openModal=()=>{
//   dispatch({type:ACTION_TYPES.TOGGLE_MODAL})
// }
// const deleteTask=(id)=>{
// console.log("🚀 ~ file: SingleBoard.js ~ line 31 ~ deleteTask ~ id", id);
//   db.collection('/tasks').doc(id).delete(id);
// }
// const editTask =(id)=>{
//   db.collection('/tasks').doc(id).update({title:"holla Arman"});
// }
