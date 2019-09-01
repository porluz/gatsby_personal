import React from 'react'
import '../styles.css';
import SideMenu from '../components/SideMenu';
import Blog from '../components/Blog';

const BlogPage = ( ) => {
  return (
    <SideMenu pageContent={<Blog />}>
    </SideMenu>
  )
}

export default BlogPage;
