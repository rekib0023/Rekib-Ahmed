import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

import { Row, Col, CardColumns, Card } from "react-bootstrap"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "../../static/_globalstyles.scss"
import indexStyles from "./index.module.scss"
import { Link } from "gatsby"

export default function Home() {
  return (
    <Layout>
      <Head title="Home" />
      {/* ########## Start Landing Area ########## */}
      <section className={`${indexStyles.siteBanner}`}>
        <div className={`container`}>
          <Row className={` ${indexStyles.siteBannerContent}`}>
            <Col lg={6} md={12} className={`${indexStyles.siteTitle}`}>
              <h3 className={`sub-heading`}>Hello my name is</h3>
              <h1 className={`heading text-uppercase`}>Rekib Ahmed</h1>
              <h4 className={`para`}>
                I design machine learning models that make one's work simpler.
              </h4>
              <div className={`${indexStyles.siteButtons}`}>
                <div className={`d-flex flex-row flex-wrap`}>
                  <button
                    type="button"
                    className={`btn button primary-button mr-4 text-uppercase`}
                  >
                    <span className={`${indexStyles.btnIcons}`}>
                      <FontAwesomeIcon icon="briefcase" size="md" />
                    </span>
                    my work
                  </button>
                  <button
                    type="button"
                    className={`btn button secondary-button  text-uppercase`}
                  >
                    <span className={`${indexStyles.btnIcons}`}>
                      <FontAwesomeIcon icon="download" size="md" />
                    </span>
                    resume
                  </button>
                </div>
              </div>
            </Col>
            <Col lg={6} md={12}>
              <img
                className={`img-fluid ${indexStyles.bannerImg}`}
                src="../../illustration.png"
                alt="banner-img"
              ></img>
            </Col>
          </Row>
        </div>
      </section>
      {/* ########## End Landing Area ########## */}

      {/* ########### Start About Area ############ */}
      <section
        id="about"
        className={`container-fluid ${indexStyles.aboutSection}`}
      >
        <div className={`container ${indexStyles.aboutSectionContent}`}>
          <h1 className={`section-heading`}>Let me introduce myself</h1>
          <p className={`para ${indexStyles.aboutPara}`}>
            I was born and grew up in<strong>&nbsp;Assam</strong>, in a small
            town called Mangaldai. Growing up I decided to study Computer
            Science Engineering and I got interested in full-stack developement.
            And started building mobile apps and full stack websites for fun.
            <br />
            <br />
            But later on I got introduced to Data Science and really got
            intrigued with it. Learned the basics of
            <strong>&nbsp;statistics</strong> and
            <strong>&nbsp;mathematics</strong> for data science. Self learned
            <strong>&nbsp;data science</strong> and
            <strong>&nbsp;machine learning</strong> from scratch. Build some
            exciting data science projects along the journey to Data Science.
            <br />
            <br />
            Along with Data Science I am interested in
            <strong>&nbsp;UI/UX design</strong>,
            <strong>&nbsp;Full-stack development</strong>, reading, cooking, and
            listening to music all day long.
            <br />
            <br />
            Now here I am seeking<strong>&nbsp;jobs</strong> in the
            <strong>&nbsp;Data Science</strong> domain. Below are listed some of
            the few
            <strong>&nbsp;skills</strong> that I possessd. Please have a look.
          </p>
          <div className={`${indexStyles.aboutSkills}`}>
            <Row>
              <Col
                lg={4}
                md={12}
                className={`${indexStyles.skillGrid} text-center`}
              >
                <Link>
                  <FontAwesomeIcon
                    icon="palette"
                    className={`${indexStyles.circleIcon}`}
                  />
                </Link>
                <div className={`${indexStyles.iconText} text-center`}>Design</div>
              </Col>
              <Col
                lg={4}
                md={12}
                className={`${indexStyles.skillGrid} text-center`}
              >
                <Link>
                  <FontAwesomeIcon
                    icon="code"
                    className={`${indexStyles.circleIcon} stroke-transparent`}
                  />
                </Link>
                <div className={`${indexStyles.iconText} text-center`}>Build</div>
              </Col>
              <Col
                lg={4}
                md={12}
                className={`${indexStyles.skillGrid} text-center`}
              >
                <Link>
                  <FontAwesomeIcon
                    icon="truck-loading"
                    className={`${indexStyles.circleIcon}`}
                  />
                </Link>
                <div className={`${indexStyles.iconText} text-center`}>Deliver</div>
              </Col>
            </Row>
          </div>
        </div>
      </section>
      {/* ########### End About Area ############ */}

      {/* ########### Start Work Area ############ */}
      <section
        id="work"
        className={`container-fluid ${indexStyles.workSection}`}
        a
      ></section>
      {/* ########### End Work Area ############ */}
    </Layout>
  )
}
