import React from 'react'

const CompanyLogo = (props) => {
    const {logoBackground, logo} = props;
    const divStyle = {
        backgroundColor : logoBackground,
        backgroundSize : 'cover',
        backgroundRepeat : 'no-repeat',
    }
  return (
    <div style={divStyle} className='p-4 rounded-xl relative -top-4'>
        <img alt='logo' src={logo} />
    </div>
  )
}

export default CompanyLogo;