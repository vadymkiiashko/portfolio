import React from "react";
import { NavLink } from "react-router-dom";
import "../../sass/components/navigation/navigation.styles.scss";

const Navigation = () => {
  const activeHighlight = (isActive) => {
    return isActive
      ? { color: `#FEB837`, boxShadow: "0 1em 0.5em -0.2em #FEB837" }
      : {};
  };
  return (
    <nav className='header-nav'>
      <NavLink style={({ isActive }) => activeHighlight(isActive)} to='/'>
        home
      </NavLink>
      <NavLink style={({ isActive }) => activeHighlight(isActive)} to='/about'>
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
  );
};

export default Navigation;
