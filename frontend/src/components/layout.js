/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import {useStaticQuery, graphql} from "gatsby"

import Header from "./header"
import "./layout.css"
import Img from 'gatsby-image';

const Layout = ({children}) => {
    const data = useStaticQuery(graphql`
query navBarData {
  allStrapiCommons {
    edges {
      node {
        logo {
          childImageSharp {
            fixed {
              src
            }
          }
        }
        title
      }
    }
  }
  allStrapiCategories {
    edges {
      node {
        title
      }
    }
  }
}
`)


    return (
        <>
            <header>
                <div className="containerLogoForum">
                    <div className="logotype">
                        <img src={data.allStrapiCommons.edges[0].node.logo.childImageSharp.fixed.src}
                             alt={data.allStrapiCommons.edges[0].node.title}/>
                    </div>
                    <div className="forumAsso">
                        Forum Associatif Digitale
                    </div>
                </div>
                <div className="containerLogoPulv">
                    <img src={data.allStrapiCommons.edges[1].node.logo.childImageSharp.fixed.src}
                         alt={data.allStrapiCommons.edges[1].node.title}/>
                </div>
                <div className="containerLogoForum">
                    <div className="forumAsso">
                        Forum Associatif Digitale
                    </div>
                    <div className="containerBurger">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </header>

            <main>{children}</main>
            <footer>
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer>

        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
