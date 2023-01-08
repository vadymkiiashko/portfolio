import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../sass/components/navigation/mobilenavigation.styles.scss";

const MobileNavigation = () => {
  const [isActive, setIsActive] = useState(false);
  const activeHighlight = (isActive) => {
    return isActive
      ? { color: `#FEB837`, boxShadow: "0 0.3em 0.3em -0.2em #FEB837" }
      : {};
  };

  return (
    <div className='mobile-nav'>
      <div
        className={`hamburger ${isActive ? "is-active" : ""}`}
        onClick={() => setIsActive(!isActive)}>
        <div className='burger'></div>
      </div>
      {isActive ? (
        <div className='mobile-nav--items'>
          
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
          
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default MobileNavigation;
