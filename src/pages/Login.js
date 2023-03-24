import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className='login'>
        <h1 className='loginTitle'>Choose a Login Method</h1>
        <div className='wrapper'>
            <div className='left'>
                <div className='loginButton google'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK5q0FP74VV9wbfwP378_7kj7iDomHuKrxkXsxDdUT28V9dlVMNUe-EMzaLwaFhneeuZI&usqp=CAU' alt='' className='icon'/>
                    Google
                </div>
                <div className='loginButton facebook'>
                    <img src='https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg' alt='' className='icon'/>
                    FaceBook
                </div>
                <div className='loginButton github'>
                    <img src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' alt='' className='icon'/>
                    Github
                </div>
            </div>
            <div className='center'>
                <div className='line'/>
                <div className='or'>OR</div>
            </div>
            <div className='right'>
                <input type='text' placeholder='Username'/>
                <input type='text' placeholder='Password'/>
                <button className='submit'>Login</button>
            <div className='text-center'>
            <span className='text-gray'>Not Registered? <Link to='/register' className='link'>Register</Link></span>
            <br/>
                    <span className='text-gray'>Forgot password? <Link className='link' to='/recovery'>Recover Now</Link></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login