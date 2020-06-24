import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

import { Row, Col } from "react-bootstrap"

import indexStyles from "./index.module.scss"
import "../../static/_globalstyles.scss"

export default function Home() {
  return (
    <Layout>
      <Head title="Home" />
      {/* ########## Start Banner Area ########## */}
      <section className={`${indexStyles.siteBanner}`}>
        <div className={`container`}>
          <Row className={` ${indexStyles.siteBannerContent}`}>
            <Col lg={5} md={12} className={`${indexStyles.siteTitle}`}>
              <h3 className={`sub-heading`}>Hello my name is</h3>
              <h1 className={`heading text-uppercase`}>Rekib Ahmed</h1>
              <h4 className={`para`}>
                I design machine learning models that make one's life simpler.
              </h4>
              <div className={`${indexStyles.siteButtons}`}>
                <div className={`d-flex flex-row flex-wrap`}>
                  <button
                    type="button"
                    className={`btn button primary-button mr-4 text-uppercase`}
                  >
                    my work
                  </button>
                  <button
                    type="button"
                    className={`btn button secondary-button  text-uppercase`}
                  >
                    resume
                  </button>
                </div>
              </div>
            </Col>
            <Col lg={7} md={12}>
              <img
                className={`img-fluid ${indexStyles.bannerImg}`}
                src="../../illustration.png"
                alt="banner-img"
              ></img>
            </Col>
          </Row>
        </div>
      </section>
      {/* ########## End Banner Area ########## */}
    </Layout>
  )
}
