import React from 'react'
import logo from '/logos/company.svg';
import ToggleMode from '../atoms/ToggleMode';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className='bg-header-full bg-bottom bg-cover'>
        <div className='mx-32 pt-8 pb-16 flex justify-between'>
            <Link to='/'>
            <img alt='logo' src={logo} />
            </Link>
            
            <div className='grid grid-cols-3'>
              <ToggleMode />
              <Link className='text-lg text-white' to={'login'}>Login</Link>
              <Link className='text-lg text-white' to={'signup'}>SignUp</Link>
            </div>
        </div>
    </nav>
  )
}

export default Navbar