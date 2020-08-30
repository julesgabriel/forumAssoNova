import React from "react";

import Layout from "../components/layout"


import {graphql, useStaticQuery} from "gatsby";
import Link from "gatsby-link";
import './style/categories.css';

const CategoriesPage = ({data}) => (

    <Layout>
        <section className="sectionCategories">
            <h1>Catégories d'associations</h1>
            <nav>
                <ul>
                    {data.allStrapiCategories.edges.map(document => (
                        <div>
                            <Link to={`/${document.node.url}`}>
                                <li><span>{document.node.title}</span></li>
                            </Link>
                        </div>
                    ))}
                </ul>
            </nav>
        </section>
        <h1></h1>

    </Layout>
)

export const pageQuery = graphql`
query categoriesData {
  allStrapiCategories {
    edges {
      node {
        title
        url
      }
    }
  }
}
`


export default CategoriesPage;



