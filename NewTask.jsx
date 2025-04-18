import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='text-white shrink-0 h-full w-[300px] p-5 rounded-xl bg-purple-400'>
    <div className='flex justify-between items-center'>
      <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
      <h4 className='text-smm'>{data.taskDate}</h4>
    </div>
    <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
    <p className='text-sm mt-2'>
    {data.taskDescription}
    </p>
    <div className=' mt-4'>
        <button className='bg-green-600 rounded px-3 cursor-pointer hover:bg-green-700 py-0.5'>Accept Task</button>
    </div>
</div>
  )
}

export default NewTask
