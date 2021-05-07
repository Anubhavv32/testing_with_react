import React from 'react';
import Logo from '../../assets/logo.png';

function Header() {
  return (
    <header data-test='headerComponent'>
      <div className='wrap'>
        <div className='logo'>
          <img data-test='logoImg' src={Logo} alt='logo'/>
        </div>
      </div>
    </header>
  )
}

export default Header;
