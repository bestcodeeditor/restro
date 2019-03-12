import React from "react"

import Layout from "../components/layout"
import { HomeHeader } from "../utils/Header"
import img from "../images/bcg/home.jpg"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeHeader img={img}>Header</HomeHeader>
  </Layout>
)

export default IndexPage
