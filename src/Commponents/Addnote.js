import React, { useContext } from 'react'
import styled from 'styled-components';
import Notecontext from '../Context/Notecontext';

export default function Addnote() {
    const {
        setAdd,
        
      
      } = useContext(Notecontext);
  return (
    <Wrapper className='w100 df ac jc '>
        <button onClick={()=>setAdd(true)}>Add</button>
    </Wrapper>

    
  )
}
const Wrapper = styled.div`
position: fixed;
bottom: 10px;




`