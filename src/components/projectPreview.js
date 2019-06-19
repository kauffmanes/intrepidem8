import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const item = {
  // border: 'solid 1px'
}

const ProjectPreview = ({ fileName }) => (
    <StaticQuery
      query={graphql`
        query {
          file(relativePath: { eq:  "fx250_convention.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <div style={item}>
          <Img fluid={data.file.childImageSharp.fluid} />
        </div>
      )}
    />
);

export default ProjectPreview