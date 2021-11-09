import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

import TagManager from "react-gtm-module"

class BlogIndex extends React.Component {

  componentDidMount() {
    const tagManagerArgs = {
      gtmId:
        process.env.NODE_ENV.trim() === "production"
          ? "GTM-WPP2498"
          : "GTM-KPJ9G6X",
    }

    TagManager.initialize(tagManagerArgs)
  }
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Movider" />

        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div className="wrapper-blog">
              <div class="blog-card">
                <div key={node.fields.slug} className="moviderBorder moviCenter" >
                <Link to={node.fields.slug} >
                  <div className="picCover" >
                    <img src={node.frontmatter.thumbnail} alt="content" />
                  </div>
                </Link >
                  <div className="content-blog">
                    <h2
                      className="titleContent"
                      style={{
                        marginTop: "0.3rem",
                        marginBottom: rhythm(1 / 4),
                      }}
                    >
                      <Link
                        style={{
                          boxShadow: `none`,
                          color: "rgb(62, 70, 91)",
                        }}
                        to={node.fields.slug}
                      >
                        {" "}
                        {title}
                      </Link>
                    </h2>

                    <div className="post_detail post_date">
                      <span className="post_info_date">
                        <span> {node.frontmatter.date} </span>{" "}
                      </span>{" "}
                    </div>

                    <p
                      dangerouslySetInnerHTML={{
                        __html: node.frontmatter.description || node.excerpt,
                      }}
                    />

                    <Link className="continueReading" to={node.fields.slug}>
                      Continue Reading→
                    </Link>
                  </div>
                </div>     
              </div>
            </div>
          )
        })}
        <Bio />
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            thumbnail
          }
        }
      }
    }
  }
`
