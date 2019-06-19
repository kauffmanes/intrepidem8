import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const page = {
  display: 'flex'
}

const rightCol = {
  flex: 1,
  border: 'solid 1px red'
}
const leftCol = {
  flex: 1,
  border: 'solid 1px green'
}

const ProjectDetails = () => (
  <Layout>
    <SEO title="Project Details" />
    <div style={page}>
      <div style={leftCol}>
      <h1>Project Details</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
      </div>
      <div style={rightCol}>
        <h1>ProjectDetails</h1>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>
      </div>
    </div>

  </Layout>
)

export default ProjectDetails
