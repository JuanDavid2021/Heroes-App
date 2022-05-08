import React from 'react'
import { useNavigate } from 'react-router-dom'

export const LoginScreen = () => {

  const navigate = useNavigate()

  const handleLogin =(e)=>{
    navigate("/marvel", {
      replace:true
    })
  }

  return (
    <div className='container mb-5'>
    <h1>Login</h1>
    <hr/>
   
     <button className='btn btn-primary' onClick={(e)=>handleLogin(e)}>
        Login
     </button>
    </div>
  )
}
