
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext'
import { types } from '../../types/types'
import "./Login.css"

export const LoginScreen = () => {

  const navigate = useNavigate()
  const {dispatch} = useContext(AuthContext)

  const handleLogin =(e)=>{

   const action = {
     type: types.login,
     payload: {name:"Juan David"}
   }

   const lastPath = localStorage.getItem("lastPath" || "/marvel")
   
   dispatch(action)
    navigate(lastPath, {
      replace:true
    }) 
  }

  return (
    <div className='login bg-dark'>
    <h1 className='mb-5 text-light'>Log-in</h1>

   
     <button className='boton btn btn-primary' onClick={(e)=>handleLogin(e)}>
        Log-in
     </button>
    </div>
  )
}
