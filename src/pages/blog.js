import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Col, Row } from "react-bootstrap"

import Layout from "../components/layout"
import Head from "../components/head"
import CardBlog from "../components/cards"

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
      <div className="container">
        <h1>Blog!</h1>
        <Row>
          {data.allContentfulBlogPost.edges.map(edge => {
            return (
              <Col md={4} sm={6} xs={12}>
                <div>
                  <CardBlog props={edge}></CardBlog>
                </div>
              </Col>
            )
          })}
        </Row>
      </div>
    </Layout>
  )
}
