import React from "react"
import { graphql } from "gatsby"

const IndexPage = () => (
  <h1>hello</h1>
)

// const IndexPage = ({data:{allStrapiHomepage:{nodes}}}) => {
  
//   return (
//     <h1>{nodes[0].title}</h1>
//   )
// }
  


// export const query = graphql`
//   {
//     allStrapiHomepage {
//       nodes {
//         title
//       }
//     }
//   }
// `

export default IndexPage
