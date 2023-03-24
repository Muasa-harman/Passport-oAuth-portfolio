import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='register'>
        <div className='wrapper'>
        <div className='right'>
                <input type='text' placeholder='Username'/>
                <input type='text' placeholder='Email'/>
                <input type='text' placeholder='Password'/>
                <input type='text' placeholder='Confirm Password'/>
                <button className='submit'>Register</button>
                <div className='text-center'>
                    <span className='text-gray'>Already Registered? <Link to='/login' className='link'>Login Now</Link></span>
                </div>
                </div>
            </div>
    </div>
  )
}

export default Register