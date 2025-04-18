import React, { useState } from 'react'

const login = ({handleLogin}) => {

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const submitHandler = (e)=>{
      e.preventDefault()
      handleLogin(email,password)
      setEmail('')
      setPassword('')
}


  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 rounded-xl border-emerald-600 p-20'>
        <form 
        onSubmit={(e)=>{
            submitHandler(e)
            setEmail("")
            setPassword("")

        }}
        className='flex flex-col justify-center items-center'>
            <input 
            value={email}
            onChange={(e)=>{
               setEmail(e.target.value)
            }}
            required 
            className='border-2 outline-none text-white bg-transparent border-emerald-600 py-3 px-5 rounded-full text-xl placeholder:text-gray-400' type="email" placeholder='Enter youe email' 
            />
            <input 
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
            required 
            className='border-2 outline-none mt-5 text-white bg-transparent border-emerald-600 py-3 px-5 rounded-full  text-xl placeholder:text-gray-400' type="password" placeholder='Enter password' 
             />
            <button className=' mt-10 py-2 px-8 w-full  outline-none text-white bg-emerald-600  rounded-full text-xl placeholder:text-white'>log In</button>
        </form>
      </div>
    </div>
  )
}

export default login

