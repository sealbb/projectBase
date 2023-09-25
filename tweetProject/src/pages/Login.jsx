import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [bodyLogin, setBodyLogin] = useState({});
  const usernameInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  const setData = async() => {
    setUsername(usernameInputRef.current.value);
    setPassword(passwordInputRef.current.value);
    setBodyLogin({ username: usernameInputRef.current.value, password: passwordInputRef.current.value });
  }
  const handleLogin = async () => {
    // setUsername(usernameInputRef.current.value);
    // setPassword(passwordInputRef.current.value);
    // setBodyLogin({ username: usernameInputRef.current.value, password: passwordInputRef.current.value });
    await setData();
    console.log(bodyLogin);
    try {
      const response = await fetch('http://localhost:8080/api/users/match', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: usernameInputRef.current.value, password: passwordInputRef.current.value }),
      });

      if (response.ok) {
        setIsLogin(true);
        // Assuming response.data contains user information
        navigate('/home');
      } else {
        setIsLogin(false);
      }
    } catch (error) {
      console.error('An error occurred:', error);
      setIsLogin(false);
    }
  }
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
          <button className='bg-black rounded-xl px-3 py-1 text-white' onClick={handleLogin}>Login</button>
        </div>
        <div>
          <p>don't have account <span className="text-blue-500 cursor-pointer">sign in there.</span></p>
        </div>
      </div>
    </div>
  )
}
