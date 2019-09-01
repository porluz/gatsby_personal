import React, { useRef } from 'react';
import SideMenuContent from './SideMenuContent';
import PageContent from './PageContent';

const SideMenu = ({ menuItems, pageContent }) => {
  const sideMenuContentRef = useRef(null);
  const pageContentRef = useRef(null);

  const toggleMenu = () => {
    var menu = sideMenuContentRef.current;
    var content = pageContentRef.current;
    if(!menu) {
      return null;
    }
    var open = menu.classList.contains('side-menu-open');
    if(open) {
      menu.classList.remove('side-menu-open');
      menu.classList.add('side-menu-closed');
      content.classList.remove('page-content-split');
      content.classList.add('page-content-full');
    } else {
      menu.classList.add('side-menu-open');
      menu.classList.remove('side-menu-closed');
      content.classList.add('page-content-split');
      content.classList.remove('page-content-full');
    }
  }

  return (
    <div className="mcontainer">
      <SideMenuContent
        sideMenuContentRef={sideMenuContentRef}
        toggleMenu={toggleMenu}
        menuItems={menuItems}
        >
      </SideMenuContent>
      <PageContent
        pageContentRef={pageContentRef}>
        {pageContent}
      </PageContent>
    </div>
  )
}

export default SideMenu;
