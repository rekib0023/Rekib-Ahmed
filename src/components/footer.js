import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import footerStyles from "./footer.module.scss"


export default function Footer() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <footer className={`text-center ${footerStyles.footer}`}>
      <p>Created by {data.site.siteMetadata.author}, Copyright 2020</p>
    </footer>
  )
}
