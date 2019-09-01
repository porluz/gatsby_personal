import React from 'react'
import "../normalize.css";
import "../reset.css";
import "../styles.css";
import SideMenu from './SideMenu';

const menuItems=[
  {
     title: 'Home',
     iconName: 'FaHome',
     link: ''
  }, {
      title: 'Projects',
      iconName: 'FaMagic',
      link: 'blogPage'
  }, {
      title: 'Contact',
      iconName: 'FaRss',
      link: 'blogPage'
  }, {
      title: 'About',
      iconName: 'FaStreetView',
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
