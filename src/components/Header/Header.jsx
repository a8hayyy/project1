import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header-container'>
        <Link to='/' style={{textDecoration:'none'}}><h1>Shopping Page</h1></Link>
        <div className='header-container2'>
            <Link to='/login' style={{textDecoration:'none'}}><p>Login</p></Link>
        <Link to='/cart'>
          <i class="fa-sharp fa-solid fa-cart-shopping"></i>
        </Link>
        </div>
    </div>
  )
}

export default Header