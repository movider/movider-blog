import React from "react"
// import { Link } from "gatsby"

import {
  rhythm,
  scale
} from "../utils/typography"

class Layout extends React.Component {
  render() {
    const {
      children
    } = this.props
    // const { location, title, children } = this.props
    // const rootPath = `${__PATH_PREFIX__}/`
    let header
    // if (location.pathname === rootPath) {

    // }

    header = (
      <div className="wrapper-header">
        <h1 style={
          {
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
            textAlign: "center"
          }
        } >
          <a href="https://movider.co/blog/"
            style={
              {
                boxShadow: "none",
                display: "block"
              }
            } > < img className="logo"
              src="/blog/images/movider_logo.svg"
              alt="logo" /> </a> {
          /* {title} */} </h1 >
      </div>
    )
    return (<div>
      <header > {header} </header>
      <main className="main-width" > {children} </main>
      <footer> ©{new Date().getFullYear()}, <a href={`https://movider.co`}
        style={
          {
            boxShadow: "none"
          }
        } >
        Movider.co </a> {` `}
      </footer>
    </div>
    )
  }
}

export default Layout
