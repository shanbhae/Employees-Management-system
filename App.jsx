import React, { useContext, useState,useEffect } from "react"
import Login from "./components/Auth/login"
import EmployeeDashboard from "./components/Auth/Dashboard/EmployeeDashboard"
import AdminDashboard from "./components/Auth/Dashboard/AdminDashboard"
import { AuthContext } from "./context/AuthProvider"



function App() {

  

  const [user, setUser] = useState(null)
  const [loggedInUserData, setloggedInUserData] = useState(null)
  const [userData,setUserData] = useContext(AuthContext)
  
useEffect(() => {
  const loggedInUser = localStorage.getItem('loggedInUser')
  if (loggedInUser) {
    const userData = JSON.parse(loggedInUser)
    setUser (userData.role)
    setloggedInUserData(userData.data)
  
    
  }
}, [])



  useEffect(() => {
    if (userData) {
      const loggedInUser = localStorage.getItem("loggedInUser")

      if (loggedInUser) {
        setUser(loggedInUser.role)
      }
    }
  }, [userData])
  
  
  
  

  const handleLogin = (email, password)=>{
    if(email === "admin@me.com" && password === '123'){
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({role: 'admin'}))
    }else if (userData) {
      const employee = userData.employees.find((e)=> email === e.email && password === e.password)
      
      if (employee) {
        setUser('employee')
        setloggedInUserData(employee)
      }
      localStorage.setItem('loggedInUser', JSON.stringify({role: 'employees', data:employee}))
    }
    else{
      alert(" credential")
    }
  }
  
  
  
  
  
  
  return (
    <>
     {!user ? <Login handleLogin={handleLogin}/> : ''}
    {user ==='admin'? <AdminDashboard changeUser={setUser}/> : (user === 'employee' ?<EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null)}
    
    </>
    
  )
}

export default App
