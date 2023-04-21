import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const [edit, setEdit] = useState(false);

  const [password, setPassword] = useState("");
 
  const [notes, setNotes] = useState([]);

  const navigate = useNavigate();

  //add notes api
  const addnote = async (e) => {
    e.preventDefault()
    
    setLoading(true)
    if (auth) {
      const notes = await fetch("https://notebookapi.onrender.com/user/addnote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          id: user.token,
        },
        body: JSON.stringify({ title, discription }),
      });

      const unotes = await notes.json();

      // setAdd(false)
      console.log(unotes);
      setNoteadd(true);
      setTitle("");
      setDiscription("");
      getnotes();
      setAdd(false);
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
      // withCredentials: true,

      body: JSON.stringify({ email, password }),
    });

    const ajson = await suser.json();
    console.log(suser);

    setLoading(false);
    // console.log(ajson);
    if (ajson.success) {
      localStorage.setItem("authuser", JSON.stringify(ajson));

      setAuth(true);
      //  const allCookies = document.cookie;
      //  console.log(allCookies)
      // navigate("/");
      // alert("Login succesfully")

      window.location.reload(true);

      // getnotes()

      // setEmail("")
      // setPassword("")
    } else {
      alert("Please use correct details");
      navigate("/");
    }
  };

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
     verify(e)

      // window.location.reload(true);

      // setEmail("");
      // setName("");
      // setPassword("");
    } else {
      alert("Please use other detials");
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
    const auser = await fetch("https://notebookapi.onrender.com/user/details", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        id: user.token,
      },
    });
     await auser.json();

    // setUemail(uabout.email);
    // setUid(uabout._id);
    // setUname(uabout.name);
    // setLoading(false);
  };

  const uname = user.uname;
  const uemail = user.uemail;
  const uid  = user.uid;

  const logout = async () => {
    setLoading(true);
    localStorage.clear();
    setLoading(false);
    // alert("Logout")
    setDrop(false);
    navigate("/");
    window.location.reload(true);
  };
  const getnotes = async () => {
    setLoading(true);
    const notes = await fetch("https://notebookapi.onrender.com/user/getnotes", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        id: user.token,
      },
      withCredentials: true,
    });

    const unotes = await notes.json();

    if (notes) {
      setNotes(unotes);
      setLoading(false);
    } else {
      
      setLoading(true);
    }

    console.log(unotes);
  };







const [edittitle,setEdittitle] = useState("")
  const [editdiscription,setEditdiscription] = useState("")
  const [editid,seteditid] = useState("")
  const [noteupdate,setNoteupdate] = useState(false)

  const editnote = (note) => {
    // setAdd(true);



setEdittitle(note.title)
setEditdiscription(note.discription)
seteditid(note._id)
  }

  

  return (
    <Notecontext.Provider
      value={{
        email,
        password,
        setEmail,
        setPassword,
        verify,
        editnote,
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
        loading,edit,setEdit,edittitle,editdiscription,setEditdiscription,setEdittitle,editid,seteditid,noteupdate,setNoteupdate,setLoading
      }}
    >
      {props.children}
    </Notecontext.Provider>
  );
};

export default Notestate;
