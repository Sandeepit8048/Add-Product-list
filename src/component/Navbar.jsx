import React from 'react'
import Login from './login'
function Navbar() {
  return (
    <div className='d-flex   justify-content-between align-items-center p-3 bg-dark text-white'>
       <ul className='d-flex gap-5 m-0 '>
        <li className='text-white'>Slooze</li>
        <li>Home</li>
        {/* <Login/> */}
        <li><a href={Login}>Login</a></li>
        <li>Sign Up</li>
        <li>About-Us</li>
       </ul>
    </div>
  )
}

export default Navbar