import React, { useContext } from "react";
import styled from "styled-components";
import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineFileDone } from "react-icons/ai";
import { AiOutlineFullscreen } from "react-icons/ai";
import Notecontext from "../Context/Notecontext";

export default function Notescard({ notetitle, notediscription, dltnote, note ,id,status,date}) {
  // const [full, setfull] = useState(false);

  const{editnote,user,getnotes,setFull,setEdit} = useContext(Notecontext)


  const updatestatus= async(noteid)=>{
    
    
     await fetch(`http://localhost:8000/user/updatenotestatus/${noteid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        id: user.token,
      },
      withCredentials: true,
      body: JSON.stringify({ status:"complete"  }),
    });    
    getnotes()
  } 




  return (
    <Wrapper >
      <div className= "maincard"  >
      
        <div className="small">
          <div className= " carditem dfc gap15">
            <div className="df ac jc">
              <h3>{notetitle.toUpperCase()}</h3>
          
            </div>
            <div className="discription">
              
              
              <p>{notediscription}</p>

             
              
            </div>
          </div>
        </div>
       
      </div>
      <div className="buttons df ac jsa ">
        <div className="dates ">
          <span><b>Last Updated:  </b></span>
        <span>{new Date (date).toLocaleDateString()}  </span>
              <span>{new Date(date).toLocaleTimeString()}</span>

        </div>

        <div>

      
         {status ==="pending"?<button className="button  " onClick={()=> updatestatus(id)}>
           <AiOutlineFileDone size={25} style={{ color: "green" }} className="icon"/>
         </button>:null}
         <button className="button  " onClick={()=>{return ( setFull(true),editnote(note) )  } }>
           <AiOutlineFullscreen size={25} style={{ color: "blue" }} className="icon" />
         </button>
         <button className="button  " onClick={()=>{return ( setEdit(true),editnote(note) )  }}>
           <AiOutlineEdit size={25} style={{ color: "blue" }} className="icon" />
         </button>
         <button className="button  " onClick={() => dltnote(id)}>
           <AiOutlineDelete size={25} style={{ color: "red" }} className="icon"/>
         </button>
         </div>
         
       </div>
       <p className={`${status === "pending"?"pending":status === "complete"?"complete":null} status`}>{status.toUpperCase()}</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
flex: 1;
  flex-basis: 300px;
  max-width: 500px;
  height: 300px;
  position: relative;
  /* overflow: hidden; */
  background-color: #f2f2f2;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;
.status{
  position: absolute;
  top: -10px;
  right: -10px;
  padding: 5px;
  font-size: 11px;
  /* transform: translateY(-10px); */
  border-radius: 5px;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  
 
}
  .pending{
    background-color: orange;

    }
    .complete{
      background-color: green;

      
    }
  .maincard {
    width: 100%;
    height: 100%;
    
 
 
    transition: 0.5s;
    overflow-y: scroll;
    /* max-height:auto; */
    /* background-color:red;     */
    padding: 5px;
    
    transition: 0.5s;
   

    
    &::-webkit-scrollbar {
      display: none;
    }

    .discription {
      padding: 10px;
      height: 100%;
      width: 100%;
     
    }
  }

  .small {
    .carditem {
      background-color: transparent;
      width: 100%;
      height: 100%;
      border: none;


      input{
        width: 100%;
        text-align: center;
       
      }
      textarea{
        width: 100%;
        text-align: center;

      }
      h3 {
        background-color: transparent;
      }
    }
   
  }


  .buttons {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #d9d9d9;
    border-radius: 5px;

    .dates{

      span{
        font-size: 11px;
      }
     
    }
  
    .button {
      padding: 5px;
      border: none;
      background-color: transparent;
      position: relative;
      border-radius: 2px;
      

      /* box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px; */


   

      &:hover{
        background-color: #80d4ff;
        transition: 0.5s;
        
      }
    
   

     
      
    }
    
  }


  
`;
