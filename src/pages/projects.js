import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from "../components/logo"
// import ProjectPreview from "../components/projectPreview.js"
import Img from "gatsby-image"

const container = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '2rem',
  margin: '2rem'
}

const Projects = () => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        },
        discovery: file(relativePath: { eq:  "fx250_convention.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        },
        expedient: file(relativePath: { eq:  "expedient.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        },
      }
    `}
    render={data => (
      <Layout>
        <SEO title="Projects" />
        <Logo siteTitle={data.site.siteMetadata.title} />
        <div style={container}>
          <div>
            <Img fluid={data.discovery.childImageSharp.fluid} />
          </div>
          <div>
            <Img fluid={data.expedient.childImageSharp.fluid} />
          </div>
        </div>
      </Layout>
    )}
  />
)

export default Projects
