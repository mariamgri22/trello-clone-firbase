;

import "./App.css";
import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from './Pages/home'
import Board from "./Pages/Board";
import SingleBoard from "./Pages/SingleBoard";
import { ContextProvider } from "./state";
import PrivateRoote from "./Components/PrivateRoote";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import { AuthContext } from "./state/AuthContext";

const App = () => {
  

  return (
    <AuthContext>
     <ContextProvider>
        <BrowserRouter>
         <Routes>
           <Route path="/" element={<PrivateRoote><Home /></PrivateRoote>} />
           {/* <Route path="/" element={<Home />} /> */}
            <Route path="/boards" element={<Board />}/>
            <Route path="/boards/:boardId" element={<SingleBoard />} /> 
            {/* <Route path="/sign-up" element={<SignUp/>}/> */}
           <Route path="/login" element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>,
     </ContextProvider>
     </AuthContext>
  )
};
export default App;
