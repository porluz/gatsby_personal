import React from 'react'
import "../normalize.css";
import "../reset.css";
import "../styles.css";
import SideMenu from './SideMenu';
import { FaHome, FaRss, FaMagic, FaStreetView } from 'react-icons/fa';

const menuItems=[
  {
     title: 'Home',
     icon: <FaHome />,
     link: ''
  }, {
      title: 'Projects',
      icon: <FaMagic />,
      link: 'blogPage'
  }, {
      title: 'Contact',
      icon: <FaRss />,
      link: 'blogPage'
  }, {
      title: 'About',
      icon: <FaStreetView />,
      link: 'blogPage'
  }
];

const Layout = ( { pageContent } ) => {
  return (
    <SideMenu
      menuItems={menuItems}
      pageContent={pageContent} />
  )
}

export default Layout;
