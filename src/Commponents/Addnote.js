import React, { useContext } from 'react'
import styled from 'styled-components';
import Notecontext from '../Context/Notecontext';


export default function Addnote() {
  const {
   
    title,setTitle,discription,setDiscription,addnote,setAdd,add,edit,setEdit,edittitle,editdiscription,setEditdiscription,setEdittitle,user,getnotes,editid,setNoteupdate
  } = useContext(Notecontext);


  const editnote= async(noteid)=>{
    await fetch(`https://notebookapi.onrender.com/user/updatenote/${noteid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        id: user.token,
      },
      withCredentials: true,
      body: JSON.stringify({  title:edittitle, discription:editdiscription,date:new Date().toLocaleString() }),
    });

    setEdit(false)
    setAdd(false)

    setEditdiscription("")
    setEdittitle("")
  setNoteupdate(true)
  setTimeout(() => {
    setNoteupdate(false)
  }, 5000);
    getnotes()
  } 

 


  return (
    

    
   
    <Wrapper className='df jc ac'>
      

      <div className={`${add || edit?"adder":""} innercont  df as jc ` }> 
      {edit?  
      <div className='form dfc ac   gap20' >
          <h5>Edit Note</h5>
          <div className='inputs dfc gap20 ac w90'>
            <input type="text"  placeholder='Title' value={edittitle} onChange={(e)=>setEdittitle(e.target.value)} />
            <textarea type="text" placeholder='Discription' value={editdiscription} onChange={(e)=>setEditdiscription(e.target.value)} />
          </div>
          <div className='buttons df ac jc gap20'>

            <button onClick={()=>editnote(editid)} className='globalbtn'>Update</button>
            <button onClick={()=>setEdit(!edit)} className='globalbtn'>Cancel</button>
          </div>
        </div>: 
        <div className='form dfc ac   gap20' >
          <h5>Add Note</h5>
          <div className='inputs dfc  ac w90'>
            <input type="text"  placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <textarea type="text" placeholder='Discription' value={discription} onChange={(e)=>setDiscription(e.target.value)} />
        
          </div>
          <div className='buttons df ac jc gap20'>

            <button onClick={addnote} className='globalbtn'>Add</button>
            <button onClick={()=>setAdd(!add)} className='globalbtn'>Cancel</button>
          </div>
        </div>}
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
  width: 100%;
  height: 100%;
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