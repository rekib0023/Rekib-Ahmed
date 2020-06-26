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
              <h2 className={`para`}>
                I design machine learning models that make one's work simpler.
              </h2>
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
        <Row style={{ margin: 0 }}>
          <Col lg={6} md={12}>
            <img src="../../illustration2.svg" alt="illustration" />
          </Col>
          <Col lg={6} md={12}>
            <h1 className={`section-heading`}>Let me introduce myself</h1>
            <p className={`para ${indexStyles.aboutPara}`}>
              I was born and raised in<strong>&nbsp;Assam</strong>, in a small
              town called Mangaldai. Growing up I decided to study Computer
              Science Engineering and I got interested in full-stack
              developement. And started building mobile apps and full stack
              websites for fun.
              <br />
              <br />
              But later on I got introduced to Data Science and really got
              intrigued with it. Learned the basics of
              <strong>&nbsp;statistics</strong> and
              <strong>&nbsp;mathematics</strong> for data science. Self learned
              <strong>&nbsp;data science</strong> and
              <strong>&nbsp;machine learning</strong> from scratch. Build some
              exciting data science projects along the journey.
              <br />
              <br />
              Along with Data Science I am interested in
              <strong>&nbsp;UI/UX design</strong>,
              <strong>&nbsp;Full-stack development</strong>, reading, cooking,
              and listening to music all day long.
              <br />
              <br />
              Now here I am seeking<strong>&nbsp;jobs</strong> in the
              <strong>&nbsp;Data Science</strong> domain.
            </p><br/>
            <button
              type="button"
              className={`btn button primary-button  text-uppercase`}
            >
              <span className={`${indexStyles.btnIcons}`}>
                <FontAwesomeIcon icon="download" size="md" />
              </span>
              download my resume
            </button>
          </Col>
        </Row>
      </section>
      {/* ########### End About Area ############ */}

      {/* ########### Start Skills Area ############ */}
      <section
        id="skills"
        className={`container-fluid ${indexStyles.skillSection}`}
      >
        <div className={`container ${indexStyles.skillSectionContent}`}>
          <h1 className={`section-heading text-center`}>My Skills</h1>
          <h3 className={`sub-heading text-center`}>
            I<strong>&nbsp;Design</strong>,<strong>&nbsp;Build</strong>, and
            <strong>&nbsp;Deliver</strong>
          </h3>
          <div className={`${indexStyles.skillCards}`}>
            <Row>
              <Col lg={4} md={12}>
                <div
                  className={`${indexStyles.card} card text-center`}
                  id="design"
                >
                  <div className="overflow-auto">
                    <img
                      alt="design"
                      src="../../pencil.svg"
                      className="card-img-top"
                    />
                  </div>
                  <div
                    className={`card-body text-dark ${indexStyles.cardBody}`}
                  >
                    <h2 className="card-title">Design</h2>
                    <hr />
                    <div
                      className={`card-text text-secondary ${indexStyles.skillIcons}`}
                    >
                      <div>
                        <img src="https://img.icons8.com/color/96/000000/power-bi.png" />
                        <img src="https://img.icons8.com/color/96/000000/adobe-illustrator.png" />
                        <img src="https://img.icons8.com/color/96/000000/adobe-xd.png" />
                        <img src="https://img.icons8.com/fluent/96/000000/microsoft-excel-2019.png" />
                        <img src="https://img.icons8.com/fluent/96/000000/adobe-photoshop.png" />
                        <img src="https://www.vectorlogo.zone/logos/plot_ly/plot_ly-official.svg" />
                        <img src="https://img.icons8.com/color/96/000000/tableau-software.png" />
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={12}>
                <div
                  className={`${indexStyles.card} card text-center`}
                  id="build"
                >
                  <div className="overflow-auto">
                    <img
                      alt="build"
                      src="../../code.svg"
                      className="card-img-top"
                    />
                  </div>
                  <div
                    className={`card-body text-dark ${indexStyles.cardBody}`}
                  >
                    <h2 className="card-title">Build</h2>
                    <hr />
                    <div
                      className={`card-text text-secondary ${indexStyles.skillIcons}`}
                    >
                      <div>
                        <img src="https://img.icons8.com/color/96/000000/python.png" />
                        <img src="https://img.icons8.com/color/96/000000/java-coffee-cup-logo.png" />
                        <img src="https://img.icons8.com/color/96/000000/c-plus-plus-logo.png" />
                        <img src="https://img.icons8.com/fluent/96/000000/github.png" />
                        <img src="https://img.icons8.com/color/96/000000/pycharm.png" />
                        <img src="../../scikit-learn-seeklogo.com.svg" />
                        <img src="../../jupyter-seeklogo.com.svg" />
                        <img src="../../tensorflow-seeklogo.com.svg" />
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={12}>
                <div
                  className={`${indexStyles.card} card text-center`}
                  id="deliver"
                >
                  <div className="overflow-auto">
                    <img
                      alt="deliver"
                      src="../../big-data.svg"
                      className="card-img-top"
                    />
                  </div>
                  <div
                    className={`card-body text-dark ${indexStyles.cardBody}`}
                  >
                    <h2 className="card-title">Deliver</h2>
                    <hr />
                    <div
                      className={`card-text text-secondary ${indexStyles.skillIcons}`}
                    >
                      <div>
                        <img src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" />
                        <img src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg" />
                        <img src="https://www.vectorlogo.zone/logos/mysql/mysql-official.svg" />
                        <img src="https://img.icons8.com/color/96/000000/django.png" />
                        <img src="https://img.icons8.com/color/96/000000/amazon-web-services.png" />
                        <img src="https://img.icons8.com/color/96/000000/flutter.png" />
                        <img src="https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg" />
                        <img src="https://img.icons8.com/color/96/000000/heroku.png" />
                        <img src="../../flask-seeklogo.com.svg" />
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </section>
      {/* ########### End Skills Area ############ */}
    </Layout>
  )
}
