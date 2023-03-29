import React, { useEffect, useState } from "react";
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

  const [password, setPassword] = useState("");
  const [notes, setNotes] = useState([]);

  const navigate = useNavigate();

  const getnotes = async()=>{
    setLoading(true)
    const notes = await fetch("https://notebookapi.onrender.com/user/getnotes",{
         method:"GET",
         headers:{
             "Content-Type": "application/json",
             "id":user.token   
         }
 
     })
     const unotes = await notes.json()

    await setNotes(unotes)
    setLoading(false)
     console.log(unotes)
   };
   

   //add notes api
  const addnote = async()=>{
    if(!localStorage){
      window.location.reload(true)
  }
    if(auth){
      const notes = await fetch("https://notebookapi.onrender.com/user/addnote",{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
            "id":user.token    
        },
        body: JSON.stringify({ title, discription }),

    })

    const unotes = await notes.json()
    setAdd(false)
    console.log(unotes)
    setNoteadd(true)
    setTitle("")
    setDiscription("")

    setTimeout(() => {
      setNoteadd(false)
    }, 5000);
    getnotes()


    }else{
      alert("Please login")
      window.location.reload(true)
    }
   
   };

  const verify = async (e) => {
    e.preventDefault()
    
    const suser = await fetch("https://notebookapi.onrender.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const ajson = await suser.json();
    console.log(ajson);
    if (ajson.success) {

     await localStorage.setItem("authuser", JSON.stringify(ajson));
    //  await setAuth(true);
    //  await navigate('/')
    alert("Login succesfully")
     window.location.reload(true);

      // getnotes()
     
    
      
      
      setEmail("")
      setPassword("")
      
      
      
    } else {
      alert("Please use correct details")
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
  const uname =  user.name





  const singup = async (e) => {
    e.preventDefault()
    const suser = await fetch("https://notebookapi.onrender.com/singup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name, email, password }),
    });
    const ajson = await suser.json();
    console.log(ajson);
    if (ajson.success) {
setAuth(true)
alert("User Resgitreed succesfully")
window.location.reload(true);
      setEmail("")
      setName("")
      setPassword("")

      
    } else {
      alert("Please use other detials")
    }
  };
  
  useEffect(() => {
   
    if(auth){
      
        getnotes()
        
    }
    else{}

    // eslint-disable-next-line
  }, []);

  return (
    <Notecontext.Provider
      value={{ email, password, setEmail, setPassword, verify, auth, navigate,name,setName,singup,notes,addnote,title,setTitle,discription,setDiscription,getnotes,uname,noteadd,add,setAdd,user,loading }}
    >
      {props.children}
    </Notecontext.Provider>
  );
};

export default Notestate;
