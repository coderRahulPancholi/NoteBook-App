import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";

import Notecontext from "./Notecontext";

const Notestate = (props) => {
  const [title, setTitle] = useState("");
  const [discription, setDiscription] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [noteadd, setNoteadd] = useState(false);
  const [add, setAdd] = useState(false);
  const [loading, setLoading] = useState(false);
  const [drop, setDrop] = useState(false);
  const [password, setPassword] = useState("");
  const [notes, setNotes] = useState([]);

  const navigate = useNavigate();

  const getnotes = async () => {
    // setLoading(true);
    const notes = await fetch("https://notebookapi.onrender.com/user/getnotes", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
         
      },
      withCredentials:true
    });

    const unotes = await notes.json();

  if(notes){
    setNotes( unotes);
    setLoading(false);
  }else{
    setLoading(true);
  }

 

   
   
    console.log(unotes);
  };

  //add notes api
  const addnote = async () => {
    setAdd(false);
    if (auth) {
      const notes = await fetch(
        "https://notebookapi.onrender.com/user/addnote",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            id: user.token,
          },
          body: JSON.stringify({ title, discription }),
        }
      );

      const unotes = await notes.json();
      // setAdd(false)
      console.log(unotes);
      setNoteadd(true);
      setTitle("");
      setDiscription("");
      getnotes();
      setTimeout(() => {
        setNoteadd(false);
      }, 5000);
      
    } else {
      alert("Please login");
      window.location.reload(true);
    }
  };

  const verify = async (e) => {
    e.preventDefault();
    setLoading(true);
    const suser = await fetch("https://notebookapi.onrender.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        
      },
      withCredentials:true,
      body: JSON.stringify({ email, password }),
    });
   
    const ajson = await suser.json();
   
    setLoading(false);
    // console.log(ajson);
    if (ajson.success) {
      // localStorage.setItem("authuser", JSON.stringify(ajson));
       setAuth(true);
      //  const allCookies = document.cookie;
      //  console.log(allCookies)
      // navigate("/home");
      // alert("Login succesfully")

      //  window.location.reload(true);

      // getnotes()

      // setEmail("")
      // setPassword("")
    } else {
      alert("Please use correct details");
      navigate("/");
    }
  };

  const getLocalData = () => {
    const localData = localStorage.getItem("authuser");
    if (localData) {
      return JSON.parse(localStorage.getItem("authuser"));
    } else {
      return [];
    }
  };

  const user = getLocalData();
  const [auth, setAuth] = useState(user.success);

  const aboutuser = async () => {
    setLoading(true);
    const auser = await fetch("http://localhost:8000/user/details", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        id: user.token,
      },
    });
    const uabout = await auser.json();
    setLoading(false);
    setUemail(uabout.email);
    setUid(uabout._id);
    setUname(uabout.name);
  };

  const [uname, setUname] = useState(user.uname);
  const [uemail, setUemail] = useState(user.uemail);
  const [uid, setUid] = useState(user.uid);

  const singup = async (e) => {
    e.preventDefault();
    setLoading(true);
    const suser = await fetch("https://notebookapi.onrender.com/singup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const ajson = await suser.json();
    setLoading(false);
    console.log(ajson);
    if (ajson.success) {
      alert("User Resgitreed succesfully");
      localStorage.setItem("authuser", JSON.stringify(ajson));
      setAuth(true);

      window.location.reload(true);

      setEmail("");
      setName("");
      setPassword("");
    } else {
      alert("Please use other detials");
    }
  };

  const logout = async () => {
    setLoading(true);
    localStorage.clear();
    setLoading(false);
    // alert("Logout")
    setDrop(false)
    // window.location.reload(true);
    navigate("/")
  };

  return (
    <Notecontext.Provider
      value={{
        email,
        password,
        setEmail,
        setPassword,
        verify,
        auth,
        navigate,
        name,
        setName,
        singup,
        notes,
        addnote,
        title,
        setTitle,
        discription,
        setDiscription,
        getnotes,
        uname,
        noteadd,
        add,
        setAdd,
        user,
        drop,
        setDrop,
        logout,
        uid,
        uemail,
        aboutuser,
        loading,
      }}
    >
      {props.children}
    </Notecontext.Provider>
  );
};

export default Notestate;
