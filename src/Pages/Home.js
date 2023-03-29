import React, { useState } from "react";
import { useContext } from "react";
import Loading from "../Commponents/Loading";
import Notecontext from "../Context/Notecontext";
// import Navbar from "../Commponents/Navbar";
import styled from "styled-components";
import Addnote from "../Commponents/Addnote";

export default function Home() {
  const [notedlt, setNotedlt] = useState(false);

  const {
    notes,
    addnote,
    title,
    discription,
    setDiscription,
    setTitle,
    getnotes,
    noteadd,
    add,
    setAdd,
    user,
  } = useContext(Notecontext);

  const dltnote = async (id) => {
    const notedlt = await fetch(`https://notebookapi.onrender.com/user/removenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        id: user.token,
      },
    });
    const ajson = await notedlt.json();
    await getnotes();
    setAdd(false)
    setNotedlt(true);

    setTimeout(() => {
      setNotedlt(false);
    }, 5000);

    console.log(ajson);
  };

  return (
    <Wrapper>
      <div>
       
        <Loading />
        <div className="alert-main">
          {noteadd ? (
            <div className="alert alert-success" role="alert">
              Note Added Succesfully
            </div>
          ) : notedlt ? (
            <div className="alert alert-danger" role="alert">
              Note Dlt Successfully
            </div>
          ) : (
            <></>
          )}
        </div>

        <div className="adnote" style={{ display: add ? "flex" : "none" }}>
          <div className="adform">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
            />
            <input
              type="text"
              value={discription}
              onChange={(e) => setDiscription(e.target.value)}
              placeholder="Discription"
            />
            <button className="btn btn-primary" onClick={() => addnote()}>
              Submit
            </button>
            <button className="btn btn-primary" onClick={() => setAdd(false)}>
              Cancel{" "}
            </button>
          </div>
        </div>

        <div className="cscard" style={{ opacity: add ? "20%" : "100%" }}>
          {notes.length !== 0 ? (
            notes.map((e) => {
              return (
                <div className="card  " style={{ width: "18rem" }} key={e._id}>
                  <div className="card-body">
                    <h5 className="card-title">{e.title}</h5>
                    {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                    <p className="card-text">{Date(e.date).slice(0, 15)}</p>
                    <p className="card-text">{e.discription}</p>
                    <button
                      type="button"
                      className="btn btn-danger "
                      onClick={() => dltnote(e._id)}
                    >
                      Delete Note
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="nonotes">Please add notes </div>
          )}
        </div>
      </div>
      <Addnote/>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .alert-main {
    position: fixed;
    top: 2px;
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
          transform: translateY(-50px);
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
    gap: 10px;
    justify-content: flex-end;
    flex-direction: row-reverse;
    flex-wrap: wrap-reverse;
  }

  .nonotes {
    width: 100%;
    height: 100%;
    text-align: center;
  }

  .adnote {
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: #e6f3ff;
    z-index: 99999;

    top: 0;

    /* flex-direction: column; */
    gap: 15px;
    align-items: center;
    justify-content: center;

    .adform {
      display: flex;
      width: 90%;
      max-width: 400px;
      flex-direction: column;
      background-color: aquamarine;
      padding: 20px;
      gap: 15px;
      justify-content: center;
      align-items: center;
      z-index: 9999;
      animation: fani 0.2s ease-out 1;

      @keyframes fani {
        from {
          transform: scale(0);
        }

        to {
          transform: scale(1);
        }
      }
    }

    input {
      padding: 7px;
      outline: none;
      max-width: 500px;
      border: 0.5px solid black;
      border-radius: 10px;
    }

    button {
      max-width: 100px;
    }
  }
`;
