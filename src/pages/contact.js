import React from "react"

import Layout from "../components/layout"
import { PageHeader } from "../utils"
import contactImage from "../images/bcg/contact1.jpg"

import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={contactImage}>Contact</PageHeader>
  </Layout>
)

export default ContactPage
