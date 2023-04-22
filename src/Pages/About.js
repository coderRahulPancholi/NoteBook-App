import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import styled from 'styled-components'
import Notecontext from '../Context/Notecontext'
import { FcExport } from "react-icons/fc";
import Navbar from '../Commponents/Navbar'

export default function About() {

    const{uname,auth,navigate,setDrop,logout,uid,uemail,loading} = useContext(Notecontext)


    useEffect(()=>{
        setDrop(false)
        if(!auth){
            navigate("/")
        }else{

        }
        // eslint-disable-next-line
    },[])
  return (
    <> <Navbar/>
    <Wrapper>
     
        {!loading ?<div className='w100 h100 dfc ac jsa gap15'>
            <div className='userlogo df ac jc '><span>{auth?uname.slice(0,1):null}</span></div>
            <div className='info'>
                <li><b>Name:-</b>  {uname}</li>
                <li><b>Id:-</b>  {uid}</li>
                <li><b>Email:-</b>  {uemail}</li>

                
            </div>

        </div>:<></>
        }
       
        <button onClick={logout}><FcExport size={25}/>Logout</button>

    </Wrapper></>
  )
}
const Wrapper = styled.div`
padding: 20px;
button{
  border: none;
  background-color: whitesmoke;
  padding: 10px;
  border-radius: 7px;
  position: fixed;
bottom: 10px;
right: 1%;
  &:hover{
    background-color: wheat;
  }
}

.userlogo{
    width: 200px;
    height: 200px;
    border-radius: 100%;
    background-color: aliceblue;

    span{
        font-size: 70px;
    }
}

`