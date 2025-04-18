import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='flex justify-between mt-10 gap-5 screen'>
      <div className=' text-white h-40 rounded-xl py-6 px-9 w-[45%] bg-purple-400'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.newTask}</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>

      <div className=' text-white h-40 rounded-xl py-6 px-9 w-[45%] bg-pink-950'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.completed}</h2>
        <h3 className='text-xl font-medium'>Completed</h3>
      </div>

      <div className='text-white h-40 rounded-xl py-6 px-9 w-[45%] bg-green-400'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.active}</h2>
        <h3 className='text-xl font-medium'>Active</h3>
      </div>

      <div className='text-white h-40 rounded-xl py-6 px-9 w-[45%] bg-red-400'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.failed}</h2>
        <h3 className='text-xl font-medium'>Failed</h3>
      </div>
    </div>
  )
}

export default TaskListNumber
