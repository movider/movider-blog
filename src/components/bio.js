/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author } = data.site.siteMetadata
        // const { author, social } = data.site.siteMetadata
        return (
          <div className="written">
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              className="img-author"
            />
            <p className="text-written">
              Written by <strong>{author}</strong> , Move Your Communication Forward.
              {` `}
              {/* <a href={`https://twitter.com/${social.twitter}`}>
                movider.co
              </a> */}
              <a href={`https://movider.co`} style={{ boxShadow: "none" }}>Movider.co</a>
            </p>
            <br />
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
              avatar: file(absolutePath: {regex: "/icon-movider.png/" }) {
              childImageSharp {
            fixed(width: 50, height: 50) {
              ...GatsbyImageSharpFixed
            }
            }
          }
    site {
              siteMetadata {
            author
        social {
              twitter
            }
            }
          }
        }
      `

export default Bio
