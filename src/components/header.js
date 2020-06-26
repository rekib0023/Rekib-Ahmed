import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Nav, Navbar } from "react-bootstrap"

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
    <header  id="home" className={`${headerStyles.header} container`}>
      <Navbar expand="lg">
        <Navbar.Brand href="/" className={`${headerStyles.logo}`}>
          <h2>Portfolio .</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="mr-auto"></div>
          <Nav className={`${headerStyles.navLists}`}>
            <Nav.Link href="#home" className={`${headerStyles.navLinks} active`}>Home</Nav.Link>
            <Nav.Link href="#about" className={`${headerStyles.navLinks}`}>About</Nav.Link>
            <Nav.Link href="#skills" className={`${headerStyles.navLinks}`}>Skills</Nav.Link>
            <Nav.Link href="#work" className={`${headerStyles.navLinks}`}>Work</Nav.Link>
            <Nav.Link href="#blog" className={`${headerStyles.navLinks}`}>Blog</Nav.Link>
            <Nav.Link href="#contact" className={`${headerStyles.navLinks}`}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}
