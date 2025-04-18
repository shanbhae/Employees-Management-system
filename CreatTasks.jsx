import React from 'react'
import { useState,useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'


const CreatTasks = () => {
const [userData,setUserData] = useContext(AuthContext)
  

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [asignTo, setAsignTo] = useState('')
  const [category, setCategory] = useState('')

  const [newTask, setNewTask] = useState({})

  const submitHandler =(e)=>{
   e.preventDefault(e)
  
   
   setNewTask({taskTitle,taskDate,taskDescription,category,asignTo, active:false, newTask:true, failed:false, completed:false})


const data = userData


  data.employees.forEach(function(elem){
   if (asignTo===elem.firstName) {
    elem.tasks.push(newTask)
    elem.taskCount.newTask=elem.taskCount.newTask+1
    console.log(elem);
    
    
   }
  })
  setUserData(data)
  
  setAsignTo('')
  setCategory('')
  setTaskDate('')
  setTaskDescription('')
  setTaskTitle('')
  } 

  return (
    <div className='text-white p-5 mt-7 bg-[#343333] rounded'>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }} className='flex flex-wrap items-start w-full justify-between'>
            <div className='w-1/2'>
            <div>
                 <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                 <input value={taskTitle}
                 onChange={(e)=>{
                  setTaskTitle(e.target.value)
                 }}
                  className='px-2 py-1 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' type="text" placeholder='Make a Design' />
              </div>
              <div>
                 <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                 <input value={taskDate}
                 onChange={(e)=>{
                  setTaskDate(e.target.value)
                 }}
                  className='px-2 py-1 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' type="date" />
              </div>
              <div>
                 <h3 className='text-sm text-gray-300 mb-0.5'>Asign To</h3>
                 <input value={asignTo}
                 onChange={(e)=>{
                  setAsignTo(e.target.value)
                 }}
                  className='px-2 py-1 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' type="text" placeholder='Employee Name' />
              </div>
              <div>
                  <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                  <input value={category}
                 onChange={(e)=>{
                  setCategory(e.target.value)
                 }}
                  className='px-2 py-1 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' type="text" placeholder='Design, dev, etc' />
              </div>
              
            </div>

           
            <div className='w-1/2'>
              <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
              <textarea value={taskDescription}
                 onChange={(e)=>{
                  setTaskDescription(e.target.value)
                 }}
               className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id=""></textarea>
            <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Creat Task</button>
            </div>
           
        </form>
      </div>

  )
}

export default CreatTasks
