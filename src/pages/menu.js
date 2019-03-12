import React from "react"

import Layout from "../components/layout"
import { PageHeader } from "../utils/Header"
import menutImage from "../images/bcg/menuBcg.jpeg"

import SEO from "../components/seo"

const MenuPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={menutImage}>Menu</PageHeader>
  </Layout>
)

export default MenuPage
