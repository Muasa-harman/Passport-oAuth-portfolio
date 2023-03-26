import React from 'react'
import { Link } from 'react-router-dom'

const Reset = () => {
  return (
    <div className='register'>
    <div className='wrapper'>
    <div className='right'>
            <input type='text' placeholder='Username'/>
            <input type='text' placeholder='Email'/>
            <button className='submit'>Reset</button>
            <div className='text-center'>
                <span className='text-gray'>Not Registered? <Link to='/login' className='link'>Register Now</Link></span>
            </div>
            </div>
        </div>
</div>
  )
}

export default Reset