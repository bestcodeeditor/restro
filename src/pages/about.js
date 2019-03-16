import React from "react"

import Layout from "../components/layout"
import { PageHeader, Banner } from "../utils"
import SEO from "../components/seo"
import aboutImage from "../images/bcg/aboutBcg.jpg"

const AboutPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={aboutImage}>
      <Banner
        title="about us"
        subtitle="spice in is one of the most distinguished names in the culinary world as far as Indian & continental food is concerned"
      />
    </PageHeader>
  </Layout>
)

export default AboutPage
