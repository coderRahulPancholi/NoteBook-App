import React, { useContext } from 'react'
import styled from 'styled-components'
// import Navbar from '../Commponents/Navbar's
import Notecontext from '../Context/Notecontext'


export default function Login() {

    const {email,setEmail,password,setPassword,verify,navigate} = useContext(Notecontext)


  return (


  <Wrapper>
    {/* <Navbar/> */}

    {/* <div className='form' >
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" />
        <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
        <button  onClick={()=>verify()}>Submit</button>
        <a href="/singup">Singup</a>
        
    </div> */}

    <form onSubmit={(e)=>verify(e)} className="form">
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="text" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="text" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} id="exampleInputPassword1" placeholder="Password"/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
  <button  className="btn btn-primary" onClick={()=>navigate("/singup")}>Singup</button>
</form>
    


  </Wrapper>
  )
}
const Wrapper = styled.div`
width: 100vw;
height: 100vh;


.form{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;


    input{
        padding: 5px;
    }
}



`
