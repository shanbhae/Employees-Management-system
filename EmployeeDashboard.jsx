import React from 'react'
import Header from '../../Others/Header'
import TaskListNumber from '../../Others/TaskListNumber'
import TaskList from '../Tasklist/TaskList'

const EmployeeDashboard = (props) => {
  
  return (
    <div className='p-10 bg-[#302e2e] h-full'>
      <Header changeUser={props.changeUser} data={props.data}/>
      <TaskListNumber data={props.data}/>
      <TaskList data={props.data}/>
    </div>
  )
}

export default EmployeeDashboard
