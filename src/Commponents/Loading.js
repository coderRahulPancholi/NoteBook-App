import React, { useContext } from 'react'
import styled from 'styled-components'
import Notecontext from '../Context/Notecontext'

export default function Loading() {
    const {loading}= useContext(Notecontext)
  return (
    <Wrapper >
        {loading?<div className='bar' ></div>:null}
      
    </Wrapper>
  )
}

const Wrapper = styled.div`
width: 100vw;
/* position: fixed;
top: 0; */
z-index: 999;


.bar{
    /* width: 100%; */
    height: 2px;
    background-color: red;
    animation: ani 1s ease-out  1  ;

    @keyframes ani {
        0%{
width: 0px;
        }
        100%{
width: 90%;
        }
        
    }
 
}



`