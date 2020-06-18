import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { Card, CardColumns } from "react-bootstrap"

import Layout from "../components/layout"
import blogStyles from "./blog.module.scss"
import Head from "../components/head"

export default function Blog() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            backgroundImage {
              file {
                url
              }
              title
            }
            title
            description
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog!</h1>
      <CardColumns bg="light" variant="light" className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map(edge => {
          return (
            <Link to={`/blog/${edge.node.slug}`}>
              <Card>
                <Card.Img
                  variant="top"
                  alt={edge.node.backgroundImage.title}
                  src={edge.node.backgroundImage.file.url}
                />
                <Card.Body>
                  <Card.Title>{edge.node.title}</Card.Title>
                  <Card.Text>{edge.node.description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">
                    {edge.node.publishedDate}
                  </small>
                </Card.Footer>
              </Card>
            </Link>
          )
        })}
      </CardColumns>
    </Layout>
  )
}
