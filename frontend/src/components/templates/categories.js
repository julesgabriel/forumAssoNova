import React from "react"
import {graphql, Link} from "gatsby"

import Layout from "../layout"

import AssociationCard from "../associationCard";

let element;

const IndexPage = ({data}) => (
    <Layout>
        {data.strapiCategories.associations.map((document, i) => (
            <AssociationCard title={document.title} content={document.description} url={document.urlForm}
                             first={document.firstImage.childImageSharp.fixed.src}
                             second={document.secondImage.childImageSharp.fixed.src}
                             third={document.thirdImage.childImageSharp.fixed.src}/>
        ))}
    </Layout>
)

export const pageQuery = graphql`
query UserTemplate($id: String!) {
  strapiCategories(id: {eq: $id}) {
    title
    id
    associations {
      title
      description
      urlForm
      firstImage {
        childImageSharp {
          fixed {
            src
          }
        }
      }
      secondImage {
        childImageSharp {
          fixed {
            src
          }
        }
      }
      thirdImage {
        childImageSharp {
          fixed {
            src
          }
        }
      }
    }
  }
}
`

export default IndexPage


