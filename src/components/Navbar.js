import React from 'react';
import '../styleSheets/Navbar.css';

function Navbar() {
  return (
    <nav>
      <img className="logo" src="./logo192.png" alt="react-logo" />
      <h3 className='nav_logo_text'>React Facts</h3>
      <h4 className='nav_title'>React Course - project 1</h4>
    </nav>
  );
}

export default Navbar;
