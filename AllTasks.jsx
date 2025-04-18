import React from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { useContext } from 'react'

const AllTasks = () => {


  const [userData,setUserData] = useContext(AuthContext)



  return (
    <div className='bg-[#1c1c1c] mt-5 rounded p-5   '>
      <div className=' mb-0.5 py-2 px-4 flex justify-between rounded'>
        <h2 className='  text-lg font-medium  w-1/5 text-white'>Employees Name</h2>
        <h3 className=' text-lg font-medium   w-1/5 text-white'>New Task</h3>
        <h5 className=' text-lg font-medium   w-1/5 text-white'>Active Task</h5>
        <h5 className='  text-lg font-medium  w-1/5 text-white'>Completed </h5>
        <h5 className=' text-lg font-medium   w-1/5 text-white'>Failed</h5>
      </div>
      <div className=' '>
      {userData.employees.map( function(elem,idx) {
        return<div key={idx} className='bg-transperant border-2 border-emerald-800 mb-0.5 py-2 px-4 flex justify-between rounded'>
        <h2  className=' text-lg font-medium  w-1/5 text-gray-400'>{elem.firstName}</h2>
        <h3  className='text-lg font-medium   w-1/5 text-blue-600'>{elem.taskCount.newTask}</h3>
        <h5  className='text-lg font-medium   w-1/5 text-yellow-600'>{elem.taskCount.active}</h5>
        <h5  className=' text-lg font-medium  w-1/5 text-green-600'>{elem.taskCount.completed}</h5>
        <h5  className='text-lg font-medium   w-1/5 text-red-600'>{elem.taskCount.failed}</h5>
      </div>
      })}
      </div>
    </div>
  )
}

export default AllTasks
