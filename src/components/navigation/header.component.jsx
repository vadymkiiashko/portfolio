import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../../sass/components/header.styles.scss";
import MobileNavigation from "./mobileNav.component";
import Navigation from "./navigation.component";

const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 620;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <div className='header'>
      <div className='header-logo'>
        <NavLink to='/'>
          <div>
            <img src='../../assets/png.png' alt='header logo' />
          </div>
        </NavLink>
      </div>
      {width < breakpoint ? <MobileNavigation /> : <Navigation />}
    </div>
  );
};

export default Header;
