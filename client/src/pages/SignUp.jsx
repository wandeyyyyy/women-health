import React from 'react' 
import { useState } from 'react';
import {Link} from "react-router-dom"
import {Label} from "flowbite-react"
import { TextInput } from 'flowbite-react'
import { Button } from 'flowbite-react'

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (!formData.username || !formData.email || !formData.password) {
      //   return setErrorMessage('Please fill out all fields.');
      // }
    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
    } catch (error) {
      
    }
  }
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        <div className='flex-1'>
        <Link to='/' className='font-bold dark:text-white text-4xl'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
            Women's
            </span>
            Health
          </Link> 
          <p className='text-sm font-medium mt-5'>
            This is a demo project. You can sign up with your email and password
            or with Google.
          </p>
        </div>
        <div className='flex-1'>
        <form className='flex flex-col gap-4'onSubmit={handleSubmit} >
        <div>
              <Label value='Your username' />
              <TextInput
                type='text'
                placeholder='Username'
                id='username'
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value='Your email' />
              
              <TextInput
                type='email'
                placeholder='name@company.com'
                id='email'
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value='Your password' />
              <TextInput
                type='password'
                placeholder='Password'
                id='password'
                onChange={handleChange}
              />
            </div>
            <Button
             gradientDuoTone='purpleToPink'
             type='submit'>
              Sign Up
             </Button>
        </form>
        <div className='flex gap-2 text-sm font-medium mt-5'>
            <span>Have an account?</span>
            <Link to='/sign-in' className='text-blue-500'>
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp