import React from 'react'
import Logo from '../../assets/images/logo.png'
import './styles.css'

const Header = () => {
  return (
    <header>
      <div className='wrap'>
        <div className='logo'>
          <img src={Logo} alt='logo' />
        </div>
      </div>
    </header>
  )
}

export default Header
