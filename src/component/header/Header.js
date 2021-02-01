import React from 'react'
import Logo from '../../assets/images/logo.png'
import './styles.css'

const Header = () => {
  return (
    <header data-test='headlineComponent'>
      <div className='wrap'>
        <div className='logo'>
          <img src={Logo} alt='logo' data-test='img' />
        </div>
      </div>
    </header>
  )
}

export default Header
