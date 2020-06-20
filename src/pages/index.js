import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"
import indexStyles from "./index.module.scss"
import { Row, Col } from "react-bootstrap"

export default function Home() {
  return (
    <Layout>
      <Head title="Home" />
      <div className={` container`}>
        <div className={`${indexStyles.landing}`}>
          <Row className={indexStyles.row}>
            <Col className={indexStyles.content} md={6}>
              <h2>Hello! I'm Rekib Ahmed</h2>
              <p>
                I'm Rekib, an undergrad student living in beautiful Mangaldai
              </p>
            </Col>
            <Col className={indexStyles.img} md={6}>
              aaaa
            </Col>
          </Row>
        </div>
        <div id="about">
          <h2>About</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at
            urna erat. Donec consectetur sapien at erat fermentum, a tempus nibh
            porttitor. Sed non tempus tortor. Donec tincidunt posuere mi, et
            hendrerit tellus semper sit amet. Suspendisse ligula dui, mattis in
            est et, ullamcorper sollicitudin risus. Aliquam vel odio quis quam
            lacinia tristique non in purus. Maecenas sagittis aliquet vehicula.
            Donec porttitor volutpat est. Pellentesque in sapien in odio porta
            ultricies. Morbi faucibus tempus cursus. Sed vitae ornare diam.
            Maecenas porttitor arcu varius nisl condimentum, at aliquam ex
            imperdiet. Donec gravida est ac orci faucibus, id ornare justo
            pulvinar.{" "}
          </p>
        </div>
        <div id="resume">
          <h2>Resume</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at
            urna erat. Donec consectetur sapien at erat fermentum, a tempus nibh
            porttitor. Sed non tempus tortor. Donec tincidunt posuere mi, et
            hendrerit tellus semper sit amet. Suspendisse ligula dui, mattis in
            est et, ullamcorper sollicitudin risus. Aliquam vel odio quis quam
            lacinia tristique non in purus. Maecenas sagittis aliquet vehicula.
            Donec porttitor volutpat est. Pellentesque in sapien in odio porta
            ultricies. Morbi faucibus tempus cursus. Sed vitae ornare diam.
            Maecenas porttitor arcu varius nisl condimentum, at aliquam ex
            imperdiet. Donec gravida est ac orci faucibus, id ornare justo
            pulvinar.{" "}
          </p>
          <p>
            Fusce nec tempus nunc. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Nulla fermentum vulputate tempor. Vestibulum
            mattis quam mauris, eu egestas nunc hendrerit at. Aenean et lacinia
            libero, non rhoncus justo. Integer blandit sit amet metus non
            auctor. Quisque sed lacus vitae nunc pulvinar faucibus quis id
            lacus. Donec turpis risus, pulvinar non tellus sit amet, ultricies
            semper dui. In cursus, nibh a semper placerat, nisl dolor dapibus
            mauris, a fringilla eros libero sit amet quam. Nam lorem orci,
            blandit quis rutrum vitae, tristique eu lacus. Donec sollicitudin
            massa a pellentesque volutpat. In hac habitasse platea dictumst.
            Aliquam malesuada sapien eu nulla viverra dictum. Quisque aliquet
            vitae lacus eget dapibus. Phasellus placerat elit a dapibus
            sagittis. Quisque pharetra lacus orci, id maximus leo vehicula
            vitae.
          </p>
        </div>
        <div id="contact">
          <h2>Contact</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at
            urna erat. Donec consectetur sapien at erat fermentum, a tempus nibh
            porttitor. Sed non tempus tortor. Donec tincidunt posuere mi, et
            hendrerit tellus semper sit amet. Suspendisse ligula dui, mattis in
            est et, ullamcorper sollicitudin risus. Aliquam vel odio quis quam
            lacinia tristique non in purus. Maecenas sagittis aliquet vehicula.
            Donec porttitor volutpat est. Pellentesque in sapien in odio porta
            ultricies. Morbi faucibus tempus cursus. Sed vitae ornare diam.
            Maecenas porttitor arcu varius nisl condimentum, at aliquam ex
            imperdiet. Donec gravida est ac orci faucibus, id ornare justo
            pulvinar.{" "}
          </p>
        </div>
      </div>
    </Layout>
  )
}
