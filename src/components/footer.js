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
    <footer className={`${footerStyles.footer}`}>
      <p><span>&#169;</span> 2020 {data.site.siteMetadata.author}. All rights reserved.</p>
    </footer>
  )
}
