import React from 'react'
import '../styles.css';
import Layout from '../components/Layout';
import Blog from '../components/Blog';

const BlogPage = ( ) => {
  return (
    <Layout pageContent={<Blog />}>
    </Layout>
  )
}

export default BlogPage;
