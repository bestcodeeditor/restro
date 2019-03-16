import React from "react"

import Layout from "../components/layout"
import { PageHeader, Banner } from "../utils"
import menutImage from "../images/bcg/menuBcg.jpg"

import SEO from "../components/seo"

const MenuPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={menutImage}>
      <Banner title="menu" subtitle={"indulge in our menu"} />
    </PageHeader>
  </Layout>
)

export default MenuPage
