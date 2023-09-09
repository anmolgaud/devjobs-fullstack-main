import React from 'react'
import sun from '/icons/icon-sun.svg'
import moon from '/icons/icon-moon.svg';

const ToggleMode = () => {
  return (
    <div>
        <img className='w-[30px]' alt='light' src={sun} />
        <img className='hidden w-[25px]' alt='dark' src={moon} />
    </div>
  )
}

export default ToggleMode