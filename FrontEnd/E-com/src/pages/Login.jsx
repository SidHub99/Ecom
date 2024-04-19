import React, { useState } from 'react'
import './Css/signup.css'

const Login = () => {
  const [state,Setstate]=useState("Login")
  const [userdetails,Setuserdetails]=useState({
    name:'',
    email:'',
    password:''
  })
  const setdata=(e)=>{
    Setuserdetails({
      ...userdetails,
      [e.target.name] : e.target.value
    })
  }

  const signup=async()=>{
    let resdata;
    if (userdetails.name !== '' && userdetails.email !== '' && userdetails.password !== '') {
     
    await fetch('http://localhost:5000/signup',{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(userdetails)
    }).then((res)=>res.json()).then((data)=>resdata=data)
    if(resdata.success){
      localStorage.setItem('auth-token',resdata.token); // missing comma
      window.location.replace('/')
    }else{
      alert(resdata.error)
    } 
    }else{
      alert("Fill in all fields")
    }
    
  }
  const log=async()=>{
    let resdata;
    if (userdetails.email !== '' && userdetails.password !== '') {
     
    await fetch('http://localhost:5000/login',{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(userdetails)
    }).then((res)=>res.json()).then((data)=>resdata=data)
    if(resdata.success){
      localStorage.setItem('auth-token',resdata.token); // missing comma
      window.location.replace('/')
    }else{
      alert(resdata.error)
    } 
    }else{
      alert("Fill in all fields")
    }
  }
  return (
    <div className='signuppage'>
      <div className="signup-container">
      <h1>{state}</h1>

      <div className="signup-fields">
        {state==="Signup"?<input type='text' name='name' onChange={setdata} value={userdetails.name} placeholder='Enter your name' />:<></>}
        <input type="email" name='email' onChange={setdata} value={userdetails.email} placeholder="Enter your email" />
        <input type="password" name='password' onChange={setdata} value={userdetails.password} placeholder="Enter your password" />
        {state==="Signup"? <button onClick={signup}>Signup</button>:<></>  }
        {state==="Login"? <button onClick={log}>Login</button>:<></>  }
        
      </div>
      
      
      {state==="Signup"? <p className="signup-create">
        Already have an account? <span  onClick={()=>Setstate("Login")} >Login</span>
      </p>:<></>}
      {state==="Login"? <p className="signup-create">
        Create new account <span onClick={()=>Setstate("Signup")} >Signup</span>
      </p>:<></>}
      <div className="check">
        <input type='checkbox' name='' id=''/>
        <p>
          I accept the  
          <span>Terms and Conditions</span>
        </p>
      </div>
      </div>
    </div>

  )
}

export default Login
