import React, { useState } from 'react'
import { useContext } from 'react'
import styled from 'styled-components'
import Notecontext from '../Context/Notecontext'
import { FcExport } from "react-icons/fc";
import { FiMenu } from "react-icons/fi";



export default function Navbar() {
    const {uname,auth}= useContext(Notecontext)
    const [drop,setDrop] = useState(false)

    const logout = async ()=>{
        await localStorage.clear()
        alert("Logout")
        window.location.reload(true);
    // navigate("/login")
         
     }
   
  
  return (
  <MainContainer >
    <div className="chid df ac jsb ">
      <div className="item df ac jc gap15 h100  ">
        <h2 > NoteBook</h2>
       
      </div>

      {auth?

      
      <div className="item df ac jc gap15 ">
      
        
        <div className='userlogo df ac jc' >
          <span >{uname.slice(0,1)} </span>
          
        
        </div>
        <div onClick={()=>setDrop(!drop)} style={{cursor: "pointer"}}>
            <FiMenu size={25}/>

          </div>


          
        <div className={`${drop?" droped ":" "} dropmenu dfc ac jss`}>
        <p>Hello</p>
  <h4> {uname.toUpperCase().slice(0,5)}</h4>
        <button onClick={logout}><FcExport size={25}/>Logout</button>
        </div>
        
        
      </div>:null}
    </div>


  </MainContainer>
  )
}

const MainContainer = styled.nav`
width: 100vw;
min-height: 70px;
position: sticky;
z-index: 9;
background-color: white;
top: 0;

.chid{
  padding: 10px;
}
button{
  border: none;
  background: none;
}


.userlogo{
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: aliceblue;
  

  span{
    font-size: 25px;
    pointer-events: none;
  }
}
.dropmenu{
  /* display: none; */
  display: flex;
  top: 70px;
  right: 0%;
  width: 50%;
  height: 100vh;
  max-width: 300px;
  position: fixed;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
z-index: 99;
padding: 10px;
 /* height: 200px; */
 background-color: white;
 transition: 0.5s;
 transform: translateX(100%);

}

.droped{
  
  transition: 0.5s;
  transform: translateX(0);
  

}


`