import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import { rhythm, scale } from "../utils/typography"
// import { rhythm } from "../utils/typography"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    // const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      // <Layout location={this.props.location} title={siteTitle}>
      <Layout location={this.props.location}>
        <SEO
          title={"Movider - " + post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />

        <div className="moviderBorder">
          <div className="picCover">
            <img src={post.frontmatter.thumbnail} alt="content" style={{
              marginBottom: "0px"
            }} />
          </div>
          <div className="blog-detail">
            <h1 style={{
              marginTop: "1.2rem",
              marginBottom: "10px"
            }}>{post.frontmatter.title}
            </h1>

            <div className="post_detail post_date">
              <span className="post_info_date details">
                <span>{post.frontmatter.date}</span>
              </span>
            </div>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </div>
        


        <Bio />

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
            width: `100%`,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
          site {
        siteMetadata {
          title
        author
        }
      }
    markdownRemark(fields: {slug: {eq: $slug } }) {
          id
      excerpt(pruneLength: 160)
        html
      frontmatter {
          title
        date(formatString: "MMMM DD, YYYY")
        description
        thumbnail
      }
    }
  }
`
