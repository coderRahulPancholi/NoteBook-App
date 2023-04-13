import React, { useContext } from 'react'
import styled from 'styled-components';
import Notecontext from '../Context/Notecontext';


export default function Addnote() {
  const {
   
  edittitle,editdiscription,full,setFull
  } = useContext(Notecontext);


 
 


  return (
    

    
   
    <Wrapper className='df jc ac'>
      

      <div className={`${full?"adder":""} innercont  df as jc ` }> 
      {full?  
      <div className='form dfc ac   gap20' >
          <h5>Edit Note</h5>
          <div className='inputs dfc gap20 ac w90'>
            <input type="text"  placeholder='Title' value={edittitle}  />
            <textarea type="text" placeholder='Discription' value={editdiscription}  />
          </div>
          <div className='buttons df ac jc gap20'>

            
            <button onClick={()=>setFull(false)} className='globalbtn'>Cancel</button>
          </div>
        </div>:null}
      </div>

    

      



      
   





   </Wrapper>
   

   
   
   

    
  )
}


const Wrapper = styled.div`

 

 


.innercont{
  position: fixed;
 top: 0;
 z-index: 999;
   
 width: 100vw;
   transform: translateY(-150%);
  
  /* max-width: 500px; */

  /* min-height: 300px; */


    
    transition: 0.5s;
    
  
    overflow: hidden;
    

}
.adder{
  min-height: 300px;
  width: 100vw;
    height: 100vh;
  padding: 10px;
 
  background-color: white;
  transform: translateY(0px);
 

}

.form{
  width: 90%;
  height: 90%;
  /* max-width: 500px; */
  padding: 15px;
  background-color: 
 white
;

box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
  border-radius: 10px;

}

.inputs{
 box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px; 
 border-radius: 10px;
 background-color: #f2f2f2;
 height: 100%;

  input{
width: 100%;
padding: 10px;
border: none;
outline: none;
background-color: #f2f2f2;
height:70px;
/* pointer-events: none; */
border-radius: 10px;
/* box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px; */




  }
  textarea{
    flex: 1;
    flex-basis: 100px;
    border: none;
    outline: none;
    border-radius: 10px;
    width: 100%;
padding: 10px;

   
   background-color: #d9d9d9;
    /* box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px; */
    resize: none;
  
    
  }
}











`