import React from "react";
import { NavLink } from "react-router-dom";
import "../sass/components/header.styles.scss";


const Header = () => {
  const activeHighlight = (isActive) => {
    return isActive ? { color: `#FEB837` , boxShadow: '0 1em 0.5em -0.2em #FEB837' } : {};
  };
  return (
    <div className='header'>
      <div className='header-logo'>
        <NavLink to='/'>
          <div>
            <img src='../assets/png.png' alt='header logo' />
          </div>
        </NavLink>
      </div>
      <nav className='header-nav'>
        <NavLink style={({ isActive }) => activeHighlight(isActive)} to='/'>
          home
        </NavLink>
        <NavLink
          style={({ isActive }) => activeHighlight(isActive)}
          to='/about'>
          about
        </NavLink>
        <NavLink
          style={({ isActive }) => activeHighlight(isActive)}
          to='/projects'>
          projects
        </NavLink>
        <NavLink
          style={({ isActive }) => activeHighlight(isActive)}
          to='/authentication'>
          authentication
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
