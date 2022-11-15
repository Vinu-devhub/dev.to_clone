import React, { useState } from "react";
import DarkModeToggle from './DarkModeToggle';

// import icons
import { BsFillMoonFill } from 'react-icons/bs';
import { FaDev } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { RiNotification3Line } from 'react-icons/ri';

const Navigation = (props) => {

  const [showMenu, setShoeMenu] = useState(false)

  const toggle = () => {
    setShoeMenu(!showMenu)
  }

  return <header className="header">
    <div className="headerContainer">
      <div className="headerContainer__hamburgerMenu" onClick={() => props.openMenu()}></div>
      <a href="https://dev.to" className="headerContainer__logo">
        <FaDev size="2.1rem" />
      </a>

      <div className="headerContainer__searchBox">
      <form>
        <input type="text" placeholder="Search..." aria-label="search" />
      </form>
      </div>

      <div className="headerContainer__right">
        <button>Create a post </button>
        <i className="hidden-search">
        <FiSearch />
        </i>
        <i>
          <RiNotification3Line />
        </i>
        {/* <i>
        <BsFillMoonFill />
        </i> */}
        <DarkModeToggle />

        <span onClick={toggle}>
          <img src="https://picsum.photos/200" alt="profile picture" />
        </span>
      </div>

    </div>

    <div className={showMenu ? "dropdown-menu" : "dropdown-menu-close"}>
      <ul>
        <li onClick={toggle}>
          <a href="/profile">
            <div className="u-name">Ryan</div>
            <small className="u-name-id">@ryan</small>
          </a>
        </li>

        <li onClick={toggle}>
          <a href="/dashboard">Dashboard</a>
        </li>
        <li onClick={toggle}>
          <a href="/post">Create Post</a>
        </li>
        <li onClick={toggle}>
          <a href="/list">Reading list</a>
        </li>
        <li onClick={toggle}>
          <a href="/settings">Settings</a>
        </li>
        <li onClick={toggle}>
          <a href="/signout">Sign Out</a>
        </li>

      </ul>

    </div>

  </header>;
};

export default Navigation;
