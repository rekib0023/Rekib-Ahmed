import React from "react"
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from "gatsby"
import { Col, Row } from "react-bootstrap"

import Head from "../components/head"
import CardBlog from "../components/cards"
import Footer from "../components/footer"

import blogStyles from "./blog.module.scss"

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
    <div>
      <Helmet title="Blog | A Voyage to Data Science" />
      <div className="container">
        <h2 className={`${blogStyles.title}`}>A Voyage to Data Science !</h2>
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
      <Footer></Footer>
    </div>
  )
}
