import React, { useContext } from 'react'
import {  Route, Routes } from "react-router-dom";
import Home from './Home';
// import Login from './Login';

import Singup from './Singup';
import Notecontext from '../Context/Notecontext'
// import Loading from '../Commponents/Loading';

export default function Ihome() {

    const {auth} = useContext(Notecontext)
  return (
    <div>
     
     {/* <Loading/> */}
        <Routes>
        <Route path="/" element={auth?<Home />:<Singup/>} />
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/singup" element={<Singup />} /> */}
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  )
}
