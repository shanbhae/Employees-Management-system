import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className='text-white shrink-0 h-full w-[300px] p-5 rounded-xl bg-red-400'>
          <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
            <h4 className='text-smm'>{data.date}</h4>
          </div>
          <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
          <p className='text-sm mt-2'>
          {data.description}
          </p>
          <div className=' mt-2'>
            <button className=' w-full rounded bg-red-600'>Failed Tasks</button>
          </div>
      </div>
  )
}

export default FailedTask
