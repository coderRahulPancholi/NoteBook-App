import React, { useContext } from 'react'
import styled from 'styled-components';
import Notecontext from '../Context/Notecontext';
import { FiPlus } from "react-icons/fi";

export default function Addnote() {
    const {
        setAdd,
        
      
      } = useContext(Notecontext);
  return (
    <Wrapper className='w100 df ac jc '>
        <button onClick={()=>setAdd(true)} className="df ac jc"><FiPlus size={30}/></button>

        
    </Wrapper>

    
  )
}
const Wrapper = styled.div`
position: fixed;
bottom: 10px;


button{
  background-color: aliceblue;
  width: 50px;
  height: 50px;
  border-radius: 100%;
}



`