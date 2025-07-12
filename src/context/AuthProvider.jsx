import React, { createContext, useState } from 'react'
import { getLocalStorage } from '../utils/localStorage';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [userData, setUserData] = useState(null)

  const data = getLocalStorage();
  console.log(data.employees);

  return (
    <>
    <AuthContext.Provider value={"aakash"}>
    {children} 
    </AuthContext.Provider>
    </>
  )
}

export default AuthProvider