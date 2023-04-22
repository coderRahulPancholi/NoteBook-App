import React  from 'react'
// import {  Route, Routes } from "react-router-dom";
import Home from './Home';
// import Login from './Login';

// import Singup from './Singup';
// import Notecontext from '../Context/Notecontext'
// import About from './About';
import Navbar from '../Commponents/Navbar';
import Loading from '../Commponents/Loading';
// import { useContext } from 'react';
// import Loading from '../Commponents/Loading';

export default function Ihome() {

    // const {auth} = useContext(Notecontext)
  return (
    <div>
     
     {/* <Loading/> */}
     <Navbar/>
     <Loading/>
     <Home/>
        
    </div>
  )
}
