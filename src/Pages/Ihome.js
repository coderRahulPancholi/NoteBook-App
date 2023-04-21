import React  from 'react'
import {  Route, Routes } from "react-router-dom";
import Home from './Home';
// import Login from './Login';

import Singup from './Singup';
// import Notecontext from '../Context/Notecontext'
import About from './About';
// import { useContext } from 'react';
// import Loading from '../Commponents/Loading';

export default function Ihome() {

    // const {auth} = useContext(Notecontext)
  return (
    <div>
     
     {/* <Loading/> */}
        <Routes>
        {/* <Route path="/" element={auth?<Home/>:<Singup/>} /> */}
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Singup />} /> 
        <Route path="/about" element={<About/>}/>
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  )
}
