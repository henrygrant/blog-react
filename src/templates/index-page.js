import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import { Row, Col } from 'react-bootstrap'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import Content, { HTMLContent } from '../components/Content'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  description,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content
  
  return (
    <>
      <Row>
        <Col className="p-0">
          <div
            className="full-width-image mb-3 no-gutters"
            style={{
              backgroundImage: `url(${
                !!image.childImageSharp ? image.childImageSharp.fluid.src : image
              })`,
              backgroundPosition: `top left`,
              backgroundAttachment: `fixed`,
              marginTop: '-70px'
            }}
          >
            <div
              style={{
                display: 'flex',
                height: '150px',
                lineHeight: '1',
                justifyContent: 'space-around',
                alignItems: 'left',
                flexDirection: 'column',
              }}
            >
              <h1
                style={{
                  color: 'white',
                  lineHeight: '1',
                  padding: '0.25em',
                  display: 'flex',
                  'justify-content': 'center'
                }}
              >
                {title}
              </h1>
              <h3
                style={{
                  color: 'white',
                  lineHeight: '1',
                  padding: '0.25em',
                  display: 'flex',
                  'justify-content': 'center'
                }}
              >
                {subheading}
              </h3>
            </div>
          </div>
        </Col>
      </Row>
      <section className="row">
        <PageContent className="col-12" content={content} />
        <Col xs={12}>
          <h3>
            Latest stories
          </h3>
          <BlogRoll />
          <div className="d-flex justify-content-center mb-3">
            <Link className="btn btn-light" to="/blog">
              Read more
            </Link>
          </div>
        </Col>
      </section>
    </>
  )
}

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  description: PropTypes.string,
  content: PropTypes.string
}

const IndexPage = ({ data }) => {
  const { markdownRemark: pageData } = data

  return (
    <Layout>
      <IndexPageTemplate
        image={pageData.frontmatter.image}
        title={pageData.frontmatter.title}
        heading={pageData.frontmatter.heading}
        subheading={pageData.frontmatter.subheading}
        description={pageData.frontmatter.description}
        content={pageData.html}
        contentComponent={HTMLContent}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
      }
    }
  }
`
