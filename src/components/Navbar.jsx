import React, { useState, useEffect } from 'react';
import '../style/Navbar.css';
import { NavLink } from 'react-router-dom';
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const menuActions = () => {
    if (windowWidth < 768) {
      toggleClass();
    }
  };

  const toTop = () => {
    if (windowWidth < 768) {
      scrollToTop();
      toggleClass();
    }
  };

  return (
    <>
      <nav className="navCont">
        <a className="navTitle" href="#totop">
          {' '}
          &lt;
          {' '}
          <span className="navSpan">console.log //</span>
          {' '}
          code.velzck &gt;
        </a>
        <ul className={`navUl ${isActive ? 'displayMenu' : ''}`}>
          <li className="navLi"><NavLink to="/" exact="true" activeClassName="active" onClick={toTop}>home</NavLink></li>
          <li className="navLi"><NavLink to="/projects" activeClassName="active" onClick={menuActions}>projects</NavLink></li>
          <li className="navLi"><NavLink to="/about" activeClassName="active" onClick={menuActions}>about</NavLink></li>
          <li className="navLi"><NavLink to="/contact" activeClassName="active" onClick={menuActions}>contact</NavLink></li>
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
