/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, {useState, useEffect} from "react"
import PropTypes from "prop-types"
import {useStaticQuery, graphql} from "gatsby"

import "./layout.css"
import Link from 'gatsby-link';


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
        url
      }
    }
  }
  allStrapiCategories {
    edges {
      node {
        title
        url
      }
    }
  }
}
`)

    const [state, setState] = useState({
        initialClass: "containerResponsiveMenu"
    })

    const handleMenu = () => {
        if (state.initialClass === "containerResponsiveMenu") {
            setState({
                initialClass: "containerResponsiveMenu block"
            })
        } else {
            setState({
                initialClass: "containerResponsiveMenu out"
            })
            setTimeout(function () {
                setState({
                    initialClass: "containerResponsiveMenu"
                })
            }, 600)
        }
    }

    return (
        <main>
            <header>
                <div className="containerLogoForum">
                    <div className="divLogoForum">
                        <div className="logotype">
                            <img src={data.allStrapiCommons.edges[0].node.logo.childImageSharp.fixed.src}
                                 alt={data.allStrapiCommons.edges[0].node.title}/>
                        </div>
                        <div className="forumAsso">
                            <span className="navSpan">Forum Associatif Digitale</span>
                        </div>
                    </div>
                </div>
                <div className="containerLogoPulv">
                    <Link to="/">
                        <img src={data.allStrapiCommons.edges[1].node.logo.childImageSharp.fixed.src}
                             alt={data.allStrapiCommons.edges[1].node.title}/>
                    </Link>
                </div>
                <div className="containerMenu">
                    <div className="divMenu">
                        <div className={state.initialClass}>
                            <div className="cross" onClick={handleMenu}>
                                &#x2715;
                            </div>
                            <nav>
                                <ul>
                                    {data.allStrapiCategories.edges.map(document => (
                                        <Link to={`/${document.node.url}`}>
                                            <li>{document.node.title}</li>
                                        </Link>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                        <div className="categoriesSpan">
                            <Link to="/categories">
                                <span className="navSpan">Catégories d'associations</span>
                            </Link>
                        </div>
                        <div className="containerBurger">
                            <div className="contentBurger" onClick={handleMenu}>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <div className="containerDiscord">
                        <div className="containerLogoDiscord">
                            <a to="https://discord.gg/X77ztWs"><img
                                src={data.allStrapiCommons.edges[2].node.logo.childImageSharp.fixed.src}
                                alt={data.allStrapiCommons.edges[2].node.title}/></a>
                        </div>
                    </div>
                </div>

            </header>
            <main>{children}</main>
            <footer>
                <div className="containerSchoolLogo">
                    <div className="logoBox">
                        <div className="schoolLogos">
                            <a href={data.allStrapiCommons.edges[4].node.url} target="_blank">
                                <img src={data.allStrapiCommons.edges[4].node.logo.childImageSharp.fixed.src}
                                     alt={data.allStrapiCommons.edges[4].title}/>
                            </a>
                        </div>
                        <div className="schoolLogos">
                            <a href={data.allStrapiCommons.edges[5].node.url} target="_blank">
                                <img src={data.allStrapiCommons.edges[5].node.logo.childImageSharp.fixed.src}
                                     alt={data.allStrapiCommons.edges[5].title}/>
                            </a>
                        </div>
                        <div className="schoolLogos">
                            <a href={data.allStrapiCommons.edges[6].node.url} target="_blank">
                                <img src={data.allStrapiCommons.edges[6].node.logo.childImageSharp.fixed.src}
                                     alt={data.allStrapiCommons.edges[6].title}/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="containerCgu">
                    <ul>
                        <Link to="/mentions-legales">
                            <li>Mentions légales</li>
                        </Link>
                    </ul>
                </div>
                <div className="containerPulvSocialNetworks">
                    <div className="socialLogos">
                        <a href={data.allStrapiCommons.edges[3].node.url} target="_blank">
                            <img src={data.allStrapiCommons.edges[3].node.logo.childImageSharp.fixed.src}
                                 alt={data.allStrapiCommons.edges[3].title}/>
                        </a>
                    </div>
                    <div className="socialLogos">
                        <a href={data.allStrapiCommons.edges[7].node.url} target="_blank">
                            <img src={data.allStrapiCommons.edges[7].node.logo.childImageSharp.fixed.src}
                                 alt={data.allStrapiCommons.edges[7].title}/>
                        </a>
                    </div>
                </div>
            </footer>
        </main>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
