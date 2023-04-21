import React  from 'react'
import { useContext } from 'react'
import styled from 'styled-components'
import Notecontext from '../Context/Notecontext'
import { FcExport } from "react-icons/fc";
import { FiMenu } from "react-icons/fi";
import { MdAssignmentAdd } from "react-icons/md";
import { Link } from 'react-router-dom';



export default function Navbar() {
    const {auth,drop,setDrop,navigate,logout,uname,loading,add ,setAdd}= useContext(Notecontext)
    

   
   
  
  return (
  <MainContainer >
    <div className="chid df ac jsa ">
      <div className="item df ac jc gap15 h100  ">
        <h2 onClick={()=>navigate("/")} style={{cursor:"pointer"}} > NoteBook</h2>
        { auth && window.location.pathname ==="/"?
        <button onClick={()=>setAdd(!add)} className='bt df ac jsa gap10'><MdAssignmentAdd/> <span>Add note </span> </button>:null
        }
        
       
      </div>
     

      {auth?

      
      <div className="item df ac jc gap15 ">
      
        
        <div className='userlogo df ac jc' onClick={()=>navigate("/about")} >
          <span >{ uname.slice(0,1).toUpperCase()} </span>
          
        
        </div>
        <div onClick={()=>setDrop(!drop)} style={{cursor: "pointer"}}>
            <FiMenu size={25}/>

          </div>


          
        <div className={`${drop?" maindrop ":" "} maindropno df ac jc gap10 `} >
          <div className='blankdiv' onClick={()=>setDrop(!drop)}>
            

          </div>
          <div className={`${drop?" droped ":" "} dropmenu dfc ac jss gap15`}>
          <h4> Hello {loading?"Your Name": uname.toUpperCase().slice(0,5)}</h4>
         <li><Link to="/" className={window.location.pathname ==="/"?"active":""}>Home</Link></li>
         <li><Link to="/about" className={window.location.pathname ==="/about"?"active":""}>About</Link></li>
         
         <button onClick={logout}><FcExport size={25}/>Logout</button>
          </div>
        
        

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

  width: 100%;
  height: calc(100vh - 75px);
  max-width: 500px;
  
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
.maindropno{
  position: fixed;
  width: 100%;
  height: calc(100vh - 75px);
  top: 75px;
  right: 0%;
  transition: 1s;
 transform: translateX(100%);

 


 .blankdiv{
 width: 100%;
  height: 100%;
  
  /* opacity: 40%; */
 }
}
.maindrop{
  
  transition: 0.1s;
  transform: translateX(0);
}


.bt{
  padding: 7px;
  background-color: #262ea1;
  border-radius: 5px;
  color: white;

  &:hover{
    background-color: blue;
  }

}

`