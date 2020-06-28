import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import About from "../components/index/About"
import CTAImages from "../components/index/CTAImages"
import HeroSlider from "../components/index/HeroSlider"
import LatestTrend from "../components/index/LatestTrend"
import Quote from "../components/index/Quote"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={["tango", "brand", "alliance"]} />
    <HeroSlider />
    <CTAImages />
    <LatestTrend />
    <Quote />
    <About />
  </Layout>
)

export default IndexPage
