import React, { useEffect } from 'react'
import { useState } from 'react'
import Profile from '../profile/Profile'
// import { Link } from 'react-router-dom'



const Header = (props) => {
  const [userName, setUserName] = useState('')
  const [page, setPage] = useState(false);

  const handleClick = () => {
    setPage(!page); // Toggle the page
  };
  
useEffect(() => {
  
  if (!props.data) {
    setUserName('Admin')
  }else{
    setUserName(props.data.firstName)
  }
  
}, [userName])


const logOutUser = ()=>{
  localStorage.setItem('loggedInUser','')
  props.changeUser('')}
  
  if (page) {
    return (
      <div >
      <Profile />
      <button 
        onClick={handleClick} 
        className="mt-4 flex  bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
        Back
      </button>
    </div>
  );
}
  

  return (
    <div className='flex items-end  justify-between'>
      <h1 className='text-2xl font-medium text-white'>Hello <br /><span className='text-3xl text-white font-semibold'>{props.data?.firstName || 'Admin'} 👋</span>  </h1>
      
      
      {/* <Link to='/profile' className='bg-red-600 rounded-md px-5 py-2 text-white text-lg font-medium'>My Resume</Link> */}
      <button 
        onClick={handleClick} 
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        View Resume
      </button>
      
      <button onClick={logOutUser} className='bg-red-600 rounded-md px-5 py-2 text-white text-lg font-medium'>Log Out</button>
    </div>
  )
}

export default Header
