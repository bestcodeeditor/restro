import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { HomeHeader, Banner, BannerButton } from "../utils"
import img from "../images/bcg/home.jpg"
import QuickInfo from "../components/HomePageComponents/QuickInfo"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeHeader img={img}>
      <Banner
        title="spice in"
        subtitle="Janakpuri, District center - New Delhi"
      >
        <Link to="/menu/" style={{ textDecoration: "none" }}>
          <BannerButton style={{ margin: "2rem auto" }}>Menu</BannerButton>
        </Link>
      </Banner>
    </HomeHeader>
    <QuickInfo />
  </Layout>
)

export default IndexPage
