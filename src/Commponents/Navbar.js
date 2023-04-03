import React  from 'react'
import { useContext } from 'react'
import styled from 'styled-components'
import Notecontext from '../Context/Notecontext'
import { FcExport } from "react-icons/fc";
import { FiMenu } from "react-icons/fi";
import { Link } from 'react-router-dom';



export default function Navbar() {
    const {auth,drop,setDrop,navigate,logout}= useContext(Notecontext)
    

   
   
  
  return (
  <MainContainer >
    <div className="chid df ac jsb ">
      <div className="item df ac jc gap15 h100  ">
        <h2 onClick={()=>navigate("/")} style={{cursor:"pointer"}} > NoteBook</h2>
       
      </div>

      {auth?

      
      <div className="item df ac jc gap15 ">
      
        
        <div className='userlogo df ac jc' onClick={()=>navigate("/about")} >
          {/* <span >{uname.slice(0,1)} </span> */}
          
        
        </div>
        <div onClick={()=>setDrop(!drop)} style={{cursor: "pointer"}}>
            <FiMenu size={25}/>

          </div>


          
        <div className={`${drop?" droped ":" "} dropmenu dfc ac jss gap15`} >
        
         {/* <h4> Hello {uname.toUpperCase().slice(0,5)}</h4> */}
         <li><Link to="/" className={window.location.pathname ==="/"?"active":""}>Home</Link></li>
         <li><Link to="/about" className={window.location.pathname ==="/about"?"active":""}>About</Link></li>
         
         <button onClick={logout}><FcExport size={25}/>Logout</button>

        </div>
        
        
      </div>:<>Login</>}
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
border-bottom: 0.5px solid black;

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
  cursor: pointer;
  

  span{
    font-size: 25px;
    pointer-events: none;
  }
}
.dropmenu{
  /* display: none; */
  display: flex;
  top: 75px;
  right: 0%;
  width: 50%;
  height: calc(100vh - 75px);
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

.active{
  /* color: red; */
  padding: 5px;
  border-bottom: 0.5px solid black;
}

`