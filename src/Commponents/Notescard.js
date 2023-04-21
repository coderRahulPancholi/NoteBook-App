import React, { useContext } from "react";
import styled from "styled-components";
import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineFileDone } from "react-icons/ai";

import Notecontext from "../Context/Notecontext";

export default function Notescard({
  notetitle,
  notediscription,
  dltnote,
  note,
  id,
  status,
  date,
}) {
  // const [full, setfull] = useState(false);

  const { editnote, user, getnotes, setEdit } =
    useContext(Notecontext);

  const updatestatus = async (noteid) => {
    // setLoading(true)
    await fetch(
      `https://notebookapi.onrender.com/user/updatenotestatus/${noteid}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          id: user.token,
        },
        withCredentials: true,
        body: JSON.stringify({ status: "complete" }),
      }
    );
    getnotes();
  };

  return (
    <Wrapper>
      <div className={`${status === "pending"?"pending":status === "complete"?"complete":null} maincard`}>
        <div className="small">
          <div className=" carditem dfc ">
            <div className="df ac jsb w100 fcont">
              <h3>{notetitle.toUpperCase()}</h3>
              <div className="df gap10 ac ">
                 <button className="button  " onClick={()=>{return ( setEdit(true),editnote(note) )  }}>
           <AiOutlineEdit size={25} style={{ color: "blue" }} className="icon" />
         </button>
                {status === "pending" ? (
                  <button className="button  " onClick={() => updatestatus(id)}>
                    <AiOutlineFileDone
                      size={25}
                      style={{ color: "green" }}
                      className="icon"
                    />
                  </button>
                ) : null}

                <button className="button  " onClick={() => dltnote(id)}>
                  <AiOutlineDelete
                    size={25}
                    style={{ color: "red" }}
                    className="icon"
                  />
                </button>
              </div>
            </div>

            <div
              className="discription h100 w100"
            
            >
              <p>{notediscription.slice(0, 10)}..</p>
            </div>
          </div>
        </div>
      </div>
      <div className="buttons df ac jss ">
        <div className="dates  ">
          <span>
            <b>Last Updated: </b>
          </span>
          <span>{new Date(date).toLocaleDateString()} </span>
          <span>{new Date(date).toLocaleTimeString()}</span>
        </div>

        {/* <div>

      
         {status ==="pending"?<button className="button  " onClick={()=> updatestatus(id)}>
           <AiOutlineFileDone size={20} style={{ color: "green" }} className="icon"/>
         </button>:null}
         
         <button className="button  " onClick={()=>{return ( setEdit(true),editnote(note) )  }}>
           <AiOutlineEdit size={20} style={{ color: "blue" }} className="icon" />
         </button>
         <button className="button  " onClick={() => dltnote(id)}>
           <AiOutlineDelete size={20} style={{ color: "red" }} className="icon"/>
         </button>
         </div> */}
      </div>
      {/* <p className={`${status === "pending"?"pending":status === "complete"?"complete":null} status`}>{status.toUpperCase()}</p> */}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 1;
  flex-basis: 300px;
  
  max-width: 500px;
  height: 100px;
  position: relative;
  /* overflow: hidden; */
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
  border-radius: 10px;

  cursor: pointer;

  .status {
    position: absolute;
    top: -5px;
    right: -5px;
    padding: 2px 5px;
    font-size: 11px;
    /* transform: translateY(-10px); */
    border-radius: 5px;
    color: white;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
      rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  }

  .pending {

    border-top: 2px solid orange;
    border-left: 2px solid orange;
  }
  .complete {
    border-top: 2px solid green;
    border-left: 2px solid green;
  }
  .maincard {
    width: 100%;
    height: 100%;
border-radius: 10px;
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
      padding: 0px 5px;
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

      input {
        width: 100%;
        text-align: center;
      }
      textarea {
        width: 100%;
        text-align: center;
      }
      h3 {
        padding: 0px 5px;

        font-size: 1rem;
        background-color: transparent;
      }
    }
  }

  .buttons {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    /* background-color:whitesmoke; */
    border-radius: 5px;

    .dates {
padding: 0 5px;
      span {
        font-size: 10px;
      }
    }
  }

  .button {
    /* padding: 5px; */
    border: none;
    background-color: transparent;
    position: relative;
    border-radius: 2px;

    /* box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px; */

    &:hover {
      background-color: #80d4ff;
      transition: 0.5s;
    }
  }

  
`;
