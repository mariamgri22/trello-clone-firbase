// import React, { useEffect, useRef , useLayoutEffect, useState} from 'react'
// import { Link } from 'react-router-dom'
// import Button from '../Components/Button/Button';
// import Modal from '../Components/Modal';
// import { withAuth } from '../HOC/withAuth'

// function  home({user}) {
//   const ref=useRef();
//   const [isModalOpen,setIsModalOpen]=useState(false);
  
//   useEffect(()=>{
//   console.log("🚀 ~ file: home.js ~ line 8 ~ useEffect ~ useEffect", ref)
    
//   },[])
//   useLayoutEffect(()=>{
//     console.log("🚀 ~ file: home.js ~ useEffect  2~ useEffect", ref)
      
//     },[])
 
//   return (
//     <div ref={ref}>
//         <h1>Home</h1>
//         <button onClick={()=>setIsModalOpen(!isModalOpen)}>Toggle</button>
//         {isModalOpen && <Modal/>}
//         <Link state={{referer:'US'}} to="/products">Go to products</Link>
//         <Button>holla</Button>
//         </div>
//   )
// }

// export default withAuth(home);

import React from 'react'
import { Link } from 'react-router-dom'
import NewModal from '../Components/NewModal'

export default function home() {
  return (
    <div>
      <Link to='/boards'>home</Link>
     
    </div>
  )
}
