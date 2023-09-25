import React from 'react'
import { useState, useEffect,useRef  } from 'react'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const usernameInputRef = useRef(null)
  const passwordInputRef = useRef(null)
  return (
    <div>
      <div className='flex justify-center items-center flex-col'>
        <h1 className='text-2xl font-semibold my-6'>Login Tweet</h1>
        <div className='border border-black rounded-2xl flex flex-col p-10 space-y-6'>
          <label htmlFor="">
            <h2>Username</h2>
            <input type="text" ref={usernameInputRef} placeholder='Username' className='border border-black rounded-lg px-3 py-1' />
          </label>
          <label htmlFor="">
            <h2>Password</h2>
            <input type="password" ref={passwordInputRef} placeholder='Password' className='border border-black rounded-lg px-3 py-1' />
          </label>
          <button className='bg-black rounded-xl px-3 py-1 text-white'>Login</button>
        </div>
        <div>
          <p>don't have account <span className="text-blue-500 cursor-pointer">sign in there.</span></p>
        </div>
      </div>
    </div>
  )
}
