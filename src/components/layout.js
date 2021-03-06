import React from "react"
import "../../static/FontawesomeIcons"

import Footer from "./footer"
import Header from "./header"

import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/index.scss"
import layoutStyles from "./layout.module.scss"

export default function Layout(props) {
  return (
    <div className={layoutStyles.body}>
      <div className={layoutStyles.container}>
        <div className={layoutStyles.content}>
          <Header />
          {props.children}
        </div>
        <Footer />
      </div>
    </div>
  )
}
