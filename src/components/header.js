import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import { Button } from "react-bootstrap"

import headerStyles from "./header.module.scss"

export default function Header() {
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
    <header className={`${headerStyles.header} container`}>
      <Link className={headerStyles.title} to="/">
        {data.site.siteMetadata.title}
      </Link>
      <nav>
        <ul className={headerStyles.navList}>
          <li className={headerStyles.navItems}>
            <Link
              className={headerStyles.navLinks}
              activeClassName={headerStyles.activeNavLinks}
              to="/"
            >
              Home
            </Link>
          </li>
          <li className={headerStyles.navItems}>
            <Link
              className={headerStyles.navLinks}
              activeClassName={headerStyles.activeNavLinks}
              to="#about"
            >
              About
            </Link>
          </li>
          <li className={headerStyles.navItems}>
            <Link
              className={headerStyles.navLinks}
              activeClassName={headerStyles.activeNavLinks}
              to="#resume"
            >
              Resume
            </Link>
          </li>
          <li className={headerStyles.navItems}>
            <Link
              className={headerStyles.navLinks}
              activeClassName={headerStyles.activeNavLinks}
              to="#contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <a href="/blog" target="_blank">
          <button type="button" className={headerStyles.btnBlog}>
            Blog
          </button>
        </a>
      </div>
    </header>
  )
}
