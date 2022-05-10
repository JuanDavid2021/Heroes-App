import { type } from '@testing-library/user-event/dist/type'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext'
import { types } from '../../types/types'

export const LoginScreen = () => {

  const navigate = useNavigate()
  const {dispatch} = useContext(AuthContext)

  const handleLogin =(e)=>{

   const action = {
     type: types.login,
     payload: {name:"Juan David"}
   }
   
   dispatch(action)
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
