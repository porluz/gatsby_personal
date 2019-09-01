import React from 'react';

const PageContent = ({pageContentRef, children}) => {
  return (
    <div ref={pageContentRef} className="page-content page-content-split">
        {children}
    </div>
  )
}

export default PageContent;
