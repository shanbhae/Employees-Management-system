import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './completeTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  return (
    <div id='TaskList' className='flex items-center overflow-x-auto justify-start gap-5 flex-nowrap h-[52%] w-full py-5  mt-5'>
      {data.tasks.map((elem, idx)=>{
        if (elem.active) {
          return<AcceptTask key={idx} data={elem}/>
        } 
        if (elem.newTask) {
          return<NewTask key={idx} data={elem}/>
        } 
        if (elem.completed) {
          return<CompleteTask key={idx} data={elem}/>
        }
         if (elem.failed) {
          return<FailedTask key={idx} data={elem}/>
        }
      })}
    </div>
  )
}

export default TaskList
