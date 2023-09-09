import React from 'react'
import logo from '/logos/company.svg';
import ToggleMode from '../atoms/ToggleMode';
const Navbar = () => {
  return (
    <nav className='bg-header-full bg-bottom bg-cover'>
        <div className='mx-32 pt-8 pb-16 flex justify-between'>
            <img alt='logo' src={logo} />
            <ToggleMode />
        </div>
    </nav>
  )
}

export default Navbar