import React from "react";
import { Link } from "react-router-dom";

import { IoMdCreate } from "react-icons/io";
import { FaUserPlus } from "react-icons/fa";
import { FcHome } from "react-icons/fc";

const Menu: React.FC = () => {
  const css = `

  .navbar {
    position: fixed;
    background-color: var(--bg-primary);
    transition: width 600ms ease;
    
  }
  
  .navbar-nav {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  }
  
  .nav-item {
    width: 100%;
  }
   
  .nav-item:last-child {
    margin-top: auto;
  }
  
  .nav-link {
    display: flex;
    align-items: center;
    height: 5rem;
    color: var(--text-primary);
    text-decoration: none;
    filter: grayscale(100%) opacity(0.7);
    transition: var(--transition-speed);
  }
  
  .nav-link:hover {
    filter: grayscale(0%) opacity(1);
    background: var(--bg-secondary);
    color: var(--text-secondary);
  }
  
  .link-text {
    display: none;
    margin-left: 1rem;
  }
  
  .nav-link svg {
    width: 2rem;
    min-width: 2rem;
    margin: 0 1.5rem;
  }
  
  .fa-primary {
    color: #ff7eee;
  }
  
  .fa-secondary {
    color: #df49a6;
  }
  
  .fa-primary,
  .fa-secondary {
    transition: var(--transition-speed);
  }
  
  .logo {
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 1rem;
    text-align: center;
    color: var(--text-secondary);
    background: var(--bg-secondary);
    font-size: 1.5rem;
    letter-spacing: 0.3ch;
    width: 100%;
  }
  
  .logo svg {
    transform: rotate(0deg);
    transition: var(--transition-speed);
  }
  
  .logo-text
  {
    display: inline;
    position: absolute;
    left: -999px;
    transition: var(--transition-speed);
  }
  
  .navbar:hover .logo svg {
    transform: rotate(-180deg);
  }
  
  /* Small screens */
  @media only screen and (max-width: 600px) {
    .navbar {
      bottom: 0;
      width: 100vw;
      height: 5rem;
    }
  
    .logo {
      display: none;
    }
  
    .navbar-nav {
      flex-direction: row;
    }
  
    .nav-link {
      justify-content: center;
    }
  
    main {
      margin: 0;
    }
  }
  
 
  @media only screen and (min-width: 600px) {
    .navbar {
      top: 0;
      width: 5rem;
      height: 100vh;
    }
  
    .navbar:hover {
      width: 16rem;
    }
  
    .navbar:hover .link-text {
      display: inline;
    }
  
    .navbar:hover .logo svg
    {
      margin-left: 11rem;
    }
  
    .navbar:hover .logo-text
    {
      left: 0px;
    }
  }
  
  .dark {
    --text-primary: #b6b6b6;
    --text-secondary: #ececec;
    --bg-primary: #23232e;
    --bg-secondary: #141418;
  }
  
  .light {
    --text-primary: #1f1f1f;
    --text-secondary: #000000;
    --bg-primary: #ffffff;
    --bg-secondary: #e4e4e4;
  }
  
  .solar {
    --text-primary: #576e75;
    --text-secondary: #35535c;
    --bg-primary: #fdf6e3;
    --bg-secondary: #f5e5b8;
  }
  
  .theme-icon {
    display: none;
  }
  
  .dark #darkIcon {
    display: block;
  }
  
  .light #lightIcon {
    display: block;
  }
  
  .solar #solarIcon {
    display: block;
  }
  `;

  return (
    <>
      <style>{css}</style>

      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="logo">
            <Link to="/home" className="nav-link">
              <span className="link-text logo-text">Home</span>
              <FcHome size="20px" />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/create" className="nav-link">
              <IoMdCreate size="40px" />
              <span className="link-text">Cadastrar</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/edit" className="nav-link">
              <FaUserPlus size="40px" />
              <span className="link-text">Editar</span>
            </Link>
          </li>
          <li></li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
