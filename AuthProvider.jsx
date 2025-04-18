import React, { createContext } from 'react'
import { getLocalStorage, setLocalStorage } from '../LocalStorage'
import { useState, useEffect } from 'react'
export const AuthContext = createContext() 

// localStorage.clear()
const AuthProvider = ({children}) => {

   const [userData,setUserData] = useState(null)

   useEffect(() => {
     setLocalStorage()
   const {employees,admin} = getLocalStorage()
   setUserData({employees,admin})
   
  
   
     
   }, [])
   

  return (
    <div>

        <AuthContext.Provider value={[userData,setUserData]}>
      {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
