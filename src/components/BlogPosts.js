import React from "react";
import { StaticQuery, graphql } from "gatsby";
import BlogPost from './BlogPost';

const BlogPosts = () => (
  <StaticQuery
    query={graphql`
      {
        allContentfulBlogPost {
          edges {
            node {
              id
              slug
              updatedAt
              body {
                childMarkdownRemark {
                  html
                }
              }
              title
            }
          }
        }
      }
`}
    render={data => (
      <div className="blog-posts">
        {data.allContentfulBlogPost.edges
          .map((edge, idx) => (
            <BlogPost html={edge.node.body
                    .childMarkdownRemark
                    .html} />
        ))}
      </div>
    )}
  />
);

export default BlogPosts;
