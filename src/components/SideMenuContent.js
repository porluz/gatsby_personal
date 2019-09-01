import React from 'react';
import { Link } from "gatsby"
import { FaBars } from 'react-icons/fa';

const SideMenuContent = ({toggleMenu, sideMenuContentRef, menuItems}) => {
  return (
    <div ref={sideMenuContentRef} className="side-menu side-menu-open">
        <div className="menu-container">
          <div className="menu-header">
          <button className="toggle-button" onClick={toggleMenu}>
          <FaBars />
          </button>
        </div>
        <div className="menu-body">
          <ul className="menu-list">
          {menuItems.map((item, idx) => (
            <li key={idx} className="">
              <Link to={"/" + item.link}>
                <span>
                  <span
                  className={"menu-icon"}>
                  {item.icon}
                  </span>
                  <span className="menu-icon-text">{item.title}</span>
                </span>
              </Link>
              </li>
          ))}
          </ul>
        </div>
     </div>
    </div>
  );
}

export default SideMenuContent;
