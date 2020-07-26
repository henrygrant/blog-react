import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import { Row, Col } from 'react-bootstrap'
import Img from 'gatsby-image'

export const AboutPageTemplate = ({ image, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="row about-page">
      <Col xs={12} className="mb-3">
        <Row className='d-flex justify-content-center'>
          <Col xs={10} sm={8} md={6} lg={4} xl={2}>
            <Img fluid={image.childImageSharp.fluid} />
          </Col>
        </Row>
      </Col>
      <Col xs={12} lg={8} className="mx-auto">
        <PageContent className="content" content={content} />
      </Col>
    </section>
  )
}

AboutPageTemplate.propTypes = {
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  console.log(data)
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        image={post.frontmatter.image}
        content={post.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
