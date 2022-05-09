import React, { useReducer } from 'react'
import { AuthContext } from './auth/authContext'
import { authReducer } from './auth/authReducer'
import { AppRouter } from './routers/AppRouter'

export const HeroesApp = () => {

/*   const init =()=>{
    return{
      logged:true,
      name: "Juan Temporal"
    }
  } */

  const [user, dispatch] = useReducer(authReducer,{}, init)
  
  return (
    <AuthContext.Provider value={{
     user,
     dispatch 
    }}>
    <AppRouter/>
    </AuthContext.Provider>
  )
}
