import React from "react"

import Layout from "../components/layout"
import { PageHeader } from "../utils/Header"
import SEO from "../components/seo"
import aboutImage from "../images/bcg/aboutBcg.jpeg"

const AboutPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={aboutImage}>About</PageHeader>
  </Layout>
)

export default AboutPage
