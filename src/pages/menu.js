import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { PageHeader, Banner } from "../utils"
import menutImage from "../images/bcg/menuBcg.jpg"
import Catalog from "../components/HomePageComponents/Catalog"

import SEO from "../components/seo"

const MenuPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={menutImage}>
      <Banner title="menu" subtitle={"indulge in our menu"} />
    </PageHeader>
    <Catalog items={data.menu} />
  </Layout>
)

export const query = graphql`
  {
    menu: allContentfulMenuProducts {
      edges {
        node {
          id
          name
          ingredients
          price
          category
          img {
            fixed(width: 150, height: 150) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default MenuPage
