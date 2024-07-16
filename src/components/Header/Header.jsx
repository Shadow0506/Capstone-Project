import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import authService from '../appwrite/auth'
import { logout } from '../store/authSlice'
import { login } from '../store/authSlice'

function Header() {

  useEffect(() => {
    const checkUser = async () => {
      try {
        const userData = await authService.getCurrentUser()
        if (userData) {
          dispatch(login(userData))
        }
      } catch (error) {
        console.log("Header.jsx :: no user found")
      }
    }

    checkUser()
  }, [])

  const loggedIn = useSelector(state => state.auth.active)
  const dispatch = useDispatch()

  const handleLogout = async () => {
    try {
      await authService.logout()
      dispatch(logout({}))
      // console.log("Logout Successful")
    } catch (error) {
      console.log("Header.jsx :: logout :: error :: ", error)
    }
  }

  return (
    <nav className='text-white bg-black'>
      <ul className='flex p-2'>
        <li className='my-auto'><img src="https://gifdb.com/images/high/shut-up-and-take-my-money-liq8aecsgz7g5axm.webp" alt="logo" className='rounded-lg w-25 h-16' /></li>
        {/* <li className='mx-auto my-auto'><input className='py-2 px-5 rounded-lg' type="text" placeholder='Search' /></li> */}
        <li className='mx-auto my-auto'><Link to='/' className='bg-yellow-600 p-2 rounded-lg mx-2 hover:scale-105 hover:bg-yellow-700'>Home</Link><Link to='/shop' className='bg-yellow-600 p-2 rounded-lg mx-2 hover:scale-105 hover:bg-yellow-700'>Shop</Link>{loggedIn ? (<Link to='/cart' className='bg-yellow-600 p-2 rounded-lg mx-2 hover:scale-105 hover:bg-yellow-700'>Go to Cart</Link>) : ''}</li>
        <li className=' my-auto'>
          <div>
            {
            loggedIn ? (<button onClick={handleLogout} className='bg-yellow-600 p-2 rounded-lg mx-2 hover:scale-105 hover:bg-yellow-700'>Logout</button>) : (<><Link to='/login' className='bg-yellow-600 p-2 rounded-lg mx-2 hover:scale-105 hover:bg-yellow-700'>Login</Link>
              <Link to='/register' className='bg-yellow-600 p-2 rounded-lg mx-2 hover:scale-105 hover:bg-yellow-700'>Register</Link></>)
            }
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default Header
