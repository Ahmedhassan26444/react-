import React from 'react';
import logo from '../../assets/logo.png';


const Header = () => {
  return (
    <nav className='header'>
      <img src={logo} alt="Logo" />
    </nav>
  );
};

export default Header;