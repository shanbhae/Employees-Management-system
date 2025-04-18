import React from 'react'
import Header from '../../Others/Header'
import CreatTasks from '../../Others/CreatTasks'
import AllTasks from '../../Others/AllTasks'


const AdminDashboard = (props) => {
  return (
    <div className='h-screen w-full  p-10'>
      <Header changeUser={props.changeUser}/>
     <CreatTasks/>
     <AllTasks/>
    </div>
  )
}

export default AdminDashboard
