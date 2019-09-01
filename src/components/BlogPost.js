import React from 'react';

const BlogPost = ({ html }) => {
  return (
    <div className="blog-post" dangerouslySetInnerHTML={{
      __html: html }}>
    </div>
  )
}

export default BlogPost;
