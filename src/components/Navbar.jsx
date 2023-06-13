import React, { useState, useEffect } from 'react';
import '../style/Navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiCloseLine } from 'react-icons/ri';

const Navbar = () => {
  const [isActive, setisActive] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleClass = () => {
    setisActive(!isActive);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setisActive(false); // Reset the isActive state on windowWidth change
  }, [windowWidth]);

  const menuActions = () => {
    if (windowWidth < 768) {
      toggleClass();
    }
  };

  return (
    <>
      <nav className="navCont">
        <a className="navTitle" href=" ">
          {' '}
          &lt;
          {' '}
          <span className="navSpan">console.log //</span>
          {' '}
          code.velzck &gt;
        </a>
        <ul className={`navUl ${isActive ? 'displayMenu' : ''}`}>
          <li className="navLi"><a href="#home" onClick={menuActions}>home</a></li>
          <li className="navLi"><a href="#about" onClick={menuActions}>about</a></li>
          <li className="navLi"><a href="#projects" onClick={menuActions}>projects</a></li>
          <li className="navLi"><a href="#contact" onClick={menuActions}>contact</a></li>
        </ul>

        {' '}
        <GiHamburgerMenu className={`navMenu openMenu ${isActive ? 'menuActive' : ''}`} type="button" onClick={menuActions} />
        <RiCloseLine className={`navMenu ${isActive ? 'closeMenu' : ''}`} type="button" onClick={menuActions} />
        {' '}

      </nav>
    </>
  );
};

export default Navbar;
