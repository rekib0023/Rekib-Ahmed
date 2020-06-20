import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"
import indexStyles from "./index.module.scss"
import { Row, Col } from "react-bootstrap"

export default function Home() {
  return (
    <Layout>
      <Head title="Home" />
      <div className={` ${indexStyles.main} container`}>
        <div className={indexStyles.content}>
          <h2>Hello! I'm Rekib Ahmed</h2>
          <p>I'm Rekib, an undergrad student living in beautiful Mangaldai</p>
        </div>
      </div>
    </Layout>
  )
}
