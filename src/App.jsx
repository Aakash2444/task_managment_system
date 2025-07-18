import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  // useEffect(() => {
    // setLocalStorage()
    // getLocalStorage()
  // },)
  
  const [user, setUser] = useState(null)
  const handleLogin = (email,password) =>{
    if(email == 'admin@example.com' && password == 123){
      setUser('admin')
      console.log("Admin logged in")
    }else if(email == 'user@example.com' && password == 123){
      console.log("user logged in succesfully")
      setUser('employee')
    }
    else{
      alert("Invalid Credential !")
    }
  }

  const data = useContext(AuthContext)

  return (
    <>
   {!user ?<Login handleLogin={handleLogin}/> : ""}
    {user == "admin" ? <AdminDashboard/> : ""}
    {user == "employee" ? <EmployeeDashboard/> : ""}
    </>
  )
}

export default App