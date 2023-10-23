import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
const MobileDropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  
  const closeMenu = () => {
    setIsOpen(false);
  };

  const dropdownMenuStyle = {
    display: isOpen ? 'block' : 'none',
  };

  return (
    <div>
    <div className="mobile-menu1">
      <button className="menu-toggle-button" onClick={toggleMenu}>
        {/* Menu */}
        <FaBars />
      </button>
      </div>
      <div className="mobile-dropdown-menu" style={dropdownMenuStyle}>
      
        <NavLink to='/' className="mobile-menu-link" onClick={closeMenu}>Home</NavLink>
        <NavLink to='/bollywood' className="mobile-menu-link" onClick={closeMenu}>Bollywood</NavLink>
        <NavLink to='/technology' className="mobile-menu-link" onClick={closeMenu}>Technology</NavLink>
        <NavLink to='/hollywood' className="mobile-menu-link" onClick={closeMenu}>Hollywood</NavLink>
        <NavLink to='/fitness' className="mobile-menu-link" onClick={closeMenu}>Fitness</NavLink>
        <NavLink to='/food' className="mobile-menu-link" onClick={closeMenu}>Food</NavLink>
        
      </div>
    

    </div>
  );
};

export default MobileDropdownMenu;
