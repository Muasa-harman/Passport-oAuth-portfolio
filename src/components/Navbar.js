import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({user}) => {
  return (
    <div className='navbar'>
        <span className='logo'><Link className='link1' to='/'>H@rtman portfolio</Link></span>
        {user ? (
        <ul className='list'>
            <li className='listItem'>
                <img src='https://media.licdn.com/dms/image/D4D03AQHIK6L5OotGQg/profile-displayphoto-shrink_200_200/0/1676699800357?e=1684972800&v=beta&t=nI54IIbLPVz0teZ-Iv5gfp29NyakecAT_Qpvq0KSv48' alt='' className='avatar'/>
            </li>
            <li className='listItem'>Harman Muasa</li>
            <li className='listItem'>Logout</li>
        </ul>
        ) : (<Link className='link1' to='/login'>Login</Link>)}
    </div>
  )
}

export default Navbar