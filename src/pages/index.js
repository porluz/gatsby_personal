import React from "react";
import { StaticQuery, graphql } from "gatsby";

const HomePage = () => (
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
    render={({
      allContentfulBlogPost: {
        edges,
      }
    }) => (
      <>
      {edges.map((edge) => (
        <>
        <h1>{edge.node.title}</h1>
        <small>Created on {edge.node.date}</small>
        <p>{edge.node.body.body}</p>
        </>
      ))}
      </>
    )}
  />
);

export default HomePage;
