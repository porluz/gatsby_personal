import React from "react";
import { StaticQuery, graphql } from "gatsby";

const Blog = () => (
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
                body
              }
              title
            }
          }
        }
      }
`}
    render={data => (
      <>
      {data.allContentfulBlogPost.edges.map((edge, idx) => (
        <div key={idx}>
        <h1>{edge.node.title}</h1>
        <small>Created on {edge.node.date}</small>
        <p>{edge.node.body.body}</p>
        </div>
      ))}
      </>
    )}
  />
);

export default Blog;
