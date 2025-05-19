import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav>Get Ready to complete your daily goals</nav> 
      <div className='header'>
        <Link to='/home'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    </>
  );
}

export default Header;
