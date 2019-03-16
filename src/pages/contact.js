import React from "react"

import Layout from "../components/layout"
import { PageHeader, Banner } from "../utils"
import contactImage from "../images/bcg/contactBcg.jpg"

import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={contactImage}>
      <Banner title="contact us" subtitle="let's get in touch" />
    </PageHeader>
  </Layout>
)

export default ContactPage
