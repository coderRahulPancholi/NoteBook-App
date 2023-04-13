import React, { useState } from "react";
import { useContext } from "react";
// import Loading from "../Commponents/Loading";
import Notecontext from "../Context/Notecontext";
// import Navbar from "../Commponents/Navbar";
import styled from "styled-components";
import Addnote from "../Commponents/Addnote";
import Fullview from "../Commponents/Fullview";
import { useEffect } from "react";
import Notescard from "../Commponents/Notescard";
// import { FiPlus } from "react-icons/fi";

export default function Home() {
  const [notedlt, setNotedlt] = useState(false);
  const [filtervalue, setFiltervalue] = useState("All");

  const {
    auth,
    notes,
    getnotes,
    noteadd,
    noteupdate,
    setAdd,
    user,
    setDrop,
    loading,
  } = useContext(Notecontext);

  const dltnote = async (id) => {
    if (!auth) {
      alert("Access Denied");
      window.location.reload(true);
    }
    const notedlt = await fetch(`http://localhost:8000/user/removenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        id: user.token,
      },
    });
    const ajson = await notedlt.json();
    await getnotes();
    setAdd(false);
    setNotedlt(true);

    setTimeout(() => {
      setNotedlt(false);
    }, 5000);

    console.log(ajson);
  };

  // const localData = localStorage.getItem("authuser");

  useEffect(() => {
    setDrop(false);
    if (auth) {
      getnotes();

      console.log("i fire once");
    }

    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper>
      <div>
        {!loading ? (
          <>
            <div className="alert-main">
              {noteadd ? (
                <div className="alert alert-success" role="alert">
                  Note Added Succesfully
                </div>
              ) : notedlt ? (
                <div className="alert alert-danger" role="alert">
                  Note Dlt Successfully
                </div>
              ) : noteupdate ? <div className="alert alert-success" role="alert">
              Note Updated Successfully
            </div>: 
                <></>
              }
            </div>

            <div className="cscard">
              <div className="filter">
              <label htmlFor="notestatus">Filter</label>
              <select name="notestatus" id="notestatus"  value={filtervalue} onChange={(e)=>setFiltervalue(e.target.value)}>
                <option value="All">All</option>
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
                
              </select>

              </div>
             

              {notes.length !== 0 ? (
                notes.filter((e)=> filtervalue === "Pending"?e.status ==="pending":filtervalue === "Completed"?e.status==="complete":e ).map((e) => {
                  return (
                    <Notescard
                      notetitle={e.title}
                      notediscription={e.discription}
                      dltnote={dltnote}
                      id={e._id}
                      note={e}
                      status={e.status}
                      date={e.date}
                      key={e._id}
                    />
                  );
                })
              ) : 
                <div className="nonotes">Add notes </div>
              }
            </div>
          </>
        ) : (
          <></>
        )}
      </div>

      {/* <button onClick={()=>setAdd(!add)} className="df ac jc"><FiPlus size={30}/></button> */}
      <Fullview/>
      <Addnote />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .alert-main {
    position: fixed;
    bottom: 2px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;

    .alert {
      width: fit-content;
      animation: identifier 0.2s ease-out 1;

      @keyframes identifier {
        0% {
          transform: translateY(50px);
        }
        100% {
          transform: translateY(0px);
        }
      }
    }
  }

  .cscard {
    display: flex;
    padding: 20px;
    gap: 20px;
    justify-content: flex-start;
    /* flex-direction: row-reverse; */

    flex-wrap: wrap;
    position: relative;
  }

  .filter{
    position: absolute;
    top: 0;
    right: 0;

  }

  .nonotes {
    width: 100%;
    height: 100%;
    text-align: center;
  }
`;
